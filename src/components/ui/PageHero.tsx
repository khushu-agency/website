import { Breadcrumb, type Crumb } from "./Breadcrumb";
import { SectionLabel } from "./SectionLabel";
import type { ReactNode } from "react";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Breadcrumb items={crumbs} />
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="head">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
