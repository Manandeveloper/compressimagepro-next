import ConvertImageControl from "@/components/tools/convert-image/ConvertImageControl";
import ConvertImageSEO from "@/components/tools/convert-image/ConvertImageSeo";
import { faqData } from "@/components/tools/convert-image/faqData";
import OGImage from "@/public/assets/og-convert-image.jpg"
const canonicalUrl = "https://compressimagepro.com/image-convert";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Convert Image Online | JPG to PNG, PNG to JPG, WebP Converter",
    description:
        "Convert images between JPG, PNG, WebP, and more. Fast, free, and no signup required. High-quality online image converter.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
        description: "Access a complete set of free image tools to compress, resize, convert, crop, edit backgrounds, and enhance your visuals—instantly and without login.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
        description: "Access a complete set of free image tools to compress, resize, convert, crop, edit backgrounds, and enhance your visuals—instantly and without login.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
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
            <ConvertImageControl />
            <ConvertImageSEO />

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
