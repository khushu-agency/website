import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBand } from "@/components/sections/TrustedBand";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { RoiSection } from "@/components/sections/RoiSection";
import { Approach } from "@/components/sections/Approach";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonial } from "@/components/sections/Testimonial";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Digital Experiences, Intelligent Systems`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — Digital Experiences, Intelligent Systems`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBand />
      <ServicesAccordion />
      <FeaturedWork />
      <RoiSection />
      <Approach />
      <InsightsPreview />
      <StatsBand />
      <Testimonial />
      <FaqPreview />
    </>
  );
}
