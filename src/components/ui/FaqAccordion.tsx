"use client";

import { useState } from "react";
import Link from "next/link";
import type { Faq } from "@/types";

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: Faq[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="faq-list">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item${isOpen ? " active" : ""}`} key={faq.id}>
            <div
              className="faq-question"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex(isOpen ? null : i);
                }
              }}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            <div className="faq-answer">
              {faq.answer}
              {faq.relatedServiceSlug && (
                <>
                  {" "}
                  <Link href={`/services/${faq.relatedServiceSlug}`} style={{ fontWeight: 600, color: "var(--text-heading)" }}>
                    Learn more →
                  </Link>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
