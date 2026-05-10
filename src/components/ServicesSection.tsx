import { services } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Consulting and delivery across the full IT lifecycle."
          description="From strategy to support, each service is designed to be practical, measurable, and easy to maintain after launch."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-slate-950">
                <img
                  src="/brand/stacktech-mark.svg"
                  alt=""
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
