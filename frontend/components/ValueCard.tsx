type ValueCardProps = {
  title: string;
  text: string;
  index?: number;
};

export function ValueCard({ title, text, index = 1 }: ValueCardProps) {
  return (
    <article className="motion-reveal group border-t border-gold/28 py-7 transition duration-500 hover:-translate-y-1 hover:border-gold sm:py-8">
      <p className="serif text-5xl font-semibold leading-none text-gold/70 transition duration-500 group-hover:text-gold">
        {String(index).padStart(2, "0")}
      </p>
      <div className="mt-7 h-px w-12 bg-gold/45 transition duration-500 group-hover:w-20 group-hover:bg-gold" />
      <h3 className="serif mt-7 text-3xl font-semibold leading-tight text-brown">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}
