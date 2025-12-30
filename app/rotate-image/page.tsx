import RotateImageControl from "@/components/tools/rotate-image/RotateImageControls";
import RotateSEO from "@/components/tools/rotate-image/RotateImageSeo";
import { faqData } from "@/components/tools/rotate-image/faqData";
import OGImage from "@/public/assets/og-rotate-img.png"
const canonicalUrl = "https://compressimagepro.com/rotate-image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rotate & Flip Image Online Free | JPG, PNG, WebP",
    description:
        "Rotate or flip your images online for free. Supports JPG, PNG, JPEG, and WebP. Fast and secure editing tool.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Online Image Rotator & Flipper",
        description: "Rotate and flip images with a single click. 100% free.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Online Image Rotator & Flipper",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Online Image Rotator & Flipper",
        description: "Rotate and flip images with a single click. 100% free.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Online Image Rotator & Flipper",
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
            <RotateImageControl />
            <RotateSEO />

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
