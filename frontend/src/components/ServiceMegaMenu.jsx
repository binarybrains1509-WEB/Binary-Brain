import React from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Laptop,
  LineChart,
  Monitor,
  Rocket,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const studentItems = [
  {
    icon: GraduationCap,
    title: 'Final Year Project Development',
    description: 'End-to-end project ideation, build, and mentorship.',
  },
  {
    icon: FileText,
    title: 'Project Guidance',
    description: 'Turn ideas into practical, industry-ready solutions.',
  },
  {
    icon: Monitor,
    title: 'Portfolio Website',
    description: 'Launch a portfolio that showcases your skills clearly.',
  },
  {
    icon: Sparkles,
    title: 'Resume Building',
    description: 'Craft a polished resume that stands out to recruiters.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'LinkedIn Profile',
    description: 'Build a professional brand that gets noticed.',
  },
  {
    icon: Rocket,
    title: 'Internship Guidance',
    description: 'Get support for internships and career pathways.',
  },
  {
    icon: LineChart,
    title: 'Career Support',
    description: 'Personalized help from planning to placement.',
  },
];

const businessItems = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, conversion-driven websites for your brand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Fast, user-focused apps for iOS and Android.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'ERP Solutions',
    description: 'Streamline workflows with connected business systems.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software built around your process.',
  },
  {
    icon: TrendingUp,
    title: 'E-Commerce Development',
    description: 'Launch scalable online stores with great UX.',
  },
  {
    icon: Building2,
    title: 'API Development',
    description: 'Reliable integrations and connected digital systems.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Deployment, automation, and infrastructure support.',
  },
  {
    icon: Handshake,
    title: 'Maintenance & Support',
    description: 'Keep systems stable, secure, and future-ready.',
  },
];

export default function ServiceMegaMenu({ type, onClose, onSelectService }) {
  const items = type === 'students' ? studentItems : businessItems;
  const label = type === 'students' ? 'Student Services' : 'Business Services';

  return (
    <div className="absolute left-1/2 top-full z-50 mt-4 w-[min(680px,calc(100vw-2rem))] -translate-x-1/2 rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            BinaryBrains
          </div>
          <div className="text-sm font-bold text-slate-900">{label}</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:border-sky-200 hover:text-sky-700"
        >
          Close
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, description }) => (
          <a
            key={title}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onSelectService?.(title);
            }}
            className="group rounded-2xl border border-slate-200 bg-white p-3 text-left transition hover:border-sky-200 hover:bg-sky-50/70"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-slate-900">{title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-600">{description}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
