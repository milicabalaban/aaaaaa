"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { contact } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeInUp} className="max-w-3xl">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {contact.kicker}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl leading-tight text-foreground mb-8">
            {contact.heading}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-12 max-w-2xl">
            {contact.intro}
          </p>

          <div className="space-y-4 border-t border-border pt-8 max-w-xl">
            <ContactRow label="Email">
              <a
                href={`mailto:${contact.email}`}
                className="text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
              >
                {contact.email}
              </a>
            </ContactRow>
            <ContactRow label="LinkedIn">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
              >
                linkedin.com/in/milicabalaban ↗
              </a>
            </ContactRow>
            <ContactRow label="Agency">
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent transition-colors"
              >
                marketics.biz ↗
              </a>
            </ContactRow>
            <ContactRow label="Availability">
              <span className="text-foreground">{contact.availability}</span>
            </ContactRow>
          </div>

          <p className="mt-10 text-sm text-muted italic">
            {contact.responseTime}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 py-2 text-base">
      <span className="text-xs font-mono uppercase tracking-widest text-muted pt-1.5">
        {label}
      </span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}
