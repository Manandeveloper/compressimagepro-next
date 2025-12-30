"use client";
import { useState, useRef, useEffect } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Download,
    RefreshCw,
    RotateCw,
    RotateCcw,
    FlipHorizontal,
    FlipVertical,
} from "lucide-react";


export default function RotateImageControls() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [rotation, setRotation] = useState(0);
    const [flipH, setFlipH] = useState(false);
    const [flipV, setFlipV] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFilesSelected = (files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreview(url);
            setProcessedImage(null);
            setRotation(0);
            setFlipH(false);
            setFlipV(false);
        }
    };

    useEffect(() => {
        if (preview) {
            applyTransformations();
        }
    }, [preview, rotation, flipH, flipV]);

    const applyTransformations = () => {
        if (!preview || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.onload = () => {
            const isRotated90 = rotation === 90 || rotation === 270;
            const width = isRotated90 ? img.height : img.width;
            const height = isRotated90 ? img.width : img.height;

            canvas.width = width;
            canvas.height = height;

            ctx.save();
            ctx.translate(width / 2, height / 2);
            ctx.rotate((rotation * Math.PI) / 180);
            ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            ctx.restore();

            const dataUrl = canvas.toDataURL("image/png");
            setProcessedImage(dataUrl);
        };
        img.src = preview;
    };

    const rotateClockwise = () => {
        setRotation((prev) => (prev + 90) % 360);
        toast.success("Rotated 90° clockwise");
    };

    const rotateCounterClockwise = () => {
        setRotation((prev) => (prev - 90 + 360) % 360);
        toast.success("Rotated 90° counter-clockwise");
    };

    const toggleFlipHorizontal = () => {
        setFlipH((prev) => !prev);
        toast.success(flipH ? "Horizontal flip removed" : "Flipped horizontally");
    };

    const toggleFlipVertical = () => {
        setFlipV((prev) => !prev);
        toast.success(flipV ? "Vertical flip removed" : "Flipped vertically");
    };

    const downloadImage = () => {
        if (!processedImage) return;
        const link = document.createElement("a");
        link.download = `rotated-${file?.name || "image.png"}`;
        link.href = processedImage;
        link.click();
        toast.success("Image downloaded!");
    };

    const reset = () => {
        setFile(null);
        setPreview(null);
        setProcessedImage(null);
        setRotation(0);
        setFlipH(false);
        setFlipV(false);
    };
    return (
        <ToolLayout
            title="Rotate image online – rotate left, right, or 360° free"
            description=""
            icon={RotateCw}
        >
            <canvas ref={canvasRef} className="hidden" />

            {!file ? (
                <FileUpload
                    accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif"] }}
                    maxFiles={1}
                    maxSize={20 * 1024 * 1024}
                    onFilesSelected={handleFilesSelected}
                    label="Upload an image"
                    description="Drag and drop or click to select (max 20MB)"
                    fileType="image"
                />
            ) : (
                <div className="space-y-6">
                    {/* Controls */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                            variant="outline"
                            onClick={rotateCounterClockwise}
                            className="gap-2"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Rotate Left
                        </Button>
                        <Button
                            variant="outline"
                            onClick={rotateClockwise}
                            className="gap-2"
                        >
                            <RotateCw className="h-4 w-4" />
                            Rotate Right
                        </Button>
                        <Button
                            variant={flipH ? "default" : "outline"}
                            onClick={toggleFlipHorizontal}
                            className="gap-2"
                        >
                            <FlipHorizontal className="h-4 w-4" />
                            Flip H
                        </Button>
                        <Button
                            variant={flipV ? "default" : "outline"}
                            onClick={toggleFlipVertical}
                            className="gap-2"
                        >
                            <FlipVertical className="h-4 w-4" />
                            Flip V
                        </Button>
                    </div>

                    {/* Status */}
                    <div className="text-center text-sm text-muted-foreground">
                        Rotation: {rotation}° | Flip H: {flipH ? "Yes" : "No"} | Flip V: {flipV ? "Yes" : "No"}
                    </div>

                    {/* Preview */}
                    <div className="flex justify-center">
                        <div className="relative max-h-[400px] max-w-full overflow-hidden rounded-lg border border-border bg-muted/30">
                            {processedImage && (
                                <img
                                    src={processedImage}
                                    alt="Transformed preview"
                                    className="max-h-[400px] w-auto object-contain"
                                />
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button variant="gradient" onClick={downloadImage} className="gap-2">
                            <Download className="h-4 w-4" />
                            Download Image
                        </Button>
                        <Button variant="outline" onClick={reset} className="gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Reset
                        </Button>
                    </div>
                </div>
            )}
        </ToolLayout>
    );
}
