export function SectionLabel({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className={`eyebrow${onDark ? " on-dark" : ""}`}>
      <span className="dot" />
      {children}
    </div>
  );
}
