"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { collaborations } = siteContent;

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {collaborations.heading}
          </h2>
          <p className="text-muted text-lg">{collaborations.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {collaborations.brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center h-24 bg-white rounded-2xl border border-border hover:border-accent/20 hover:shadow-md transition-all duration-300 p-4"
            >
              {/* Replace with actual brand logos */}
              <div className="text-center">
                <div className="w-10 h-10 rounded-lg bg-border/50 mx-auto mb-2 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-muted"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs text-muted font-medium">{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted mt-8"
        >
          Replace placeholder logos with your actual brand partner logos in{" "}
          <code className="text-xs bg-border/30 px-2 py-0.5 rounded">
            /public/images/brands/
          </code>
        </motion.p>
      </div>
    </section>
  );
}
