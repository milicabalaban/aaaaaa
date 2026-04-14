"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const { events } = siteContent;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

type EventItem = {
  date: string;
  title: string;
  role: string;
  location: string;
  link?: string;
};

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl mb-14">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            {events.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-foreground mb-6">
            {events.heading}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            {events.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          <EventList
            title="Coming up"
            items={events.upcoming}
            emptyHint="Nothing scheduled yet — email me if you'd like to change that."
          />
          <EventList
            title="Where I've been"
            items={events.attended}
            emptyHint="Past events will show up here."
          />
        </div>
      </div>
    </section>
  );
}

function EventList({
  title,
  items,
  emptyHint,
}: {
  title: string;
  items: EventItem[];
  emptyHint: string;
}) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-6 pb-3 border-b border-border">
        {title}
      </h3>

      {items.length === 0 ? (
        <p className="text-sm text-muted italic">{emptyHint}</p>
      ) : (
        <ul className="space-y-6">
          {items.map((item, i) => (
            <li key={i} className="group">
              <div className="text-xs font-mono text-muted mb-1">
                {item.date} · {item.role}
              </div>
              {item.link && item.link !== "#" ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block font-display text-lg sm:text-xl text-foreground leading-snug underline underline-offset-4 decoration-transparent group-hover:decoration-accent transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <div className="font-display text-lg sm:text-xl text-foreground leading-snug">
                  {item.title}
                </div>
              )}
              <div className="text-sm text-muted mt-1">{item.location}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
