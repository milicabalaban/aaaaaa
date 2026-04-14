"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { about } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl mb-10">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {about.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-foreground">
            {about.heading}
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl space-y-5"
        >
          {about.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid sm:grid-cols-2 gap-10 max-w-3xl"
        >
          <div>
            <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
              What I focus on
            </h3>
            <ul className="space-y-2">
              {about.focus.map((item) => (
                <li key={item} className="text-base text-foreground">
                  — {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-4">
              What I care about
            </h3>
            <ul className="space-y-2">
              {about.causes.map((cause) => (
                <li key={cause} className="text-base text-foreground">
                  — {cause}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
