"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { contentStyle } = siteContent;

export default function ContentStyle() {
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
            {contentStyle.heading}
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Content metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-border"
          >
            <div className="space-y-5">
              {contentStyle.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted font-medium">{metric.label}</span>
                    <span className="text-foreground font-semibold text-sm">
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background:
                          metric.level > 70
                            ? "linear-gradient(to right, #7c3aed, #a78bfa)"
                            : metric.level > 30
                            ? "linear-gradient(to right, #a78bfa, #c4b5fd)"
                            : "#e4e4e7",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity + Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="text-sm text-muted font-medium mb-1">
                Content Style
              </div>
              <div className="text-2xl font-bold text-foreground">
                {contentStyle.style}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="text-sm text-muted font-medium mb-1">
                Posting Activity
              </div>
              <div className="text-2xl font-bold text-foreground">
                {contentStyle.activity}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="text-sm text-muted font-medium mb-1">
                Follower Growth
              </div>
              <div className="text-2xl font-bold text-accent">
                {contentStyle.growth}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
