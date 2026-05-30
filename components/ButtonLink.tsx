import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-brown text-cream border-brown hover:bg-accent hover:border-accent",
    secondary:
      "bg-transparent text-brown border-brown/30 hover:border-brown hover:bg-cream/65",
    ghost: "bg-transparent text-teal border-teal/25 hover:border-teal hover:bg-teal/10",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
