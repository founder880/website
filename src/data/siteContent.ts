export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "IT Strategy and Advisory",
    description:
      "Practical technology roadmaps that connect business priorities with delivery, cost, security, and scale.",
    points: ["Technology assessment", "Architecture planning", "Vendor evaluation"],
  },
  {
    title: "Custom Software Development",
    description:
      "Reliable web and mobile applications built around workflows, integrations, and measurable outcomes.",
    points: ["Web applications", "Mobile-ready systems", "API integrations"],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Cloud foundations, deployment pipelines, and operational practices that make releases faster and safer.",
    points: ["Cloud migration", "CI/CD setup", "Monitoring and automation"],
  },
  {
    title: "Data and Analytics",
    description:
      "Dashboards, reporting systems, and analytics pipelines that turn scattered data into decisions.",
    points: ["Business dashboards", "Data pipelines", "Reporting automation"],
  },
  {
    title: "Cybersecurity Consulting",
    description:
      "Security reviews and implementation support for applications, infrastructure, access, and compliance needs.",
    points: ["Security audit", "Access controls", "Risk remediation"],
  },
  {
    title: "Managed IT Support",
    description:
      "Responsive technical support and system care for teams that need dependable day-to-day operations.",
    points: ["Issue resolution", "System maintenance", "Performance tuning"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "Understand goals, users, systems, constraints, and the business outcome behind the work.",
  },
  {
    title: "Design",
    description:
      "Shape the architecture, experience, scope, milestones, and delivery plan before build starts.",
  },
  {
    title: "Deliver",
    description:
      "Build in focused releases with transparent progress, testing, and clear handover.",
  },
  {
    title: "Improve",
    description:
      "Measure performance, reduce friction, and keep systems secure, stable, and useful.",
  },
];

export const industries = [
  "Startups",
  "Professional services",
  "Retail and commerce",
  "Healthcare operations",
  "Education",
  "Manufacturing",
];

export const stats = [
  { value: "6+", label: "Core service areas" },
  { value: "4", label: "Delivery stages" },
  { value: "24/7", label: "Support mindset" },
];
