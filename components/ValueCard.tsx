type ValueCardProps = {
  title: string;
  text: string;
};

export function ValueCard({ title, text }: ValueCardProps) {
  return (
    <article className="soft-card motion-reveal rounded-md p-7 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_30px_80px_rgba(58,36,24,0.16)]">
      <h3 className="serif text-3xl font-semibold leading-tight text-brown">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}
