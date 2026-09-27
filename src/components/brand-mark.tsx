import brands from "@/lib/brand-icons.json";

type BrandRecord = {
  title: string;
  hex: string;
  path: string;
};

const icons = brands as Record<string, BrandRecord>;

export function brandHex(id: string) {
  return icons[id]?.hex;
}

export function BrandMark({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const icon = icons[id];
  if (!icon) return null;

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
