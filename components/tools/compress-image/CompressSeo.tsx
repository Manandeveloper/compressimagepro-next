"use client";
import Image from "next/image";
import { faqData } from "@/components/tools/compress-image/faqData";
import Icon1 from "@/public/assets/Reduce-image-size-up-to-90.svg"
import Icon2 from "@/public/assets/Improve-website-loading-speed-and-SEO-score.svg"
import Icon3 from "@/public/assets/Maintain-high-clarity-with-smart-compression.svg"
import Icon4 from "@/public/assets/Works-with-JPG,-PNG-and-WebP.svg"
import Icon5 from "@/public/assets/No-watermark,-no-signup-no-limitations.svg"
import Icon6 from "@/public/assets/Useful-for-blogs-ecommerce-portfolios-and-designers.svg"
import faqimage from "@/public/assets/faq-image.webp"
import {
    Palette,
    Type,
    Scaling,
    Crop,
    FileOutput,
    Wand2,
} from "lucide-react";
import { ToolCard } from "@/components/shared/ToolCard";
const imageTools = [
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
        title: "Remove Background",
        description: "AI-powered background removal",
        icon: Wand2,
        href: "/remove-background",
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


export default function CompressSeo() {
    return (
        <div className="">
            <div className="short-desc padding">
                <div className="container">
                    <div className="content text-center">
                        <p>Compress your images online without losing quality. This free Image Compressor reduces file size up to 90% while maintaining clarity, making your photos lighter, faster, and optimized for websites, apps, and social media. No login required simply upload, compress, and download instantly.</p>
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
                                    alt="Reduce image size up to 90%"
                                />
                            </div>
                            <p className="text text-center">Reduce image size up to 90%</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon2}
                                    alt="Improve website loading speed and SEO score"
                                />
                            </div>
                            <p className="text text-center">Improve website loading speed and SEO score</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon3}
                                    alt="Maintain high clarity with smart compression"
                                />
                            </div>
                            <p className="text text-center">Maintain high clarity with smart compression</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon4}
                                    alt="Works with JPG, PNG, and WebP"
                                />
                            </div>
                            <p className="text text-center">Works with JPG, PNG, and WebP</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon5}
                                    alt="No watermark, no signup, no limitations"
                                />
                            </div>
                            <p className="text text-center">No watermark, no signup, no limitations</p>
                        </div>
                        <div className="single">
                            <div className="icon">
                                <Image
                                    src={Icon6}
                                    alt="Useful for blogs, ecommerce, portfolios, and designers"
                                />
                            </div>
                            <p className="text text-center">Useful for blogs, ecommerce, portfolios, and designers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages padding">
                <div className="container">
                    <h2 className="text-center">Advantages of Using an Online Image Compressor</h2>
                    <div className="content">
                        <p>Using this Image Compressor provides a smooth and efficient way to optimize your photos without sacrificing quality. Compressed images load faster, improving your website’s performance, user experience, and SEO score. You’ll also save storage space, making it easier to manage and organize large collections of photos. Whether you're posting on social media, creating presentations, or updating your online store, optimized images help everything load faster and look sharper. Best of all, this tool is completely free and allows unlimited compression, making it a reliable choice for anyone working with digital media.</p>
                    </div>
                </div>
            </div>
            <div className="features-sec padding">
                <div className="container">
                    <h2 className="text-center">Why Our Online Image Compressor Outperforms Other Compression Tools</h2>
                    <div className="main-wrap">
                        <div className="wrap">
                            <div className="features">
                                <h3>Features</h3>
                                <ul>
                                    <li>Upload Limits</li>
                                    <li>Compression Speed</li>
                                    <li>Auto Resize Images</li>
                                    <li>WebP Conversion</li>
                                    <li>Private / Local Compression</li>
                                    <li>Works Offline</li>
                                    <li>Zero Carbon Emission</li>
                                </ul>
                            </div>
                            <div className="our-tool">
                                <h3>Our Compressor</h3>
                                <ul>
                                    <li>No Limits</li>
                                    <li>Ultra Fast</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                    <li>✔</li>
                                </ul>
                            </div>
                            <div className="other-tools">
                                <h3>Other Tools</h3>
                                <ul>
                                    <li>20 images / 5MB - 10MB max</li>
                                    <li>Slow</li>
                                    <li>✘</li>
                                    <li>✘</li>
                                    <li>✘</li>
                                    <li>✘</li>
                                    <li>✘</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="use-case padding">
                <div className="container">
                    <h2 className="text-center">How to Use the Image Compressor Tool</h2>
                    <div className="content text-center">
                        <ul>
                            <li>1. Upload Your Image</li>
                            <li>2. Choose Compression Level</li>
                            <li>3. Preview the Output</li>
                            <li>4. Adjust Advanced Options (Optional)</li>
                            <li>5. Download the Compressed Image</li>
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
                            <Image src={faqimage} alt="compressimage faq image" />
                        </div>
                        <div className="content">
                            {/* <h2 className="text-center">Frequently Asked Questions</h2> */}
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
