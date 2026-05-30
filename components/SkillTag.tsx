type SkillTagProps = {
  children: React.ReactNode;
};

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-flex rounded-full border border-brown/15 bg-cream/60 px-4 py-2 text-sm font-semibold text-brown">
      {children}
    </span>
  );
}
