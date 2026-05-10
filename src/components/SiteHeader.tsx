const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-slate-950 text-sm font-bold text-white">
            ST
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
            Stacktech
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded border border-slate-950 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
        >
          Book a call
        </a>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto border-t border-slate-100 px-5 py-3 text-sm font-medium text-slate-600 md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 hover:text-slate-950"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
