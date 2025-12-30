// import "./custom-tailwind.css";
import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { Providers } from "./providers";
import { MainLayout } from "@/components/layout/MainLayout";
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible while the font loads
  variable: '--font-open-sans', // Define a CSS variable name
});
export const metadata = {
  title: "Compress Image Pro",
  description: "Free online image, video and PDF tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
