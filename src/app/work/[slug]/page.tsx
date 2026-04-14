import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/content";

const { work } = siteContent;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return work.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = work.items.find((i) => i.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Milica Balaban`,
    description: item.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = work.items.find((i) => i.slug === slug);
  if (!item) notFound();

  const index = work.items.findIndex((i) => i.slug === slug);
  const next = work.items[(index + 1) % work.items.length];

  return (
    <>
      <Navbar />
      <main>
        <article className="pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <Link
              href="/#work"
              className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-10"
            >
              <span className="mr-2">←</span> Back to selected work
            </Link>

            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-5">
              {item.role}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
              {item.title}
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted mb-12 border-b border-border pb-8">
              <span>
                <span className="text-xs uppercase tracking-widest mr-2">
                  Client
                </span>
                {item.client}
              </span>
              <span>
                <span className="text-xs uppercase tracking-widest mr-2">
                  Year
                </span>
                {item.year}
              </span>
              {item.externalLink ? (
                <a
                  href={item.externalLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
                >
                  Visit site ↗
                </a>
              ) : null}
            </div>

            <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed mb-14">
              {item.summary}
            </p>

            <Section label="The problem">
              <p>{item.problem}</p>
            </Section>

            <Section label="What I did">
              <ul className="space-y-3">
                {item.approach.map((line, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[24px_1fr] gap-1 text-foreground/85 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-muted pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section label="The results">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                {item.results.map((r, i) => (
                  <div key={i} className="border-t border-border pt-4">
                    <p className="font-display text-4xl sm:text-5xl text-accent leading-none mb-2">
                      {r.metric}
                    </p>
                    <p className="text-sm text-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            </Section>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-14 pt-8 border-t border-border">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            {next && next.slug !== item.slug ? (
              <div className="mt-20 pt-10 border-t border-border">
                <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
                  Next
                </p>
                <Link
                  href={`/work/${next.slug}`}
                  className="font-display text-2xl sm:text-3xl text-foreground hover:text-accent transition-colors inline-flex items-center gap-3"
                >
                  {next.title}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-mono uppercase tracking-widest text-muted mb-5 pb-3 border-b border-border">
        {label}
      </h2>
      <div className="text-base sm:text-lg text-foreground/85 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
