"use client";
import Image from "next/image";
import { faqData } from "@/components/tools/rotate-image/faqData";
import Icon1 from "@/public/assets/rotate-360.svg"
import Icon2 from "@/public/assets/flip-image.svg"
import Icon3 from "@/public/assets/social-media-orientation.svg"
import Icon4 from "@/public/assets/maintain-high-quality.svg"
import Icon5 from "@/public/assets/completely-browser-based-and-free-to-use.svg"
import Icon6 from "@/public/assets/Works-on-all-devices-mobile-tablet-and-desktop.svg"
import faqimage from "@/public/assets/faq-image.webp"

import {
    Minimize2,
    Type,
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
        title: "Add Watermark",
        description: "Protect your images with text",
        icon: Type,
        href: "/image-watermark",
        gradient: "from-indigo-500 to-blue-500",
    },
];

export default function RotateImagesSeo() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>Easily rotate or flip your images online with this fast, free, and beginner-friendly tool. Whether your photo is sideways, upside down, or simply needs a mirrored orientation, this tool provides precise rotation and flipping options. No software, no login, and no editing skills required—just upload your image and adjust its orientation in seconds.</p>
                    </div>
                </div>
            </div>
            <div className="why-use padding">
                <div className="container">
                    <h2 className="text-center">Why Use This Rotate & Flip Tool?</h2>
                    <div className="wrap">
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon1}
                                    alt="Instantly rotate images left, right, or 180 degrees"
                                />
                            </div>
                            <p className="text text-center">Instantly rotate images left, right, or 180 degrees</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Flip photos horizontally or vertically with one clic"
                                />
                            </div>
                            <p className="text text-center">Flip photos horizontally or vertically with one click</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Correct image orientation for social media, websites, or printing"
                                />
                            </div>
                            <p className="text text-center">Correct image orientation for social media, websites, or printing</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="No loss of quality while rotating or flipping"
                                />
                            </div>
                            <p className="text text-center">No loss of quality while rotating or flipping</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="100% free with no login or watermark"
                                />
                            </div>
                            <p className="text text-center">100% free with no login or watermark</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="Works on mobile, tablet, and desktop"
                                />
                            </div>
                            <p className="text text-center">Works on mobile, tablet, and desktop</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of This Tool</h2>
                    <div className="content">
                        <p>This tool offers a smooth and efficient way to correct or transform your image orientation without relying on heavy software like Photoshop. It processes images directly in the browser, ensuring speed and privacy. The intuitive controls allow anyone to rotate or flip images with precision, making it ideal for photographers, eCommerce sellers, students, designers, or casual users who need quick orientation adjustments. With instant preview and high-quality output, it’s a reliable tool for both professional and personal use.</p>
                    </div>
                </div>
            </div>
            <div className="features-sec padding">
                <div className="container">
                    <h2 className="text-center">Comparison With Other Rotate/Flip Tools</h2>
                    <div className="main-wrap">
                        <div className="wrap">
                            <div className="features">
                                <h3>Features</h3>
                                <ul>
                                    <li>One-click rotate & flip</li>
                                    <li>100% free with no watermark</li>
                                    <li>No login required</li>
                                    <li>Fast browser-based processing</li>
                                    <li>Works on all devices</li>
                                    <li>High-quality output</li>
                                    <li>Easy for beginners</li>
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
                                    <li>✘ Limited / watermark</li>
                                    <li>✘ Required</li>
                                    <li>✘ Slow / ads</li>
                                    <li>✔ Limited</li>
                                    <li>✘ Quality loss</li>
                                    <li>✘ Confusing UI</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Offline Editors</h3>
                                <ul>
                                    <li>✔</li>
                                    <li>✘ Paid</li>
                                    <li>✘</li>
                                    <li>✔</li>
                                    <li>✘ Computer only</li>
                                    <li>✔</li>
                                    <li>✘ Requires skill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="use-case padding">
                <div className="container">
                    <h2 className="text-center">How to Use the Rotate & Flip Tool</h2>
                    <div className="content">
                        <ul>
                            <li>1. Upload Your Image</li>
                            <li>2. Choose Rotate or Flip Options</li>
                            <li>3. Preview the Adjusted Image</li>
                            <li>4. Download the Final Version</li>
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
                            <Image src={faqimage} alt="rotateimage faq image" />
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
