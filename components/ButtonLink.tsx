import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean | string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-espresso text-cream border-espresso shadow-[0_14px_34px_rgba(27,18,13,0.18)] hover:bg-brown hover:border-gold hover:shadow-[0_18px_44px_rgba(27,18,13,0.24)]",
    secondary:
      "bg-transparent text-brown border-gold/45 hover:border-gold hover:bg-cream/70 hover:text-espresso",
    ghost: "bg-transparent text-teal border-teal/25 hover:border-gold hover:bg-gold/10 hover:text-espresso",
  };

  return (
    <Link
      href={href}
      download={download}
      className={`focus-ring group inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-500 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
