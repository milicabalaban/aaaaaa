"use client";

import { siteContent } from "@/data/content";

const { footer } = siteContent;

export default function Footer() {
  return (
    <footer className="py-10 bg-foreground text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold text-sm mb-1">
              {footer.tagline}
            </div>
            <div className="text-xs text-white/50">{footer.copyright}</div>
          </div>

          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
