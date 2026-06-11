"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';

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

  <div id="about-details" data-section="about-details">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Journey: Passion, Flavor & Community"
      description="Crave Kenya began with a vision to create a unique culinary space that celebrates rich Kenyan coffee culture and international gourmet dining. With two prime locations in Mombasa and Nairobi, we are committed to sustainable practices, supporting local farmers, and fostering a vibrant community hub where every guest feels at home."
      metrics={[
        {
          value: "2019",
          title: "Founded",
        },
        {
          value: "100%",
          title: "Local Sourcing",
        },
        {
          value: "150+",
          title: "Team Members",
        },
      ]}
      tag="About Us"
      imageSrc="http://img.b2bpic.net/free-photo/brightly-lit-dining-unfocused_1203-770.jpg"
      imageAlt="Interior of Crave Kenya restaurant"
      mediaAnimation="opacity"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "1",
          name: "Chef Amina",
          role: "Head Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-male-chef-showing-ok-sign_23-2147863548.jpg",
          imageAlt: "Chef Amina",
        },
        {
          id: "2",
          name: "Mwangi Kariuki",
          role: "Master Barista",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-barista-preparing-coffee_23-2148865611.jpg",
          imageAlt: "Mwangi Kariuki",
        },
        {
          id: "3",
          name: "Grace Okoro",
          role: "Restaurant Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-woman-apron-barista-giving-you-cup-coffee-working-cafe-serving-dr_1258-138287.jpg",
          imageAlt: "Grace Okoro",
        },
      ]}
      title="Meet Our Dedicated Team"
      description="Our passionate team is the heart of Crave Kenya, bringing expertise, warmth, and dedication to every aspect of your dining experience."
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
