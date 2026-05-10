import { stats } from "../data/siteContent";

export function HeroSection() {
  return (
    <section id="top" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            IT Services and Consulting
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Practical technology consulting for growing businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Stacktech Consulting helps teams plan, build, secure, and operate
            modern digital systems without unnecessary complexity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="rounded border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-950"
            >
              View services
            </a>
          </div>
        </div>

        <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
          <div className="border-b border-slate-200 pb-5">
            <p className="text-sm font-semibold text-slate-950">
              How we help
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Technology decisions become easier when strategy, delivery, and
              operations are designed together.
            </p>
          </div>
          <div className="grid gap-4 py-6">
            {[
              "Clarify the right technology direction",
              "Build secure, maintainable products",
              "Modernize infrastructure and workflows",
              "Support teams after launch",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
