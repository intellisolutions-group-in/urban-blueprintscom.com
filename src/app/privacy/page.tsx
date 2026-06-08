import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { CtaBlock } from "@/components/shared/CtaBlock";

export const metadata: Metadata = {
  title: "Privacy Policy | Urban Blueprints",
  description: "Learn how Urban Blueprints collects, uses, and protects your personal information.",
  alternates: { canonical: "https://urban-blueprints.com/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us when you use our contact form, send us an email, or otherwise communicate with us. This may include your name, email address, phone number, company name, and project details. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and pages viewed.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries and provide our engineering services, communicate with you about projects and updates, improve our website and services, comply with legal obligations, and protect the security and integrity of our systems.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services, comply with the law, protect our rights, or in the event of a business transfer. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information that we hold. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info@urbanblueprints.com. We will respond to your request within 30 days.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of our website.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@urbanblueprints.com. We are committed to resolving any privacy concerns you may have.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Privacy Policy"
        description="Your privacy is important to us. This policy outlines how we collect, use, and safeguard your personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-12 pb-6 border-b border-border">
              Last updated: June 2025
            </p>

            <div className="space-y-12">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-md bg-accent/10 text-accent text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-light text-base pl-10">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        title="Questions about your data?"
        description="Our team is happy to address any privacy concerns or data requests you may have."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
      />
    </div>
  );
}
