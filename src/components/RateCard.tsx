"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { rateCard } = siteContent;

export default function RateCard() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {rateCard.heading}
          </h2>
          <p className="text-muted text-lg">{rateCard.subheading}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rateCard.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-foreground text-white border-foreground shadow-2xl shadow-foreground/20 scale-[1.02]"
                  : "bg-white border-border hover:border-accent/20 hover:shadow-lg"
              }`}
            >
              <div
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  pkg.highlighted ? "text-accent-light" : "text-accent"
                }`}
              >
                {pkg.name}
              </div>
              <div
                className={`text-3xl font-bold mb-6 ${
                  pkg.highlighted ? "text-white" : "text-foreground"
                }`}
              >
                {pkg.price}
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        pkg.highlighted ? "text-accent-light" : "text-accent"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        pkg.highlighted ? "text-gray-300" : "text-muted"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-full text-sm font-medium transition-all duration-200 ${
                  pkg.highlighted
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-foreground text-white hover:bg-foreground/90"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted mt-8 max-w-lg mx-auto"
        >
          {rateCard.note}
        </motion.p>
      </div>
    </section>
  );
}
