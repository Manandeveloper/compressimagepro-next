import ResizeImageControl from "@/components/tools/resize-image/ResizeControl";
import ResizeSEO from "@/components/tools/resize-image/ResizeSeo";
import { faqData } from "@/components/tools/resize-image/faqData";
import OGImage from "@/public/assets/og-resize-image.png"
const canonicalUrl = "https://compressimagepro.com/image-resize";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resize Image Online Free | JPG, PNG, WebP Resizer",
    description:
        "Resize images online for free. Maintain quality while changing width and height. Supports JPG, PNG, JPEG, and WebP formats.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Resize Image Online Free",
        description: "Resize any image instantly. No login required. High-quality results.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Resize Image Online Free",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Resize Image Online Free",
        description: "Resize any image instantly. No login required. High-quality results.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Resize Image Online Free",
            },
        ],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};
export default function Page() {

    return (
        <div className="">
            <ResizeImageControl />
            <ResizeSEO />

            {/* FAQ SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </div>
    );

}
