"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

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

  <div id="contact-info" data-section="contact-info">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in Touch"
      title="Visit Our Locations or Contact Us"
      description="We'd love to hear from you! Find us at our two elegant locations or reach out via phone. Our team is ready to assist you."
      buttons={[
        {
          text: "Call Nairobi: +254 7XX XXX XXX",
          href: "tel:+2547XXXXXXXXX",
        },
        {
          text: "Call Mombasa: +254 7YY YYY YYY",
          href: "tel:+2547YYYYYYYYY",
        },
      ]}
    />
  </div>

  <div id="contact-faq" data-section="contact-faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What are your operating hours?",
          content: "Our Mombasa location (Citymall Nyali) is open from 8 AM to 10 PM daily. Our Nairobi location (Kilimani Ring Road) is open from 7 AM to 11 PM daily.",
        },
        {
          id: "q2",
          title: "Do you offer private event bookings?",
          content: "Yes, we offer exclusive spaces for private events. Please contact us directly to discuss your requirements and get a custom quote.",
        },
        {
          id: "q3",
          title: "Is parking available at your locations?",
          content: "Ample parking is available at both our Mombasa (Citymall Nyali) and Nairobi (Kilimani Ring Road) locations for your convenience.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have more questions about Crave Kenya? Find quick answers here."
      faqsAnimation="slide-up"
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
