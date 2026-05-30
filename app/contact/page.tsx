import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";

const contacts = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "Instagram",
    value: "@yourhandle",
    href: "https://instagram.com/yourhandle",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    label: "Location",
    value: "London / Colombo / available remotely",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s Collaborate"
              text="For portfolio viewing, internship opportunities, commissions, styling collaborations, photoshoots, exhibitions, or creative enquiries, please get in touch."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="mailto:your-email@example.com">Email Me</ButtonLink>
              <ButtonLink href="https://instagram.com/yourhandle" variant="secondary">
                View Instagram
              </ButtonLink>
              <ButtonLink href="/portfolio.pdf" variant="ghost">
                Download Portfolio PDF
              </ButtonLink>
            </div>
          </div>

          <div className="soft-card rounded-md p-6 sm:p-8">
            <div className="grid gap-4">
              {contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-md border border-brown/10 bg-cream/55 p-5"
                >
                  <p className="eyebrow">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="mt-2 block text-lg font-semibold text-brown transition hover:text-accent"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-brown">
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
