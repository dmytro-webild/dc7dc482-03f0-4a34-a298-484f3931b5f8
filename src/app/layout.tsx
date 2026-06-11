import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Crave Kenya - Premium Coffee Shop & Restaurant',
  description: 'Experience exquisite gourmet dining and premium coffee blends at Crave Kenya. Locations in Mombasa and Nairobi. Book your table today!',
  keywords: ["Crave Kenya, restaurant, coffee shop, Mombasa, Nairobi, gourmet dining, premium coffee, reservations, fine dining, Kenyan cuisine"],
  openGraph: {
    "title": "Crave Kenya - Premium Coffee Shop & Restaurant",
    "description": "Experience exquisite gourmet dining and premium coffee blends at Crave Kenya. Locations in Mombasa and Nairobi.",
    "url": "https://www.cravekenya.com",
    "siteName": "Crave Kenya",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/gorgeous-italian-hall-with-paintings-wall_8353-656.jpg",
        "alt": "Luxurious coffee shop interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Crave Kenya - Premium Coffee Shop & Restaurant",
    "description": "Experience exquisite gourmet dining and premium coffee blends at Crave Kenya.",
    "images": [
      "http://img.b2bpic.net/free-photo/gorgeous-italian-hall-with-paintings-wall_8353-656.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
