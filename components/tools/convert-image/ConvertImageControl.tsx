"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
    Download,
    RefreshCw,
    FileOutput,
    Check,
} from "lucide-react";

const formats = [
    { id: "jpeg", name: "JPEG", ext: ".jpg", mime: "image/jpeg", description: "Best for photos" },
    { id: "png", name: "PNG", ext: ".png", mime: "image/png", description: "Supports transparency" },
    { id: "webp", name: "WebP", ext: ".webp", mime: "image/webp", description: "Modern web format" },
];
export default function ConvertImageControl() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
    const [selectedFormat, setSelectedFormat] = useState("webp");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setConvertedUrl(null);
        }
    }, []);

    const convertImage = useCallback(async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();

            const format = formats.find((f) => f.id === selectedFormat);
            if (!format) return;

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setConvertedUrl(url);
                            setIsProcessing(false);
                            toast.success(`Converted to ${format.name} successfully!`);
                        }
                    },
                    format.mime,
                    0.95
                );
            };

            img.src = URL.createObjectURL(file);
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to convert image");
        }
    }, [file, selectedFormat]);

    const downloadImage = useCallback(() => {
        if (!convertedUrl || !file) return;

        const format = formats.find((f) => f.id === selectedFormat);
        if (!format) return;

        const link = document.createElement("a");
        link.href = convertedUrl;
        link.download = `${file.name.replace(/\.[^/.]+$/, "")}${format.ext}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    }, [convertedUrl, file, selectedFormat]);

    const reset = () => {
        setFile(null);
        setPreview(null);
        setConvertedUrl(null);
    };
    const currentFormat = file?.type.split("/")[1]?.toUpperCase() || "Unknown";
    return (
        <ToolLayout
            title="Convert image online – jpg, png, webp, svg, heic to any format"
            description=""
            icon={FileOutput}
        >
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Upload & Settings */}
                <div className="space-y-6">
                    <FileUpload
                        accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"] }}
                        onFilesSelected={handleFilesSelected}
                        fileType="image"
                        label="Drop your image here"
                        description="Supports all common formats"
                    />

                    {file && (
                        <div className="space-y-6 animate-slide-up">
                            {/* Current Format */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <p className="text-sm">
                                    <span className="text-muted-foreground">Current format: </span>
                                    <span className="font-semibold">{currentFormat}</span>
                                </p>
                            </div>

                            {/* Format Selection */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-4 text-sm font-medium">Convert to:</h4>
                                <div className="grid gap-3">
                                    {formats.map((format) => (
                                        <button
                                            key={format.id}
                                            onClick={() => setSelectedFormat(format.id)}
                                            className={cn(
                                                "flex items-center justify-between rounded-xl border-2 p-4 transition-all duration-200",
                                                selectedFormat === format.id
                                                    ? "border-primary bg-primary/5"
                                                    : "border-transparent bg-card hover:border-border"
                                            )}
                                        >
                                            <div className="text-left">
                                                <p className="font-semibold">{format.name}</p>
                                                <p className="text-sm text-muted-foreground">{format.description}</p>
                                            </div>
                                            {selectedFormat === format.id && (
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                                    <Check className="h-4 w-4 text-primary-foreground" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    className="flex-1"
                                    onClick={convertImage}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? (
                                        <>
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            Converting...
                                        </>
                                    ) : (
                                        `Convert to ${formats.find((f) => f.id === selectedFormat)?.name}`
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
                            <h4 className="mb-3 text-sm font-medium">Preview</h4>
                            <div className="relative overflow-hidden rounded-xl border border-border bg-muted/30">
                                <img
                                    src={convertedUrl || preview}
                                    alt="Preview"
                                    className="h-auto w-full object-contain"
                                    style={{ maxHeight: "400px" }}
                                />
                                {convertedUrl && (
                                    <div className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                                        {formats.find((f) => f.id === selectedFormat)?.name}
                                    </div>
                                )}
                            </div>

                            {convertedUrl && (
                                <Button
                                    variant="gradient"
                                    className="mt-4 w-full"
                                    onClick={downloadImage}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download {formats.find((f) => f.id === selectedFormat)?.name}
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