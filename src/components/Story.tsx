"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { story } = siteContent;

type StoryProps = {
  index: number;
  anchorId?: string;
};

export default function Story({ index, anchorId }: StoryProps) {
  const part = story.parts[index];
  if (!part) return null;

  return (
    <section
      id={anchorId}
      className="py-20 sm:py-24 border-t border-border/60"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm tracking-widest uppercase text-accent mb-5">
            {part.kicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-foreground mb-6">
            {part.heading}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {part.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
