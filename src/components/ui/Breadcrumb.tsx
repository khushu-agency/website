import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className={isLast ? "current" : undefined}>{item.label}</span>
            )}
            {!isLast && <span className="sep">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
