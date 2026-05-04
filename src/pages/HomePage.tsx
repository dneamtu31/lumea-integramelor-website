import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid gap-8">
      <section className="rounded-3xl border border-black/10 bg-slate-100 p-8 shadow-soft sm:p-10">
        <div className="grid gap-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Lumea integramelor logo"
                className="h-16 w-16 rounded-2xl bg-white object-contain ring-1 ring-black/10"
                loading="eager"
              />
              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-brand-ink/80">
                  Lumea integramelor
                </div>
                <div className="text-xs font-bold text-brand-ink/70">
                  Mobile application
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/privacy"
              className="inline-flex w-fit items-center justify-center rounded-2xl bg-brand-ink px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              View Privacy Policy
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

