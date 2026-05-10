import { processSteps } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="border-y border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from problem to working system."
          description="We keep delivery transparent, with enough structure to reduce risk and enough flexibility to adapt as the work becomes clearer."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-teal-700">
                  0{index + 1}
                </p>
                <span className="h-2 w-8 rounded-full bg-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
