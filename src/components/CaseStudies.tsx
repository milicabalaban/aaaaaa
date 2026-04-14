"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { work } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl mb-14">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {work.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-foreground mb-6">
            {work.heading}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            {work.intro}
          </p>
        </motion.div>

        <div className="space-y-12">
          {work.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
              }}
              className="grid sm:grid-cols-[1fr_2fr] gap-6 sm:gap-12 pt-10 border-t border-border group"
            >
              <div>
                <p className="font-display text-5xl sm:text-6xl text-accent leading-none mb-2">
                  {item.metric}
                </p>
                <p className="text-sm text-muted">{item.metricLabel}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-3">
                  {item.role}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4 leading-snug">
                  <Link
                    href={`/work/${item.slug}`}
                    className="underline underline-offset-4 decoration-transparent group-hover:decoration-accent hover:text-accent transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-5">
                  {item.description}
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/work/${item.slug}`}
                    className="text-sm text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent hover:text-accent transition-colors"
                  >
                    Read the case study →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-14 text-sm text-muted italic max-w-2xl">
          {/* TODO: once real client names are in content.ts, link each case study to a detailed page or the client site. */}
          More case studies and client references available on request.
        </p>
      </div>
    </section>
  );
}
