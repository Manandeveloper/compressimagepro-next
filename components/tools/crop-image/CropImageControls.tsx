"use client";
import { useState, useCallback, useRef } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import OGImage from "@/public/assets/og-crop-image.png"
import {
    Download,
    RefreshCw,
    Crop,
} from "lucide-react";

const aspectRatios = [
    { name: "Free", value: null },
    { name: "1:1", value: 1 },
    { name: "4:3", value: 4 / 3 },
    { name: "16:9", value: 16 / 9 },
    { name: "9:16", value: 9 / 16 },
    { name: "3:2", value: 3 / 2 },
];


export default function CropImageControls() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [croppedUrl, setCroppedUrl] = useState<string | null>(null);
    const [selectedRatio, setSelectedRatio] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 100, height: 100 });
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setCroppedUrl(null);

            const img = new Image();
            img.onload = () => {
                setImageSize({ width: img.width, height: img.height });
                setCropArea({ x: 0, y: 0, width: 100, height: 100 });
                setPreview(URL.createObjectURL(selectedFile));
            };
            img.src = URL.createObjectURL(selectedFile);
        }
    }, []);

    const handleRatioChange = (ratio: number | null) => {
        setSelectedRatio(ratio);
        if (ratio) {
            const newHeight = 100 / ratio;
            setCropArea((prev) => ({
                ...prev,
                width: 100,
                height: Math.min(100, newHeight),
            }));
        }
    };

    const cropImage = useCallback(async () => {
        if (!file || !preview) return;

        setIsProcessing(true);
        try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();

            img.onload = () => {
                const cropX = (cropArea.x / 100) * img.width;
                const cropY = (cropArea.y / 100) * img.height;
                const cropWidth = (cropArea.width / 100) * img.width;
                const cropHeight = (cropArea.height / 100) * img.height;

                canvas.width = cropWidth;
                canvas.height = cropHeight;
                ctx?.drawImage(img, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setCroppedUrl(url);
                            setIsProcessing(false);
                            toast.success("Image cropped successfully!");
                        }
                    },
                    file.type || "image/png",
                    0.95
                );
            };

            img.src = preview;
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to crop image");
        }
    }, [file, preview, cropArea]);

    const downloadImage = useCallback(() => {
        if (!croppedUrl || !file) return;

        const link = document.createElement("a");
        link.href = croppedUrl;
        const ext = file.name.split(".").pop();
        link.download = `cropped_${file.name.replace(/\.[^/.]+$/, "")}.${ext}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    }, [croppedUrl, file]);

    const reset = () => {
        setFile(null);
        setPreview(null);
        setCroppedUrl(null);
        setCropArea({ x: 0, y: 0, width: 100, height: 100 });
    };
    return (
        <ToolLayout
            title="Crop image online – cut, trim & remove unwanted portions free"
            description=""
            icon={Crop}
        >
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Upload & Settings */}
                <div className="space-y-6">
                    <FileUpload
                        accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
                        onFilesSelected={handleFilesSelected}
                        fileType="image"
                        label="Drop your image here"
                        description="PNG, JPG, JPEG or WebP"
                    />

                    {file && (
                        <div className="space-y-6 animate-slide-up">
                            {/* Aspect Ratio Selection */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-4 text-sm font-medium">Aspect Ratio</h4>
                                <div className="flex flex-wrap gap-2">
                                    {aspectRatios.map((ratio) => (
                                        <button
                                            key={ratio.name}
                                            onClick={() => handleRatioChange(ratio.value)}
                                            className={cn(
                                                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                                                selectedRatio === ratio.value
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-card hover:bg-muted"
                                            )}
                                        >
                                            {ratio.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-2 text-sm font-medium">Original Size</h4>
                                <p className="text-sm text-muted-foreground">
                                    {imageSize.width} × {imageSize.height} pixels
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    className="flex-1"
                                    onClick={cropImage}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? (
                                        <>
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Crop Image"
                                    )}
                                </Button>
                                <Button variant="outline" onClick={reset}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Preview */}
                <div className="space-y-4">
                    {preview && (
                        <div className="animate-fade-in">
                            <h4 className="mb-3 text-sm font-medium">
                                {croppedUrl ? "Cropped Result" : "Preview"}
                            </h4>
                            <div
                                ref={containerRef}
                                className="relative overflow-hidden rounded-xl border border-border bg-muted/30"
                            >
                                <img
                                    src={croppedUrl || preview}
                                    alt="Preview"
                                    className="h-auto w-full object-contain"
                                    style={{ maxHeight: "400px" }}
                                />
                                {!croppedUrl && (
                                    <div
                                        className="absolute border-2 border-primary bg-primary/10"
                                        style={{
                                            left: `${cropArea.x}%`,
                                            top: `${cropArea.y}%`,
                                            width: `${cropArea.width}%`,
                                            height: `${cropArea.height}%`,
                                        }}
                                    />
                                )}
                                {croppedUrl && (
                                    <div className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                                        Cropped
                                    </div>
                                )}
                            </div>

                            {croppedUrl && (
                                <Button
                                    variant="gradient"
                                    className="mt-4 w-full"
                                    onClick={downloadImage}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Cropped Image
                                </Button>
                            )}
                        </div>
                    )}

                    {!preview && (
                        <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-border">
                            <p className="text-muted-foreground">Upload an image to see preview</p>
                        </div>
                    )}
                </div>
            </div>
        </ToolLayout>
    );
}
