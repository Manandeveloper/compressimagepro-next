"use client";
import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import {
    Minimize2,
    Download,
    RefreshCw,
    Settings2,
} from "lucide-react";


export default function CompressControls() {
    const [file, setFile] = useState<File | null>(null);
    const [quality, setQuality] = useState([80]);
    const [preview, setPreview] = useState<string | null>(null);
    const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
    const [compressedSize, setCompressedSize] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setCompressedUrl(null);
            setCompressedSize(null);
        }
    }, []);

    const compressImage = useCallback(async () => {
        if (!file) return;

        setIsProcessing(true);
        try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new window.Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setCompressedUrl(url);
                            setCompressedSize(blob.size);
                            setIsProcessing(false);
                            toast.success("Image compressed successfully!");
                        }
                    },
                    "image/jpeg",
                    quality[0] / 100
                );
            };

            img.src = URL.createObjectURL(file);
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to compress image");
        }
    }, [file, quality]);

    const downloadImage = useCallback(() => {
        if (!compressedUrl || !file) return;

        const link = document.createElement("a");
        link.href = compressedUrl;
        link.download = `compressed_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    }, [compressedUrl, file]);

    const reset = () => {
        setFile(null);
        setPreview(null);
        setCompressedUrl(null);
        setCompressedSize(null);
        setQuality([80]);
    };

    const formatSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
    };

    const reduction = file && compressedSize
        ? Math.round((1 - compressedSize / file.size) * 100)
        : 0;
    return (
        <ToolLayout
            title="Online image compressor"
            description=""
            icon={Minimize2}
        >
            <div className="grid gap-8 lg:grid-cols-2 custom-wrap">
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
                            {/* Quality Settings */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <div className="mb-4 flex items-center gap-2">
                                    <Settings2 className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium">Compression Settings</span>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="mb-2 flex items-center justify-between">
                                            <label className="text-sm text-muted-foreground">Quality</label>
                                            <span className="text-sm font-semibold text-foreground">{quality[0]}%</span>
                                        </div>
                                        <Slider
                                            value={quality}
                                            onValueChange={setQuality}
                                            min={10}
                                            max={100}
                                            step={5}
                                            className="w-full"
                                        />
                                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                                            <span>Smaller file</span>
                                            <span>Better quality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* File Info */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-3 text-sm font-medium">File Information</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Original size:</span>
                                        <span className="font-medium">{formatSize(file.size)}</span>
                                    </div>
                                    {compressedSize && (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Compressed size:</span>
                                                <span className="font-medium text-primary">{formatSize(compressedSize)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Reduction:</span>
                                                <span className="font-semibold text-emerald-600">-{reduction}%</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    className="flex-1"
                                    onClick={compressImage}
                                    disabled={isProcessing}
                                >
                                    {isProcessing ? (
                                        <>
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Compress Image"
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
                                    src={compressedUrl || preview}
                                    alt="Preview"
                                    className="h-auto w-full object-contain"
                                    style={{ maxHeight: "400px" }}
                                />
                                {compressedUrl && (
                                    <div className="absolute right-3 top-3 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                                        Compressed -{reduction}%
                                    </div>
                                )}
                            </div>

                            {compressedUrl && (
                                <Button
                                    variant="gradient"
                                    className="mt-4 w-full"
                                    onClick={downloadImage}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Compressed Image
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
