type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`motion-reveal ${
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="serif mt-4 text-5xl font-semibold leading-[0.96] text-brown sm:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">{text}</p>
      ) : null}
    </div>
  );
}
