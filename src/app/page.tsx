"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Coffee, Lightbulb, Utensils } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "downward-rays-static-grid",
      }}
      title="Indulge Your Senses at Crave Kenya"
      description="Experience exquisite gourmet dining and premium coffee blends in Mombasa and Nairobi. Where every visit is a journey of taste."
      tag="Taste the Gold Standard"
      tagAnimation="opacity"
      buttons={[
        {
          text: "View Our Menu",
          href: "/menu",
        },
        {
          text: "Make a Reservation",
          href: "/reservations",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-italian-hall-with-paintings-wall_8353-656.jpg?_wi=1",
          imageAlt: "Luxurious coffee shop interior with dark tones and gold accents",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-plating-meal_23-2148794096.jpg?_wi=1",
          imageAlt: "Gourmet food dish with elegant plating",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wonderful-wedding-table-amazing-restaurant_8353-9875.jpg",
          imageAlt: "Wonderful wedding table in amazing restaurant",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg",
          imageAlt: "Classic luxury restaurant with tables and chairs",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plate-set-with-fork-spoon-knife_140725-1835.jpg",
          imageAlt: "Plate set with fork,spoon and knife",
        },
      ]}
      mediaAnimation="opacity"
      rating={5}
      ratingText="Exceptional Culinary Experience"
    />
  </div>

  <div id="about-home" data-section="about-home">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Crafting Unforgettable Experiences"
      description="Crave Kenya is more than just a restaurant; it's a destination where culinary artistry meets exceptional coffee. From our carefully sourced beans to our meticulously prepared dishes, we're dedicated to delivering a premium experience that delights every sense."
      metrics={[
        {
          value: "2",
          title: "Prime Locations",
        },
        {
          value: "5+",
          title: "Years of Excellence",
        },
        {
          value: "100%",
          title: "Kenyan Coffee",
        },
      ]}
      tag="Our Story"
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-small-business-owner-standing-outdoors_23-2149434499.jpg"
      imageAlt="Crave Kenya restaurant exterior at night"
      mediaAnimation="opacity"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features-home" data-section="features-home">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Gourmet Culinary Delights",
          description: "Our chefs create exquisite dishes using the freshest local ingredients, ensuring a symphony of flavors in every bite. From international cuisine to local favorites, prepared with a gourmet twist.",
          icon: Utensils,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/tagliatelle-pasta-with-black-truffle-nest-shaped-bowl_84443-94448.jpg",
              imageAlt: "Plated gourmet meal",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/plate-stuffed-tomato-dish-with-roasted-potato-yogurt-1_140725-6963.jpg",
              imageAlt: "Plated gourmet meal",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/coffee-shop-retro-logo-collection_23-2148399791.jpg",
          imageAlt: "plated gourmet meal fine dining",
        },
        {
          title: "Artisan Coffee Creations",
          description: "Sourced from the rich highlands of Kenya, our coffee beans are expertly roasted and brewed to perfection. Enjoy classic espressos or unique signature blends crafted by our master baristas.",
          icon: Coffee,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/coffee-machine-pouring-drink_23-2147830580.jpg",
              imageAlt: "Steaming cup of gourmet coffee",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/view-coffee-machine-making-coffee-home_23-2151699688.jpg",
              imageAlt: "Steaming cup of gourmet coffee",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-italian-hall-with-paintings-wall_8353-656.jpg?_wi=2",
          imageAlt: "plated gourmet meal fine dining",
        },
        {
          title: "Elegant & Inviting Ambiance",
          description: "Step into an atmosphere of sophistication and comfort. Our interiors, adorned with dark tones and gold accents, provide the perfect setting for casual meetups or special celebrations.",
          icon: Lightbulb,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/luxurious-golden-lamp-hangs-ceiling_1304-5596.jpg",
              imageAlt: "Elegant restaurant interior",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hot-cup-coffee-with-cream-macaroon_140725-7521.jpg",
              imageAlt: "Elegant restaurant interior",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-plating-meal_23-2148794096.jpg?_wi=2",
          imageAlt: "plated gourmet meal fine dining",
        },
      ]}
      title="Our Signature Offerings"
      description="Discover what makes Crave Kenya the premier destination for food and coffee lovers. We blend tradition with innovation to bring you an unparalleled experience."
    />
  </div>

  <div id="testimonials-home" data-section="testimonials-home">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "A True Culinary Gem",
          quote: "Crave Kenya offers an unparalleled dining experience. The food is exquisite, the coffee is divine, and the ambiance is simply perfect for any occasion.",
          name: "Sarah J.",
          role: "Frequent Diner",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-toasting-wine-glasses_23-2152024840.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "2",
          title: "Best Coffee in Kenya",
          quote: "As a coffee connoisseur, I can confidently say Crave Kenya serves the finest blends. A must-visit for anyone who appreciates quality.",
          name: "Michael T.",
          role: "Coffee Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-charming-young-woman-with-friendly-smile-long-brunette-hair-smiling-window-cafe-winter-time-true-positive-emotions-leisure-time-drinking-coffee-chilling-cold-weather_197531-1499.jpg",
          imageAlt: "Michael T.",
        },
        {
          id: "3",
          title: "Elegant & Inviting",
          quote: "The atmosphere here is so warm and welcoming, yet incredibly chic. It’s my go-to spot for both business meetings and relaxing weekends.",
          name: "Emily R.",
          role: "Business Professional",
          imageSrc: "http://img.b2bpic.net/free-photo/enchanting-blonde-woman-vintage-brown-cap-enjoying-hot-coffee-cold-day-outdoor-portrait-joyful-stylish-girl-elegant-black-sandals-spending-time-cafe-drinking-tea_197531-4276.jpg",
          imageAlt: "Emily R.",
        },
        {
          id: "4",
          title: "Flawless Service",
          quote: "The staff are incredibly attentive and knowledgeable. Every detail is taken care of, making each visit a truly special event.",
          name: "David K.",
          role: "Satisfied Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1689.jpg",
          imageAlt: "David K.",
        },
        {
          id: "5",
          title: "A Taste of Luxury",
          quote: "From the moment you step in, Crave Kenya exudes luxury. The food, the drinks, the service – it’s all top-notch. Highly recommended!",
          name: "Jessica L.",
          role: "Food Critic",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25277.jpg",
          imageAlt: "Jessica L.",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our cherished customers about their memorable experiences at Crave Kenya."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="More Reasons to Crave"
      description="Delve deeper into the distinct experiences that make Crave Kenya truly exceptional, beyond just food and coffee."
      tag="Our Pillars"
      features={[
        {
          id: "extra-feat-1",
          title: "Masterful Culinary Team",
          description: "Our chefs, true artists in the kitchen, meticulously craft each dish to deliver an unforgettable taste sensation.",
          tag: "Expert Chefs",
          imageSrc: "http://img.b2bpic.net/free-photo/female-chef-kitchen-preparing-plate-steak_23-2149720769.jpg",
          imageAlt: "Female chef in the kitchen preparing plate of steak",
        },
        {
          id: "extra-feat-2",
          title: "Artisanal Coffee Craft",
          description: "From bean to cup, our baristas elevate coffee brewing to an art form, ensuring every sip is a moment of pure bliss.",
          tag: "Barista Excellence",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-espresso-machine-making-tasty-warm-coffee-morning_181624-8504.jpg",
          imageAlt: "Selective focus shot of an espresso machine making tasty warm coffee in the morning",
        },
        {
          id: "extra-feat-3",
          title: "Impeccable Service",
          description: "Experience hospitality redefined with our attentive and knowledgeable staff dedicated to making your visit seamless and memorable.",
          tag: "Dedicated Staff",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-arranging-table-restaurant_23-2147936228.jpg",
          imageAlt: "Young woman arranging the table in the restaurant",
        },
      ]}
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
