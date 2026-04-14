"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { hero } = siteContent;

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-widest uppercase text-muted mb-6">
              Hi, I&apos;m Milica — based in {hero.location}.
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-8">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl mb-10">
              {hero.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-center">
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center text-base font-medium text-foreground underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
              >
                {hero.ctaPrimary.label}
                <span className="ml-2">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-base text-muted hover:text-foreground transition-colors"
              >
                {hero.ctaSecondary.label}
                <span className="ml-2">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-4"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-sm bg-surface border border-border">
              {/* TODO: add photo at public/images/profile.jpg */}
              <div className="absolute inset-0 flex items-center justify-center text-muted">
                <svg
                  className="w-20 h-20 opacity-30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              {/* When photo exists, swap the placeholder for:
                  <img src={hero.profileImage} alt={hero.name} className="absolute inset-0 w-full h-full object-cover" />
              */}
            </div>
            <p className="text-xs text-muted mt-3 lg:text-right">
              Portrait placeholder — add your photo at{" "}
              <code className="font-mono">public/images/profile.jpg</code>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
