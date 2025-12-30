"use client";
import Image from "next/image";
import Icon1 from "@/public/assets/Crop-images-to-any-custom-dimensions.svg"
import Icon2 from "@/public/assets/Remove-unwanted-background.svg"
import Icon3 from "@/public/assets/Works-with-JPG,-PNG-and-WebP.svg"
import Icon4 from "@/public/assets/Real-time-preview-to-ensure-perfect-framing.svg"
import Icon5 from "@/public/assets/No-quality-loss-during-the-cropping-process.svg"
import Icon6 from "@/public/assets/completely-browser-based-and-free-to-use.svg"
import faqimage from "@/public/assets/faq-image.webp"
import OGImage from "@/public/assets/og-crop-image.png"
import { faqData } from "@/components/tools/crop-image/faqData";
import {
    Palette,
    Minimize2,
    Type,
    Scaling,
    FileOutput,
    Wand2,
} from "lucide-react";
import { ToolCard } from "@/components/shared/ToolCard";

const imageTools = [
    {
        title: "Compress Image",
        description: "Reduce file size while maintaining quality",
        icon: Minimize2,
        href: "/image-compress",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Rotate Image",
        description: "Rotate & Flip image",
        icon: Scaling,
        href: "/rotate-image",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Change Background",
        description: "AI Background Remover",
        icon: Palette,
        href: "/change-background",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "Convert Format",
        description: "Convert between image formats",
        icon: FileOutput,
        href: "/image-convert",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        title: "Add Watermark",
        description: "Protect your images with text",
        icon: Type,
        href: "/image-watermark",
        gradient: "from-indigo-500 to-blue-500",
    },
];



export default function CropImageSeo() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>The Online Image Crop Tool allows you to crop any image with precision and ease. Whether you want to remove unwanted areas, change aspect ratios, or fit your image for social media, this tool provides fast, clean, and accurate cropping. No software installation is required—crop, preview, and download your optimized image within seconds.</p>
                    </div>
                </div>
            </div>
            <div className="why-use padding">
                <div className="container">
                    <h2 className="text-center">Why Use This Image Crop Tool?</h2>
                    <div className="wrap">
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon1}
                                    alt="Crop images to any custom dimensions or aspect ratios"
                                />
                            </div>
                            <p className="text text-center">Crop images to any custom dimensions or aspect ratios</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Remove unwanted background or unnecessary parts instantly"
                                />
                            </div>
                            <p className="text text-center">Remove unwanted background or unnecessary parts instantly</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Supports PNG, JPG, JPEG, and WebP files"
                                />
                            </div>
                            <p className="text text-center">Supports PNG, JPG, JPEG, and WebP files</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="Real-time preview to ensure perfect framing"
                                />
                            </div>
                            <p className="text text-center">Real-time preview to ensure perfect framing</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="No quality loss during the cropping process"
                                />
                            </div>
                            <p className="text text-center">No quality loss during the cropping process</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="Completely browser-based and free to use"
                                />
                            </div>
                            <p className="text text-center">Completely browser-based and free to use</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of This Tool</h2>
                    <div className="content">
                        <p>This image crop tool offers a seamless workflow where accuracy meets convenience. You can manually adjust the cropping area with precise controls, ensuring you capture only the part of the image you want. Unlike many traditional editors, this tool preserves image clarity even after cropping, allowing photographers, designers, and social media users to edit their visuals without worrying about distortion or quality loss. It eliminates the need for heavy software and delivers professional-grade cropping directly in your browser.</p>
                    </div>
                </div>
            </div>
            <div className="features-sec padding">
                <div className="container">
                    <h2 className="text-center">Comparison With Other Image Resizing Tools</h2>
                    <div className="main-wrap">
                        <div className="wrap">
                            <div className="features">
                                <h3>Features</h3>
                                <ul>
                                    <li>Easy drag-and-drop crop</li>
                                    <li>No installation needed</li>
                                    <li>Maintains original quality</li>
                                    <li>Supports multiple formats</li>
                                    <li>Fast & lightweight</li>
                                    <li>Free to use</li>
                                    <li>Real-time preview</li>
                                </ul>
                            </div>
                            <div className="our-tool">
                                <h3>This Tool</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Other Online Tools</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✘ Often reduces quality</li>
                                    <li>Limited formats</li>
                                    <li>✔ May lag</li>
                                    <li>✔ Requires upgrade</li>
                                    <li>✘ Not always</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Offline Editors</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✘</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✘ Heavy software</li>
                                    <li>✘ Paid software</li>
                                    <li>✔</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="use-case padding">
                <div className="container">
                    <h2 className="text-center">How to Use the Image Resizer</h2>
                    <div className="content">
                        <ul>
                            <li>1. Upload your image by clicking the “Choose Image” button.</li>
                            <li>2. Enter your desired width and height or select “Maintain Aspect Ratio.”</li>
                            <li>3. Preview the resized version instantly on screen.</li>
                            <li>4. Click “Download Resized Image” to save it.</li>
                            <li>5. Repeat the steps for additional images no limits or login needed.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="faq-sec padding">
                <div className="container">
                    <div className="wrap">
                        <div className="image">
                            <p className="small-title">Still have questions?</p>
                            <p className="big-title">Relax because we always will be here for you</p>
                            <Image src={faqimage} alt="cropimage faq image" />
                        </div>
                        <div className="content">
                            <div className="faq-list">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="single">
                                        <p className="question">{faq.question}</p>
                                        <p className="answer">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-image padding">
                <div className="container">
                    <h2 className="text-center">
                        Other Free Image Editing Tools
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {imageTools.map((tool) => (
                            <ToolCard key={tool.href} {...tool} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
