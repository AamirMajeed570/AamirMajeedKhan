import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-100">Page not found</h1>
        <p className="mt-4 text-lg text-zinc-400">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-violet-500 px-5 py-3 font-medium text-white">Return home</Link>
      </div>
    </main>
  );
}
