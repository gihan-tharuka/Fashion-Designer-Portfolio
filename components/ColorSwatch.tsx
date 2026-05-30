type ColorSwatchProps = {
  name: string;
  hex: string;
};

export function ColorSwatch({ name, hex }: ColorSwatchProps) {
  return (
    <div className="rounded-md border border-brown/10 bg-cream/55 p-3">
      <div
        className="aspect-square rounded-sm border border-brown/10"
        style={{ backgroundColor: hex }}
        aria-label={`${name} colour swatch`}
      />
      <p className="mt-3 text-sm font-semibold text-brown">{name}</p>
      <p className="text-xs text-muted">{hex}</p>
    </div>
  );
}
