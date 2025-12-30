"use client";
import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
    Download,
    RefreshCw,
    Scaling,
    Link2,
    Link2Off,
} from "lucide-react";
const presets = [
    { name: "Instagram Post", width: 1080, height: 1080 },
    { name: "Instagram Story", width: 1080, height: 1920 },
    { name: "Facebook Cover", width: 851, height: 315 },
    { name: "Twitter Header", width: 1500, height: 500 },
    { name: "YouTube Thumbnail", width: 1280, height: 720 },
    { name: "LinkedIn Banner", width: 1584, height: 396 },
];

export default function CompressControls() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [resizedUrl, setResizedUrl] = useState<string | null>(null);
    const [originalWidth, setOriginalWidth] = useState(0);
    const [originalHeight, setOriginalHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [maintainRatio, setMaintainRatio] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

    const aspectRatio = originalWidth / originalHeight;

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setResizedUrl(null);

            const img = new Image();
            img.onload = () => {
                setOriginalWidth(img.width);
                setOriginalHeight(img.height);
                setWidth(img.width);
                setHeight(img.height);
                setPreview(URL.createObjectURL(selectedFile));
            };
            img.src = URL.createObjectURL(selectedFile);
        }
    }, []);

    const handleWidthChange = (newWidth: number) => {
        setWidth(newWidth);
        if (maintainRatio && aspectRatio) {
            setHeight(Math.round(newWidth / aspectRatio));
        }
    };

    const handleHeightChange = (newHeight: number) => {
        setHeight(newHeight);
        if (maintainRatio && aspectRatio) {
            setWidth(Math.round(newHeight * aspectRatio));
        }
    };

    const applyPreset = (preset: typeof presets[0]) => {
        setWidth(preset.width);
        setHeight(preset.height);
        setMaintainRatio(false);
    };

    const resizeImage = useCallback(async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();

            img.onload = () => {
                canvas.width = width;
                canvas.height = height;
                ctx?.drawImage(img, 0, 0, width, height);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setResizedUrl(url);
                            setIsProcessing(false);
                            toast.success("Image resized successfully!");
                        }
                    },
                    file.type || "image/png",
                    0.95
                );
            };

            img.src = URL.createObjectURL(file);
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to resize image");
        }
    }, [file, width, height]);

    const downloadImage = useCallback(() => {
        if (!resizedUrl || !file) return;

        const link = document.createElement("a");
        link.href = resizedUrl;
        const ext = file.name.split(".").pop();
        link.download = `resized_${width}x${height}_${file.name.replace(/\.[^/.]+$/, "")}.${ext}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    }, [resizedUrl, file, width, height]);

    const reset = () => {
        setFile(null);
        setPreview(null);
        setResizedUrl(null);
        setWidth(0);
        setHeight(0);
    };
    return (
        <ToolLayout
            title="Resize image online – adjust width & height instantly for free"
            description=""
            icon={Scaling}
        >
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Upload & Settings */}
                <div className="space-y-6">
                    <FileUpload
                        accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif"] }}
                        onFilesSelected={handleFilesSelected}
                        fileType="image"
                        label="Drop your image here"
                        description="PNG, JPG, JPEG, WebP or GIF"
                    />

                    {file && (
                        <div className="space-y-6 animate-slide-up">
                            {/* Dimension Controls */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-sm font-medium">Dimensions</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setMaintainRatio(!maintainRatio)}
                                        className={maintainRatio ? "text-primary" : "text-muted-foreground"}
                                    >
                                        {maintainRatio ? (
                                            <Link2 className="mr-2 h-4 w-4" />
                                        ) : (
                                            <Link2Off className="mr-2 h-4 w-4" />
                                        )}
                                        {maintainRatio ? "Linked" : "Unlinked"}
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-xs text-muted-foreground">Width (px)</label>
                                        <Input
                                            type="number"
                                            value={width}
                                            onChange={(e) => handleWidthChange(Number(e.target.value))}
                                            min={1}
                                            max={10000}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 block text-xs text-muted-foreground">Height (px)</label>
                                        <Input
                                            type="number"
                                            value={height}
                                            onChange={(e) => handleHeightChange(Number(e.target.value))}
                                            min={1}
                                            max={10000}
                                        />
                                    </div>
                                </div>

                                <p className="mt-3 text-xs text-muted-foreground">
                                    Original: {originalWidth} × {originalHeight} px
                                </p>
                            </div>

                            {/* Presets */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-3 text-sm font-medium">Quick Presets</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {presets.map((preset) => (
                                        <Button
                                            key={preset.name}
                                            variant="outline"
                                            size="sm"
                                            className="justify-start text-xs"
                                            onClick={() => applyPreset(preset)}
                                        >
                                            {preset.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    className="flex-1"
                                    onClick={resizeImage}
                                    disabled={isProcessing || !width || !height}
                                >
                                    {isProcessing ? (
                                        <>
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Resize Image"
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
                                    src={resizedUrl || preview}
                                    alt="Preview"
                                    className="h-auto w-full object-contain"
                                    style={{ maxHeight: "400px" }}
                                />
                                {resizedUrl && (
                                    <div className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                                        {width} × {height}
                                    </div>
                                )}
                            </div>

                            {resizedUrl && (
                                <Button
                                    variant="gradient"
                                    className="mt-4 w-full"
                                    onClick={downloadImage}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resized Image
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