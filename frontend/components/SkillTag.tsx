type SkillTagProps = {
  children: React.ReactNode;
};

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-flex rounded-full border border-gold/30 bg-cream/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brown shadow-[0_8px_24px_rgba(58,36,24,0.06)]">
      {children}
    </span>
  );
}
