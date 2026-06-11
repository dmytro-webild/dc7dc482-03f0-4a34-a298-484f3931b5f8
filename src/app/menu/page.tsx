"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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

  <div id="menu-items" data-section="menu-items">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "coffee-1",
          name: "Ethiopian Yirgacheffe Espresso",
          price: "Ksh 450",
          variant: "Rich & Aromatic",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-glass-coffee-with-saucer-spoon_53876-63397.jpg",
          imageAlt: "Ethiopian Yirgacheffe Espresso",
        },
        {
          id: "coffee-2",
          name: "Kenyan Peaberry Cold Brew",
          price: "Ksh 500",
          variant: "Smooth & Refreshing",
          imageSrc: "http://img.b2bpic.net/free-photo/pouring-coffee-mug-close-up_23-2148937303.jpg",
          imageAlt: "Kenyan Peaberry Cold Brew",
        },
        {
          id: "food-1",
          name: "Pan-Seared Tilapia with Kales",
          price: "Ksh 1,800",
          variant: "Local & Fresh",
          imageSrc: "http://img.b2bpic.net/free-photo/ceramic-bowl-delicious-acai-brazilian-dessert_23-2149788546.jpg",
          imageAlt: "Pan-Seared Tilapia with Kales",
        },
        {
          id: "food-2",
          name: "Mushroom Truffle Pasta",
          price: "Ksh 2,200",
          variant: "Creamy & Indulgent",
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-view-delicious-noodle-soup-with-chicken-wooden-cutting-board-bunch-greens-tomatoes-oil-bottle-dark-background_140725-140409.jpg",
          imageAlt: "Mushroom Truffle Pasta",
        },
        {
          id: "dessert-1",
          name: "Gold Leaf Chocolate Mousse",
          price: "Ksh 950",
          variant: "Decadent & Rich",
          imageSrc: "http://img.b2bpic.net/free-photo/heart-shaped-cakes-valentine-s-day_114579-79501.jpg",
          imageAlt: "Gold Leaf Chocolate Mousse",
        },
        {
          id: "drink-1",
          name: "Tropical Sunset Mocktail",
          price: "Ksh 600",
          variant: "Fruity & Exotic",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-freshly-squeezed-juice-fruits-wooden-cutting-board_169016-49086.jpg",
          imageAlt: "Tropical Sunset Mocktail",
        },
      ]}
      title="Our Signature Menu"
      description="Explore a curated selection of gourmet dishes and artisan coffee, crafted to perfection for your delight."
    />
  </div>

  <div id="menu-categories" data-section="menu-categories">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "coffee-category",
          title: "Specialty Coffees",
          price: "From Ksh 350",
          period: "per cup",
          features: [
            "Single Origin Beans",
            "Expertly Roasted",
            "Handcrafted Brews",
          ],
          button: {
            text: "Explore Coffees",
            href: "/menu#coffee",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-coffee-cups-wooden-table_23-2148464893.jpg",
          imageAlt: "Specialty Coffee selection",
        },
        {
          id: "food-category",
          title: "Gourmet Meals",
          price: "From Ksh 1,200",
          period: "per dish",
          features: [
            "Fresh Local Ingredients",
            "Innovative Recipes",
            "Chef's Specials",
          ],
          button: {
            text: "View Dishes",
            href: "/menu#meals",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-people-learning-make-sushi_23-2149865318.jpg",
          imageAlt: "Gourmet meal selection",
        },
        {
          id: "dessert-category",
          title: "Decadent Desserts",
          price: "From Ksh 800",
          period: "per dessert",
          features: [
            "Artisan Pastries",
            "Rich Chocolates",
            "Sweet Pairings",
          ],
          button: {
            text: "Indulge Now",
            href: "/menu#desserts",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/dessert-served-glass-with-fruits-top_140725-3588.jpg",
          imageAlt: "Decadent dessert selection",
        },
      ]}
      title="Menu Categories"
      description="Dive deeper into our offerings and discover the wide array of options available in our premium coffee shop and restaurant."
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
