import { industries } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Useful systems for teams that need momentum."
          description="We work with organizations that need practical software, reliable infrastructure, and clear technical guidance."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
