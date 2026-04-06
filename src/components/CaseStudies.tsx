"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { caseStudies } = siteContent;

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {caseStudies.heading}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-accent-light/40 to-white rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-1">
                {item.metric}
              </div>
              <div className="text-sm text-muted font-medium mb-4">
                {item.metricLabel}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
