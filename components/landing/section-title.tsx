import { cn } from "@/lib/utils";

type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ label, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl space-y-4 xl:max-w-4xl", className)}>
      {label ? (
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-300/80">{label}</p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-zinc-100 md:text-5xl xl:text-[3.55rem]">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-relaxed text-zinc-300/80 md:text-lg xl:max-w-3xl">{description}</p> : null}
    </div>
  );
}
