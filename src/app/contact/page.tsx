import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Khushu what you're trying to improve, automate or create.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="LET'S TALK"
        title="Let's build what's next."
        lede="Tell us what you're trying to improve, automate or create."
      />
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
