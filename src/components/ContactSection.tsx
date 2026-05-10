export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.85fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Need a technology partner for your next move?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Share the challenge, idea, or system you want to improve. We will
            help you shape the next practical step.
          </p>
        </div>

        <div className="rounded border border-white/10 bg-white/5 p-6">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-white">Email</p>
              <a
                className="mt-1 block text-slate-300 hover:text-white"
                href="mailto:founder@stacktechconsulting.com"
              >
                founder@stacktechconsulting.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">Best fit</p>
              <p className="mt-1 text-slate-300">
                Strategy, product development, cloud, data, security, and
                managed IT support.
              </p>
            </div>
          </div>
          <a
            href="mailto:founder@stacktechconsulting.com?subject=Project%20Inquiry"
            className="mt-6 block rounded bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Send an inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
