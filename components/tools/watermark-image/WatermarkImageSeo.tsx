"use client";
import Image from "next/image";
import { faqData } from "@/components/tools/watermark-image/faqData";
import Icon1 from "@/public/assets/Prevent-unauthorized-use-or-image-theft.svg"
import Icon2 from "@/public/assets/Easily-add-text-or-logo-watermarks.svg"
import Icon3 from "@/public/assets/Adjust-watermark-size-opacity-and-position.svg"
import Icon4 from "@/public/assets/Maintain-high-clarity-with-smart-compression.svg"
import Icon5 from "@/public/assets/Works-on-all-devices-mobile-tablet-and-desktop.svg"
import Icon6 from "@/public/assets/completely-browser-based-and-free-to-use.svg"
import faqimage from "@/public/assets/faq-image.webp"

import {
    Palette,
    Minimize2,
    Scaling,
    Crop,
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
        title: "Convert Format",
        description: "Convert between image formats",
        icon: FileOutput,
        href: "/image-convert",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        title: "Rotate Image",
        description: "Rotate & Flip image",
        icon: Wand2,
        href: "/rotate-image",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "Change Background",
        description: "AI Background Remover",
        icon: Palette,
        href: "/change-background",
        gradient: "from-indigo-500 to-blue-500",
    },
];


export default function WatermarkImageSeo() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>Add a professional text or logo watermark to your images instantly with this free online watermarking tool. Whether you're a photographer, content creator, business owner, or designer, this tool helps protect your images from unauthorized use. No software, no login, and no editing skills needed—just upload, customize, and download in seconds.</p>
                    </div>
                </div>
            </div>
            <div className="why-use padding">
                <div className="container">
                    <h2 className="text-center">Why Use This Add Watermark Tool?</h2>
                    <div className="wrap">
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon1}
                                    alt="Prevent unauthorized use or image theft"
                                />
                            </div>
                            <p className="text text-center">Prevent unauthorized use or image theft</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Easily add text or logo watermarks"
                                />
                            </div>
                            <p className="text text-center">Easily add text or logo watermarks</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Adjust watermark size, opacity, and position"
                                />
                            </div>
                            <p className="text text-center">Adjust watermark size, opacity, and position</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="Maintain high-quality image output"
                                />
                            </div>
                            <p className="text text-center">Maintain high-quality image output</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="Works on all devices mobile, tablet, desktop"
                                />
                            </div>
                            <p className="text text-center">Works on all devices mobile, tablet, desktop</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="100% free and no watermark from the tool"
                                />
                            </div>
                            <p className="text text-center">100% free and no watermark from the tool</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of This Tool</h2>
                    <div className="content">
                        <p>This watermark tool offers a fast, secure, and efficient way to brand and protect your images without expensive software. It provides full customization options like opacity control, font styling, logo placement, and scaling—ensuring your watermark looks professional on every image. Because everything processes in your browser, your files remain private and secure. Whether you need watermarks for social media, client photos, product images, or digital artwork, this tool delivers reliable results with minimal effort.</p>
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
                                    <li>Add text & logo watermark</li>
                                    <li>Fully free, no hidden watermark</li>
                                    <li>No login required</li>
                                    <li>Browser-based, fast</li>
                                    <li>Full customization options</li>
                                    <li>Works on all devices</li>
                                    <li>Easy to use</li>
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
                                    <li>✘ Adds own watermark</li>
                                    <li>✘ Requires account</li>
                                    <li>✘ Slow / ads</li>
                                    <li>✘ Very limited</li>
                                    <li>✘ Mobile issues</li>
                                    <li>✘ Complicated UI</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Offline Editors</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✘ Paid</li>
                                    <li>✘</li>
                                    <li>✔</li>
                                    <li>✔ Advanced</li>
                                    <li>✘ Desktop only</li>
                                    <li>✘ Requires skill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="use-case padding">
                <div className="container">
                    <h2 className="text-center">How to Use the Add Watermark Tool</h2>
                    <div className="content">
                        <ul>
                            <li>1. Upload Your Image</li>
                            <li>2. Choose Text or Logo Watermark</li>
                            <li>3. Customize the Watermark</li>
                            <li>4. Preview the Result</li>
                            <li>5. Download Your Watermarked Image</li>
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
                            <Image src={faqimage} alt="Watermark faq image" />
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
