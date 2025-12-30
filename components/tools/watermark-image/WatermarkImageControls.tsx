"use client";

import { useState, useCallback, useRef } from "react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { FileUpload } from "@/components/shared/FileUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
    Type,
    Download,
    RefreshCw,
} from "lucide-react";
const positions = [
    { name: "Top Left", value: "top-left" },
    { name: "Top Center", value: "top-center" },
    { name: "Top Right", value: "top-right" },
    { name: "Center", value: "center" },
    { name: "Bottom Left", value: "bottom-left" },
    { name: "Bottom Center", value: "bottom-center" },
    { name: "Bottom Right", value: "bottom-right" },
];

const fonts = [
    { name: "Sans-serif", value: "Arial, sans-serif" },
    { name: "Serif", value: "Georgia, serif" },
    { name: "Monospace", value: "Courier New, monospace" },
];

export default function WatermarkImageControls() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [watermarkedUrl, setWatermarkedUrl] = useState<string | null>(null);
    const [text, setText] = useState("© Your Name");
    const [fontSize, setFontSize] = useState([32]);
    const [opacity, setOpacity] = useState([70]);
    const [position, setPosition] = useState("bottom-right");
    const [font, setFont] = useState("Arial, sans-serif");
    const [color, setColor] = useState("#ffffff");
    const [isProcessing, setIsProcessing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setWatermarkedUrl(null);
        }
    }, []);

    const getPosition = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, textWidth: number) => {
        const padding = 20;
        const textHeight = fontSize[0];

        switch (position) {
            case "top-left":
                return { x: padding, y: padding + textHeight };
            case "top-center":
                return { x: (canvas.width - textWidth) / 2, y: padding + textHeight };
            case "top-right":
                return { x: canvas.width - textWidth - padding, y: padding + textHeight };
            case "center":
                return { x: (canvas.width - textWidth) / 2, y: canvas.height / 2 };
            case "bottom-left":
                return { x: padding, y: canvas.height - padding };
            case "bottom-center":
                return { x: (canvas.width - textWidth) / 2, y: canvas.height - padding };
            case "bottom-right":
            default:
                return { x: canvas.width - textWidth - padding, y: canvas.height - padding };
        }
    };

    const addWatermark = useCallback(async () => {
        if (!file || !text) return;

        setIsProcessing(true);
        try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;

                if (!ctx) return;

                // Draw original image
                ctx.drawImage(img, 0, 0);

                // Configure text
                ctx.font = `${fontSize[0]}px ${font}`;
                ctx.fillStyle = color;
                ctx.globalAlpha = opacity[0] / 100;

                // Get text width and position
                const textWidth = ctx.measureText(text).width;
                const pos = getPosition(ctx, canvas, textWidth);

                // Add text shadow for better visibility
                ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;

                // Draw text
                ctx.fillText(text, pos.x, pos.y);

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            const url = URL.createObjectURL(blob);
                            setWatermarkedUrl(url);
                            setIsProcessing(false);
                            toast.success("Watermark added successfully!");
                        }
                    },
                    file.type || "image/png",
                    0.95
                );
            };

            img.src = URL.createObjectURL(file);
        } catch (error) {
            setIsProcessing(false);
            toast.error("Failed to add watermark");
        }
    }, [file, text, fontSize, opacity, position, font, color]);

    const downloadImage = useCallback(() => {
        if (!watermarkedUrl || !file) return;

        const link = document.createElement("a");
        link.href = watermarkedUrl;
        const ext = file.name.split(".").pop();
        link.download = `watermarked_${file.name.replace(/\.[^/.]+$/, "")}.${ext}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    }, [watermarkedUrl, file]);

    const reset = () => {
        setFile(null);
        setPreview(null);
        setWatermarkedUrl(null);
        setText("© Your Name");
    };
    return (
        <ToolLayout
            title="Add watermark to image online text & logo watermark free"
            description=""
            icon={Type}
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
                            {/* Text Settings */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-4">
                                <h4 className="text-sm font-medium">Watermark Text</h4>
                                <Input
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter watermark text"
                                />

                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label className="text-sm text-muted-foreground">Font Size</label>
                                        <span className="text-sm font-semibold">{fontSize[0]}px</span>
                                    </div>
                                    <Slider
                                        value={fontSize}
                                        onValueChange={setFontSize}
                                        min={12}
                                        max={72}
                                        step={2}
                                    />
                                </div>

                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label className="text-sm text-muted-foreground">Opacity</label>
                                        <span className="text-sm font-semibold">{opacity[0]}%</span>
                                    </div>
                                    <Slider
                                        value={opacity}
                                        onValueChange={setOpacity}
                                        min={10}
                                        max={100}
                                        step={5}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm text-muted-foreground">Color</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="color"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="h-10 w-16 cursor-pointer rounded-lg border border-border"
                                        />
                                        <Input
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="flex-1"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Position */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-3 text-sm font-medium">Position</h4>
                                <div className="grid grid-cols-3 gap-2">
                                    {positions.map((pos) => (
                                        <button
                                            key={pos.value}
                                            onClick={() => setPosition(pos.value)}
                                            className={cn(
                                                "rounded-lg px-3 py-2 text-xs font-medium transition-all",
                                                position === pos.value
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-card hover:bg-muted"
                                            )}
                                        >
                                            {pos.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Font Selection */}
                            <div className="rounded-xl border border-border bg-muted/30 p-4">
                                <h4 className="mb-3 text-sm font-medium">Font</h4>
                                <div className="flex flex-wrap gap-2">
                                    {fonts.map((f) => (
                                        <button
                                            key={f.value}
                                            onClick={() => setFont(f.value)}
                                            className={cn(
                                                "rounded-lg px-4 py-2 text-sm transition-all",
                                                font === f.value
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-card hover:bg-muted"
                                            )}
                                            style={{ fontFamily: f.value }}
                                        >
                                            {f.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <Button
                                    variant="gradient"
                                    className="flex-1"
                                    onClick={addWatermark}
                                    disabled={isProcessing || !text}
                                >
                                    {isProcessing ? (
                                        <>
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Add Watermark"
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
                                    src={watermarkedUrl || preview}
                                    alt="Preview"
                                    className="h-auto w-full object-contain"
                                    style={{ maxHeight: "400px" }}
                                />
                                {watermarkedUrl && (
                                    <div className="absolute right-3 top-3 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg">
                                        Watermarked
                                    </div>
                                )}
                            </div>

                            {watermarkedUrl && (
                                <Button
                                    variant="gradient"
                                    className="mt-4 w-full"
                                    onClick={downloadImage}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Watermarked Image
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
