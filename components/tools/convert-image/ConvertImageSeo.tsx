"use client";
import Image from "next/image";
import Icon1 from "@/public/assets/Works-with-JPG,-PNG-and-WebP.svg"
import Icon2 from "@/public/assets/Maintain-high-clarity-with-smart-compression.svg"
import Icon3 from "@/public/assets/Quick-drag-and-drop-upload-with-fast-processing.svg"
import Icon4 from "@/public/assets/Works-on-all-devices-mobile-tablet-and-desktop.svg"
import Icon5 from "@/public/assets/No-installation-or-signup-required.svg"
import Icon6 from "@/public/assets/Ideal-for-web-optimization-and-compatibility.svg"
import faqimage from "@/public/assets/faq-image.webp"
import { faqData } from "@/components/tools/convert-image/faqData";
import {
    Palette,
    Minimize2,
    Type,
    Scaling,
    Crop,
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
        title: "Resize Image",
        description: "Change dimensions with precision",
        icon: Scaling,
        href: "/image-resize",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Crop Image",
        description: "Crop to perfect dimensions",
        icon: Crop,
        href: "/image-crop",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "Rotate Image",
        description: "Rotate & Flip image",
        icon: Wand2,
        href: "/rotate-image",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "Add Watermark",
        description: "Protect your images with text",
        icon: Type,
        href: "/image-watermark",
        gradient: "from-indigo-500 to-blue-500",
    },
];
export default function ConvertImageSeo() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>Convert your images effortlessly with the Online Image Converter. Whether you need to convert JPG to PNG, PNG to WebP, or WebP to JPEG, this tool offers fast, high-quality format conversion without compromising visual clarity. It’s designed for creators, developers, and everyday users who need reliable, format-flexible image conversion directly in their browser.</p>
                    </div>
                </div>
            </div>
            <div className="why-use padding">
                <div className="container">
                    <h2 className="text-center">Why Use This Image Converter Tool?</h2>
                    <div className="wrap">
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon1}
                                    alt="Convert images to multiple formats like JPG, PNG, WebP, BMP, and more"
                                />
                            </div>
                            <p className="text text-center">Convert images to multiple formats like JPG, PNG, WebP, BMP, and more</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Maintain original image quality during conversion"
                                />
                            </div>
                            <p className="text text-center">Maintain original image quality during conversion</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Quick drag-and-drop upload with fast processing"
                                />
                            </div>
                            <p className="text text-center">Quick drag-and-drop upload with fast processing</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="Works on all devices mobile, tablet, and desktop"
                                />
                            </div>
                            <p className="text text-center">Works on all devices mobile, tablet, and desktop</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="No installation or signup required"
                                />
                            </div>
                            <p className="text text-center">No installation or signup required</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="Ideal for web optimization and compatibility"
                                />
                            </div>
                            <p className="text text-center">Ideal for web optimization and compatibility</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of This Tool</h2>
                    <div className="content">
                        <p>This image converter delivers a smooth and efficient conversion experience by combining high accuracy with minimal image distortion. Unlike many online tools that compress images aggressively, this converter preserves color accuracy, transparency, and sharpness across formats. It simplifies the process for designers, developers, photographers, and marketers by offering multiple format outputs in one place—without installing bulky software. Whether you're optimizing images for websites, apps, or print, the tool ensures consistent quality in just a few clicks.</p>
                    </div>
                </div>
            </div>
            <div className="features-sec padding">
                <div className="container">
                    <h2 className="text-center">Comparison With Other Image Conversion Tools</h2>
                    <div className="main-wrap">
                        <div className="wrap">
                            <div className="features">
                                <h3>Features</h3>
                                <ul>
                                    <li>Supports multiple formats</li>
                                    <li>Maintains image quality</li>
                                    <li>Browser-based (no install)</li>
                                    <li>Fast conversion speed</li>
                                    <li>Free to use</li>
                                    <li>Works on all devices</li>
                                    <li>Transparency support (PNG/WebP)</li>
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
                                    <li>Limited formats</li>
                                    <li>✘ May lower quality</li>
                                    <li>✔</li>
                                    <li>✘ Slower</li>
                                    <li>✘ Subscription needed</li>
                                    <li>✘ Not always mobile-friendly</li>
                                    <li>✘ Sometimes lost</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Offline Editors</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✘</li>
                                    <li>✔</li>
                                    <li>✘ Paid software</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="use-case padding">
                <div className="container">
                    <h2 className="text-center">How to Use the Image Converter</h2>
                    <div className="content">
                        <ul>
                            <li>1. Upload Your Image.</li>
                            <li>2. Choose the Output Format</li>
                            <li>3. Convert the Image</li>
                            <li>4. Download the Converted File</li>
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
                            <Image src={faqimage} alt="convert faq image" />
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