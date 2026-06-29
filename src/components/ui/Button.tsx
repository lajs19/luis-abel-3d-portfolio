import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

type BaseButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}>;

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variantStyles: Record<NonNullable<BaseButtonProps["variant"]>, string> = {
  primary: "bg-accent text-ink shadow-glow hover:-translate-y-0.5 hover:bg-accentSoft",
  secondary: "border border-white/10 bg-white/6 text-white hover:border-accent/50 hover:bg-white/10",
  ghost: "text-white/85 hover:bg-white/8 hover:text-white",
};

function getButtonStyles(variant: NonNullable<BaseButtonProps["variant"]>, className?: string) {
  return [baseStyles, variantStyles[variant], className].filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: NativeButtonProps) {
  return (
    <button className={getButtonStyles(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  className,
  variant = "secondary",
  ...props
}: AnchorButtonProps) {
  return (
    <a className={getButtonStyles(variant, className)} {...props}>
      {children}
    </a>
  );
}
