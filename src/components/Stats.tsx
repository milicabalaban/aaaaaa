"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";

const { stats } = siteContent;

function StatCard({
  value,
  label,
  numericValue,
  delay,
}: {
  value: string;
  label: string;
  numericValue: number;
  delay: number;
}) {
  const isDecimal = numericValue % 1 !== 0;
  const isLarge = numericValue >= 1000;
  const { count, ref } = useCountUp(numericValue, 2000);

  const displayValue = () => {
    if (isLarge) {
      const k = count / 1000;
      return `${Math.floor(k)}K${value.includes("+") ? "+" : ""}`;
    }
    if (isDecimal) {
      return count.toFixed(2);
    }
    return Math.floor(count).toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 sm:p-8"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-2">
        {displayValue()}
      </div>
      <div className="text-sm sm:text-base text-muted font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {stats.heading}
          </h2>
          <p className="text-muted text-lg">{stats.subheading}</p>
        </motion.div>

        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.highlights.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* Detailed stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.detailedStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-5 border border-border hover:border-accent/20 transition-colors"
            >
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Score breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-border max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              LinkedIn Score
            </h3>
            <span className="text-2xl font-bold text-accent">87.8/100</span>
          </div>
          <div className="space-y-4">
            {stats.scoreBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-muted font-medium">{item.label}</span>
                  <span className="text-foreground font-semibold">
                    {item.score}/100
                  </span>
                </div>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
