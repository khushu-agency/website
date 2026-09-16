import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type IconKind = "arrow-diagonal" | "plus" | "none";

function Icon({ kind }: { kind: IconKind }) {
  if (kind === "none") return null;
  if (kind === "plus") {
    return (
      <span className="ic">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    );
  }
  return (
    <span className="ic">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
  );
}

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "ghost";
  onDark?: boolean;
  icon?: IconKind;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "solid",
    onDark = false,
    icon = "arrow-diagonal",
    className = "",
  } = props;

  const classes = [
    "btn",
    variant === "solid" ? "btn-solid" : "btn-ghost",
    onDark ? "on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        <Icon kind={icon} />
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  void _href;

  return (
    <button className={classes} {...buttonProps}>
      {children}
      <Icon kind={icon} />
    </button>
  );
}
