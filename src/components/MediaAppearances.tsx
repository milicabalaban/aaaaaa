"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { media } = siteContent;

const typeColors: Record<string, string> = {
  Podcast: "bg-purple-100 text-purple-700",
  "Conference Talk": "bg-blue-100 text-blue-700",
  Feature: "bg-amber-100 text-amber-700",
  Webinar: "bg-emerald-100 text-emerald-700",
};

export default function MediaAppearances() {
  return (
    <section id="media" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {media.heading}
          </h2>
          <p className="text-muted text-lg">{media.subheading}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {media.items.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-border hover:border-accent/20 hover:shadow-md transition-all duration-300"
            >
              <span
                className={`inline-flex self-start px-3 py-1 text-xs font-semibold rounded-full ${
                  typeColors[item.type] || "bg-gray-100 text-gray-700"
                }`}
              >
                {item.type}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </div>
                <div className="text-sm text-muted mt-0.5">
                  {item.outlet} &middot; {item.date}
                </div>
              </div>
              <svg
                className="w-5 h-5 text-muted group-hover:text-accent transition-colors shrink-0 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
