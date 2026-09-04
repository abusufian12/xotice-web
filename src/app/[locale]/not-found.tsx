import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-4 text-3xl font-light text-charcoal md:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
      <Link
        href="/en"
        className="mt-8 border border-charcoal/30 px-8 py-3 text-sm tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
