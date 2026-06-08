import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/layout/Container";
import { CtaBlock } from "@/components/shared/CtaBlock";

export const metadata: Metadata = {
  title: "Terms of Service | Urban Blueprints",
  description: "Read the Terms of Service governing the use of Urban Blueprints engineering services and website.",
  alternates: { canonical: "https://urban-blueprints.com/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Urban Blueprints website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes.",
  },
  {
    title: "Description of Services",
    content:
      "Urban Blueprints provides professional civil engineering consultancy services including transportation engineering, structural engineering, water resources engineering, environmental engineering, and geotechnical engineering. Services are provided subject to a separate engagement agreement entered into between Urban Blueprints and the client.",
  },
  {
    title: "Use of Website",
    content:
      "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our website by introducing viruses or other malicious code, attempting to gain unauthorized access, or engaging in any conduct that restricts or inhibits the use of the website.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, images, and software, is the property of Urban Blueprints and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Urban Blueprints shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this website or our services. Our total liability shall not exceed the fees paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "Professional Advice Disclaimer",
    content:
      "Information provided on this website is for general informational purposes only and does not constitute professional engineering advice. Always engage a qualified engineer for project-specific requirements. Urban Blueprints accepts no liability for decisions made based solely on information contained on this website.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. These links are provided for convenience only. Urban Blueprints has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in the relevant jurisdiction.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about these Terms of Service, please contact us at info@urbanblueprints.com. We are happy to clarify any aspect of these terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our website or engaging our engineering services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms" },
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
        title="Have questions about our terms?"
        description="Our team is happy to clarify any aspect of our terms or discuss how our services can meet your project needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
      />
    </div>
  );
}
