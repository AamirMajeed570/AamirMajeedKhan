import { Globe2, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const links = [
  { href: siteConfig.github, label: "GitHub", icon: Globe2 },
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Globe2 },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="rounded-full border border-zinc-800 bg-zinc-900/70 p-3 text-zinc-300 transition hover:border-violet-500 hover:text-violet-300"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
