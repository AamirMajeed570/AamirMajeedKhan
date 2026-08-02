import Link from "next/link";
import { ArrowUpRight, Globe2, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-zinc-100">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-400">© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-100">
            <Globe2 className="h-4 w-4" /> GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-100">
            <Globe2 className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-zinc-100">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
        <Link href="#home" className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-violet-500 hover:text-violet-300">
          Back to top <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
