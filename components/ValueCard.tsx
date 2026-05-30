type ValueCardProps = {
  title: string;
  text: string;
};

export function ValueCard({ title, text }: ValueCardProps) {
  return (
    <article className="soft-card rounded-md p-6">
      <h3 className="serif text-2xl font-semibold text-brown">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}
