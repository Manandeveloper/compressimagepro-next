import CompressImageControl from "@/components/tools/compress-image/CompressControls";
import CompressSEO from "@/components/tools/compress-image/CompressSeo";
import { faqData } from "@/components/tools/compress-image/faqData";
import OGImage from "@/public/assets/og-compress-image.png"
const canonicalUrl = "https://compressimagepro.com/image-compress";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Image Compressor Online | Reduce Image Size Without Quality Loss",
    description:
        "Compress your images online for free. No login required. Reduce PNG, JPG, and WebP file size without losing quality.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Free Image Compressor Online",
        description: "Compress images instantly. 100% free & no signup.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Image Compressor Online",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Free Image Compressor Online",
        description: "Compress images instantly. 100% free & no signup.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Free Image Compressor Online",
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
            <CompressImageControl />
            <CompressSEO />

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
