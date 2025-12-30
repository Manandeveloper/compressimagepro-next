"use client";
import Image from "next/image";
import { faqData } from "@/components/tools/resize-image/faqData";
import Icon1 from "@/public/assets/Reduce-image-size-up-to-90.svg";
import Icon2 from "@/public/assets/Crop-images-to-any-custom-dimensions.svg";
import Icon3 from "@/public/assets/Reduce-file-size-for-faster-website-performance.svg";
import Icon4 from "@/public/assets/Works-with-JPG,-PNG-and-WebP.svg";
import Icon5 from "@/public/assets/No-installation-or-signup-required.svg";
import Icon6 from "@/public/assets/completely-browser-based-and-free-to-use.svg";
import faqimage from "@/public/assets/faq-image.webp";

import {
    Palette,
    Minimize2,
    Type,
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
        title: "Rotate Image",
        description: "Rotate & Flip image",
        icon: Palette,
        href: "/rotate-image",
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
export default function ResizeSEO() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>Resize your images instantly with our free Online Image Resizer. Adjust dimensions, change aspect ratio, and optimize visuals for web, social media, or print—without losing quality. Whether you’re a designer, photographer, or everyday user, this tool makes image resizing fast, easy, and accessible for everyone.</p>
                    </div>
                </div>
            </div>
            <div className="why-use padding">
                <div className="container">
                    <h2 className="text-center">Why Use CompressImagepro to compress images?</h2>
                    <div className="wrap">
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon1}
                                    alt="Resize images without noticeable quality loss"
                                />
                            </div>
                            <p className="text text-center">Resize images without noticeable quality loss</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Maintain aspect ratio or set custom dimensions"
                                />
                            </div>
                            <p className="text text-center">Maintain aspect ratio or set custom dimensions</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Reduce file size for faster website performance"
                                />
                            </div>
                            <p className="text text-center">Reduce file size for faster website performance</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="Works with PNG, JPG, JPEG, WEBP, GIF"
                                />
                            </div>
                            <p className="text text-center">Works with PNG, JPG, JPEG, WEBP, GIF</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="No account or premium subscription required"
                                />
                            </div>
                            <p className="text text-center">No account or premium subscription required</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="100% free and secure—your files never leave your device"
                                />
                            </div>
                            <p className="text text-center">100% free and secure—your files never leave your device</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of Using This Image Resize Tool</h2>
                    <div className="content">
                        <p>Our Image Resizer offers an effortless way to adjust image dimensions while protecting clarity and sharpness. Unlike traditional editors that blur or distort resized images, this tool uses smart scaling techniques to preserve important details. It supports all popular formats and works directly in your browser, ensuring quick performance without requiring software installation. The tool is especially useful for web optimization, allowing users to get perfectly sized images that load faster without compromising appearance.</p>
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
                                    <li>Free to use</li>
                                    <li>No login required</li>
                                    <li>Quality maintained after resizing</li>
                                    <li>Bulk resizing</li>
                                    <li>Runs in browser</li>
                                    <li>Supports PNG/JPG/WEBP/GIF</li>
                                    <li>Zero file upload to server</li>
                                </ul>
                            </div>
                            <div className="our-tool">
                                <h3>Our Tool</h3>
                                <ul>
                                    <li>✔ Yes</li>
                                    <li>✔ Yes</li>
                                    <li>✔ High</li>
                                    <li>✘ Coming soon</li>
                                    <li>✔ Yes</li>
                                    <li>✔ Yes</li>
                                    <li>✔ Yes</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Photoshop</h3>
                                <ul>
                                    <li>✘ No</li>
                                    <li>✘ No</li>
                                    <li>✔ High</li>
                                    <li>✔ Yes</li>
                                    <li>✘ No</li>
                                    <li>✔ Yes</li>
                                    <li>✘ No</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Canva</h3>
                                <ul>
                                    <li>✘ Partially</li>
                                    <li>✘ No</li>
                                    <li>⚠️ Medium</li>
                                    <li>✘ No</li>
                                    <li>✔ Yes</li>
                                    <li>✘ Limited</li>
                                    <li>✘ No</li>
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
                            <Image src={faqimage} alt="resize faq image" />
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