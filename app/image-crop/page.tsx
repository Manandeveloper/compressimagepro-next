import CropImageControl from "@/components/tools/crop-image/CropImageControls";
import CropImageSeo from "@/components/tools/crop-image/CropImageSeo";
import { faqData } from "@/components/tools/crop-image/faqData";
import OGImage from "@/public/assets/og-crop-image.png"
const canonicalUrl = "https://compressimagepro.com/image-crop";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crop Image Online Free | JPG, PNG, WebP Image Cropper",
    description:
        "Crop any image online for free. Select area and crop JPG, PNG, WebP with precision. No login required.",

    alternates: {
        canonical: canonicalUrl,
    },

    openGraph: {
        title: "Crop Image Online Free",
        description: "Crop JPG, PNG, and WebP images instantly using an easy-to-use cropper.",
        url: canonicalUrl,
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Crop Image Online Free",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Crop Image Online Free",
        description: "Crop JPG, PNG, and WebP images instantly using an easy-to-use cropper.",
        images: [
            {
                url: OGImage.src,
                width: 1200,
                height: 630,
                alt: "Crop Image Online Free",
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
            <CropImageControl />
            <CropImageSeo />

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
