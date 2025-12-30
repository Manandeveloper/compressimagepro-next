import WatermarkImageControl from "@/components/tools/watermark-image/WatermarkImageControls";
import WatermarkImageSEO from "@/components/tools/watermark-image/WatermarkImageSeo";
import { faqData } from "@/components/tools/watermark-image/faqData";
import OGImage from "@/public/assets/og-watermark-image.png"
const canonicalUrl = "https://compressimagepro.com/image-watermark";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add watermark to image online | text & logo watermark",
    description:
        "Add text or logo watermark to your images online for free. Protect your images with customizable watermark styles.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Free Image Watermark Tool",
        description: "Add watermarks to PNG, JPG, and WebP images instantly.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Image Watermark Tool",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Free Image Watermark Tool",
        description: "Add watermarks to PNG, JPG, and WebP images instantly.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Image Watermark Tool",
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
            <WatermarkImageControl />
            <WatermarkImageSEO />

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
