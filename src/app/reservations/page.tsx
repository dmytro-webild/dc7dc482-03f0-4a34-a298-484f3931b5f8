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
          name: "Home",          id: "/"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "Menu",          id: "/menu"},
        {
          name: "Gallery",          id: "/gallery"},
        {
          name: "Reservations",          id: "/reservations"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/coffee-shop-retro-logo-collection_23-2148399791.jpg"
      logoAlt="Crave Kenya Logo"
      brandName="Crave Kenya"
      bottomLeftText="Taste the Difference"
      bottomRightText="indulge@cravekenya.com"
      button={{
        text: "Order Now",        href: "#"}}
    />
  </div>

  <div id="reservations-cta" data-section="reservations-cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Book Your Table"
      title="Secure Your Spot at Crave Kenya"
      description="Experience fine dining without the wait. Make a reservation at your preferred location and let us prepare an unforgettable experience for you."
      buttons={[
        {
          text: "Reserve a Table in Mombasa",          href: "#mombasa-reservation-form"},
        {
          text: "Reserve a Table in Nairobi",          href: "#nairobi-reservation-form"},
      ]}
    />
  </div>

  <div id="reservations-faq" data-section="reservations-faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "res-q1",          title: "How far in advance should I book?",          content: "We recommend booking at least 24-48 hours in advance, especially for weekend evenings or special events, to ensure availability."},
        {
          id: "res-q2",          title: "Can I modify or cancel my reservation?",          content: "Yes, you can modify or cancel your reservation up to 3 hours before your scheduled time. Please contact us directly via phone or email."},
        {
          id: "res-q3",          title: "Do you accommodate dietary restrictions?",          content: "Absolutely. Please inform us of any dietary restrictions or allergies when making your reservation, and our chefs will do their best to accommodate."},
      ]}
      title="Reservation Guidelines"
      description="Answers to common questions about making reservations at Crave Kenya."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "About Us",              href: "/about"},
            {
              label: "Menu",              href: "/menu"},
            {
              label: "Gallery",              href: "/gallery"},
          ],
        },
        {
          title: "Visit Us",          items: [
            {
              label: "Mombasa (Citymall Nyali)",              href: "/contact#mombasa"},
            {
              label: "Nairobi (Kilimani Ring Road)",              href: "/contact#nairobi"},
            {
              label: "Reservations",              href: "/reservations"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact Us",              href: "/contact"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Press",              href: "#"},
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
