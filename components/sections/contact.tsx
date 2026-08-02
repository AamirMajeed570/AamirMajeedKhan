"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { contactSchema, type ContactFormValues } from "@/lib/validations";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message");
      }

      setStatus("success");
      setMessage(data.message || "Thanks for reaching out. I will get back to you soon.");
      reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              <Sparkles className="h-4 w-4" /> Let&apos;s connect
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-zinc-100">Open to opportunities and meaningful collaborations</h2>
              <p className="text-lg leading-8 text-zinc-400">
                Whether you are hiring for a full-stack role, building a startup product, or looking for a backend engineer to help ship a complex system, I would love to hear from you.
              </p>
            </div>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-violet-300" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-zinc-100">{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-violet-300" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-400">
              <p className="font-medium text-zinc-200">Availability</p>
              <p className="mt-2">{siteConfig.availability}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">Name</label>
                <input id="name" {...register("name")} className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none ring-0 focus:border-violet-500" />
                {errors.name ? <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p> : null}
              </div>
              <div>
                <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email")} className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none ring-0 focus:border-violet-500" />
                {errors.email ? <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p> : null}
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm text-zinc-300" htmlFor="subject">Subject</label>
              <input id="subject" {...register("subject")} className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none ring-0 focus:border-violet-500" />
              {errors.subject ? <p className="mt-2 text-sm text-rose-400">{errors.subject.message}</p> : null}
            </div>
            <div className="mt-5 hidden">
              <label className="mb-2 block text-sm text-zinc-300" htmlFor="company">Company</label>
              <input id="company" {...register("company")} className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none ring-0 focus:border-violet-500" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm text-zinc-300" htmlFor="message">Message</label>
              <textarea id="message" rows={6} {...register("message")} className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-zinc-100 outline-none ring-0 focus:border-violet-500" />
              {errors.message ? <p className="mt-2 text-sm text-rose-400">{errors.message.message}</p> : null}
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60">
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
              <div className="text-sm text-zinc-400">{status === "success" ? <span className="flex items-center gap-2 text-emerald-400"><CheckCircle2 className="h-4 w-4" /> {message}</span> : null}{status === "error" ? <span className="text-rose-400">{message}</span> : null}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
