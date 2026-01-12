import { Geist, Geist_Mono } from "next/font/google";
import 'whatwg-fetch';
import "./globals.css";
import ConditionalLayout from '@/components/ConditionalLayout'
import ScrollToNavbarButton from "@/components/ScrollToNavbarButton";
import axiosInstance from "@/lib/axiosInstance";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SVIET",
    template: "%s - SVIET"
  },
  description: "SVIET | Best Institution in North India",
};

export default async function RootLayout({ children }) {
  let topBanners = [];
  try {
    const response = await axiosInstance.get('/top-banners');
    topBanners = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="google-adsense-account" content="ca-pub-7175271007165058" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ConditionalLayout topBanners={topBanners}>{children}</ConditionalLayout>
        <ScrollToNavbarButton />
      </body>
    </html>
  );
}
