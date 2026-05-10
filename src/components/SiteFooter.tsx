export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm text-slate-500 md:grid-cols-[1fr_auto] md:items-center md:px-8">
        <div>
          <img
            src="/brand/stacktech-wordmark.svg"
            alt="Stacktech Consulting LLP"
            className="h-10 w-auto"
          />
          <p className="mt-3">Practical technology for growing businesses.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/brand/stacktech-logo.svg" className="hover:text-slate-950">
            Logo
          </a>
          <a
            href="/brand/stacktech-social-preview.svg"
            className="hover:text-slate-950"
          >
            Social preview
          </a>
          <a
            href="/brand/stacktech-business-card.svg"
            className="hover:text-slate-950"
          >
            Business card
          </a>
        </div>
      </div>
    </footer>
  );
}
