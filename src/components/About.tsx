"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { about } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            {about.heading}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Bio */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Tags + Causes */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-accent-light text-accent-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Causes
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.causes.map((cause) => (
                  <span
                    key={cause}
                    className="px-4 py-2 text-sm rounded-full bg-surface text-muted border border-border"
                  >
                    {cause}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
