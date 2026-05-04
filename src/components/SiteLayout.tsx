import { NavLink, Outlet } from "react-router-dom";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-full px-4 py-2 text-sm font-semibold transition",
          isActive
            ? "bg-brand-ink text-white"
            : "text-brand-ink/80 hover:bg-black/5 hover:text-brand-ink",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-brand-paper/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/app-icon.png"
              alt="Lumea integramelor logo"
              className="h-10 w-10 rounded-2xl bg-white object-contain shadow-soft ring-1 ring-black/5"
              loading="eager"
            />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">
                Lumea integramelor
              </div>
              <div className="text-xs text-brand-ink/70">
                Mobile application
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavItem to="/" label="Home" />
            <NavItem to="/privacy" label="Privacy Policy" />
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-brand-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Lumea integramelor.</div>
        </div>
      </footer>
    </div>
  );
}

