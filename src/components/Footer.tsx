"use client";

import { siteContent } from "@/data/content";

const { footer } = siteContent;

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg text-foreground mb-1">
              {footer.tagline}
            </div>
            <div className="text-xs text-muted">{footer.copyright}</div>
          </div>

          <div className="flex items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-muted hover:text-foreground transition-colors"
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
