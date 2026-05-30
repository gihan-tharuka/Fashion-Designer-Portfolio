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
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
