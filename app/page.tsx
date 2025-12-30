import {
  Image,
  Minimize2,
  Scaling,
  Crop,
  FileOutput,
  Wand2,
  Type,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

import { ToolCard } from "@/components/shared/ToolCard";

/* -------------------- SEO METADATA -------------------- */
export const metadata = {
  title: "Free Online Image Tools – Compress, Resize, Convert & Edit",
  description:
    "Use free online image editing tools to compress, resize, convert, crop, rotate, remove background, add watermark, and more. Fast, secure, and no signup required.",
  alternates: {
    canonical: "https://compressimagepro.com",
  },
  openGraph: {
    title: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
    description:
      "Access a complete set of free image tools to compress, resize, convert, crop, edit backgrounds, and enhance your visuals—instantly and without login.",
    url: "https://compressimagepro.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Editing Toolkit – Compress, Resize & Convert",
    description:
      "Access a complete set of free image tools to compress, resize, convert, crop, edit backgrounds, and enhance your visuals—instantly and without login.",
  },
};

/* -------------------- DATA -------------------- */
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
    title: "Add Watermark",
    description: "Protect your images with text",
    icon: Type,
    href: "/image-watermark",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart tools that understand your content",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process files in seconds, not minutes",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Files processed locally, never stored",
  },
];

/* -------------------- PAGE -------------------- */
export default function HomePage() {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero p-8 lg:p-12">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-primary-foreground lg:text-4xl">
            Welcome to Compress Image Pro
          </h1>
          <p className="mt-3 max-w-xl text-lg text-primary-foreground/90">
            Your all-in-one toolkit for images, videos, and PDFs. Transform your
            media with powerful, easy-to-use tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/20">
                  <feature.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {feature.title}
                  </p>
                  <p className="text-xs text-primary-foreground/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
      </section>

      {/* Image Tools */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Image className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Image Tools</h2>
            <p className="text-sm text-muted-foreground">
              Edit, convert, and enhance your images
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
