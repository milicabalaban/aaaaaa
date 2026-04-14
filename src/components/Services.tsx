"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { services } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl mb-14">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {services.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-foreground mb-6">
            {services.heading}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            {services.intro}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {services.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
              }}
              className="border-t border-border pt-6"
            >
              <p className="text-xs font-mono text-muted mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base text-foreground/75 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
