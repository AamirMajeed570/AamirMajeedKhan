"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/shared/social-links";
import { siteConfig } from "@/data/site-config";

const badges = ["Next.js", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "OpenAI", "LiveKit"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" /> Full-Stack Engineer • Backend Developer • AI Integrations
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-violet-300">Aamir Majeed Khan</span>
            </h1>
            <h2 className="text-2xl font-medium leading-tight text-zinc-300 sm:text-3xl">
              I build scalable full-stack systems and AI-powered products.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              I am a Full-Stack and Backend Engineer experienced in building scalable APIs, real-time communication platforms, AI-integrated applications, cloud infrastructure, and production-ready web products using Next.js, Node.js, AWS, PostgreSQL, MongoDB, Docker, OpenAI, LiveKit, and Asterisk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={siteConfig.resume} download className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 font-medium text-zinc-100 transition hover:border-violet-500">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 font-medium text-zinc-100 transition hover:border-violet-500">
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </div>
          <SocialLinks />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/10 blur-3xl" />
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950/80 p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <div className="mt-6 flex flex-col items-center gap-6">
                <div className="relative h-56 w-56 overflow-hidden rounded-full border border-zinc-800 bg-gradient-to-br from-violet-500/20 to-zinc-900 p-4">
                  <Image src="/images/profile/AamirMajeed.png" alt="Developer profile illustration" fill sizes="224px" className="object-contain" />
                </div>
                <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 text-left">
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Engineering Focus</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <span key={badge} className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1 text-sm text-zinc-300">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
