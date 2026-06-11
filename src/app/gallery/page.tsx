"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Menu",
          id: "/menu",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "Reservations",
          id: "/reservations",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/coffee-shop-retro-logo-collection_23-2148399791.jpg"
      logoAlt="Crave Kenya Logo"
      brandName="Crave Kenya"
      bottomLeftText="Taste the Difference"
      bottomRightText="indulge@cravekenya.com"
      button={{
        text: "Order Now",
        href: "#",
      }}
    />
  </div>

  <div id="gallery-highlights" data-section="gallery-highlights">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "gal-1",
          name: "Mombasa Dining Ambiance",
          price: "Crave Kenya",
          variant: "Citymall Nyali",
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-house-interior-design_23-2151050971.jpg",
          imageAlt: "Interior of Crave Kenya Mombasa",
        },
        {
          id: "gal-2",
          name: "Nairobi Coffee Spot",
          price: "Crave Kenya",
          variant: "Kilimani Ring Road",
          imageSrc: "http://img.b2bpic.net/free-photo/house-entrance-door-with-decorated-porch_23-2147764364.jpg",
          imageAlt: "Exterior of Crave Kenya Nairobi",
        },
        {
          id: "gal-3",
          name: "Chef's Creation",
          price: "Behind the Scenes",
          variant: "Culinary Artistry",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-pouring-seasoning-beef-stake-plate_417767-259.jpg",
          imageAlt: "Chef preparing a signature dish",
        },
        {
          id: "gal-4",
          name: "Latte Art Perfection",
          price: "Signature Coffee",
          variant: "Master Barista",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-making-coffee-equipment_23-2148366541.jpg",
          imageAlt: "Barista pouring latte art",
        },
        {
          id: "gal-5",
          name: "Decadent Desserts",
          price: "Sweet Indulgences",
          variant: "Pastry Chef's Touch",
          imageSrc: "http://img.b2bpic.net/free-photo/little-delicious-brownies-with-chocolate-chips-inside-brown-plate-wood_140725-30041.jpg",
          imageAlt: "Close-up of a delicious dessert",
        },
        {
          id: "gal-6",
          name: "Crafted Cocktails",
          price: "Refreshing Blends",
          variant: "Artisan Beverages",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-fish-with-sauce-table_140725-16.jpg",
          imageAlt: "Elegant cocktail drink with garnish",
        },
      ]}
      title="A Glimpse Into Our World"
      description="Explore the elegant spaces, exquisite dishes, and artistry that define the Crave Kenya experience."
    />
  </div>

  <div id="social-proof-gallery" data-section="social-proof-gallery">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Gourmet Monthly",
        "Kenya Coffee Board",
        "Hospitality East Africa",
        "Eco-Dine Certified",
        "Taste of Africa Awards",
        "Nairobi Food Festival",
        "Mombasa Chamber of Commerce",
      ]}
      title="Recognized Excellence"
      description="We are proud to be recognized by leading culinary and hospitality organizations."
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Menu",
              href: "/menu",
            },
            {
              label: "Gallery",
              href: "/gallery",
            },
          ],
        },
        {
          title: "Visit Us",
          items: [
            {
              label: "Mombasa (Citymall Nyali)",
              href: "/contact#mombasa",
            },
            {
              label: "Nairobi (Kilimani Ring Road)",
              href: "/contact#nairobi",
            },
            {
              label: "Reservations",
              href: "/reservations",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Crave Kenya. All rights reserved."
      bottomRightText="Crafted with passion in Kenya."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
