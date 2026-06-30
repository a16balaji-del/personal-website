import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  download = false
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary" ? "bg-mint text-ink" : "border-mint bg-transparent text-ink";

  return (
    <a
      className={`interactive-lift inline-flex min-h-[38px] min-w-[176px] items-center justify-center rounded-xl border-2 px-5 py-2 text-sm font-semibold shadow-[0_10px_24px_rgba(20,24,23,0.08)] hover:shadow-[0_16px_30px_rgba(20,24,23,0.14)] ${variantClass}`}
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}
