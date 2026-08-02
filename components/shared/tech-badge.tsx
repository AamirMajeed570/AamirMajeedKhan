interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-sm text-zinc-300">
      {label}
    </span>
  );
}
