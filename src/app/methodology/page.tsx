import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Understand how CCR assesses cyber-security readiness, evidence confidence, exposure, security domains, findings and improvement priorities.",
};
``
const domains = [
  {
    code: "01",
    name: "Governance & Risk",
    description:
      "How cyber-security responsibility, policies and risk oversight are established.",
  },
  {
    code: "02",
    name: "Asset Management",
    description:
      "How business technology, systems and important digital assets are identified and managed.",
  },
  {
    code: "03",
    name: "Identity & Access",
    description:
      "How access to business accounts, systems and privileged services is controlled.",
  },
  {
    code: "04",
    name: "Endpoint & Configuration",
    description:
      "How computers, applications and business devices are configured, maintained and updated.",
  },
  {
    code: "05",
    name: "Network Security",
    description:
      "How business networks are protected and separated from less-trusted environments where appropriate.",
  },
  {
    code: "06",
    name: "Data Protection",
    description:
      "How sensitive business and personal information is protected against inappropriate access, loss or disclosure.",
  },
  {
    code: "07",
    name: "Backup & Recovery",
    description:
      "How important business information is backed up and recoverability is supported.",
  },
  {
    code: "08",
    name: "Detection & Incident Response",
    description:
      "How the organisation prepares for, identifies and responds to potential cyber-security incidents.",
  },
  {
    code: "09",
    name: "People & Security Awareness",
    description:
      "How employees and other users are supported in understanding their cyber-security responsibilities.",
  },
  {
    code: "10",
    name: "IoT & Connected Devices",
    description:
      "How connected technology such as CCTV, POS terminals, printers, sensors and access-control systems is identified and secured.",
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <nav className="flex items-center justify-between border-b border-white/10 pb-7">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-[#07111f]">
              C
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                CCR
              </div>
              <div className="text-xs text-slate-500">
                Cyber Check Report
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden text-sm font-semibold text-slate-400 transition hover:text-white sm:block"
            >
              Home
            </Link>

<Link
  href="/">
  Start Free Check
</Link>
          </div>
        </nav>

        <section className="py-20">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              CCR Methodology
            </div>

            <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
              A structured approach to understanding cyber-security posture.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              CCR combines a structured cyber-security assessment,
              evidence awareness, connected-device considerations and
              prioritised findings to help organisations understand where
              controls appear stronger, where gaps may exist and what should
              be improved first.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Plain-English assessment",
                "10 security domains",
                "Evidence-aware",
                "Cyber + connected devices",
                "Prioritised improvement",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <MetricCard
            label="CCR Readiness"
            value="0-100"
            text="An indicative measure of assessed control readiness across applicable CCR security domains."
          />

          <MetricCard
            label="Evidence Confidence"
            value="0-100"
            text="A separate measure showing how much supporting evidence exists for the assessed posture."
          />

          <MetricCard
            label="Exposure Indicator"
            value="4 Levels"
            text="A plain-English classification expressed as Low, Moderate, Elevated or High."
          />
        </section>

        <section className="mt-24">
          <SectionLabel>Assessment Model</SectionLabel>

          <h2 className="mt-3 text-4xl font-black">
            From answers to practical priorities
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            CCR separates assessment, evidence and remediation so that a
            reported security control is not automatically treated as
            evidence-supported assurance.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            <ProcessCard number="01" title="Profile" />
            <ProcessCard number="02" title="Assess" />
            <ProcessCard number="03" title="Evidence" />
            <ProcessCard number="04" title="Prioritise" />
            <ProcessCard number="05" title="Improve" />
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Security Domains</SectionLabel>

          <h2 className="mt-3 text-4xl font-black">
            Ten areas of cyber-security readiness
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            The Quick Check currently organises assessment controls across
            ten CCR security domains covering traditional business IT,
            people, recovery and connected technology.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {domains.map((domain) => (
              <div
                key={domain.code}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-black text-cyan-300">
                    {domain.code}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {domain.name}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          <InfoPanel
            eyebrow="CCR Readiness"
            title="Control readiness and evidence are deliberately separated."
          >
            <p>
              CCR Readiness represents assessed implementation of applicable
              controls. Evidence Confidence is reported independently because
              an organisation may report strong controls while having limited
              supporting evidence available.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-[#0b192a] p-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="text-sm text-slate-500">
                    Example Readiness
                  </div>
                  <div className="mt-2 text-4xl font-black text-cyan-300">
                    82/100
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-500">
                    Example Evidence Confidence
                  </div>
                  <div className="mt-2 text-4xl font-black text-amber-300">
                    27/100
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                This could indicate a strong reported posture with limited
                supporting evidence.
              </p>
            </div>
          </InfoPanel>

          <InfoPanel
            eyebrow="Exposure Indicator"
            title="Clear risk communication without false precision."
          >
            <p>
              The Quick Check expresses assessed exposure using four
              categories rather than presenting a second precise-looking
              risk percentage.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <ExposureBadge
                label="LOW"
                colour="border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
              />
              <ExposureBadge
                label="MODERATE"
                colour="border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
              />
              <ExposureBadge
                label="ELEVATED"
                colour="border-amber-400/20 bg-amber-400/[0.06] text-amber-300"
              />
              <ExposureBadge
                label="HIGH"
                colour="border-red-400/20 bg-red-400/[0.06] text-red-300"
              />
            </div>
          </InfoPanel>
        </section>

        <section className="mt-24">
          <SectionLabel>Evidence Confidence</SectionLabel>

          <h2 className="mt-3 text-4xl font-black">
            Not every security claim has the same level of support.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            CCR distinguishes between reported controls and controls with
            stronger supporting provenance. Evidence Confidence does not
            replace the Readiness Score; it provides additional context about
            the assurance supporting that assessment.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <EvidenceCard
              title="Self-Reported"
              text="The organisation reports that the control is implemented."
              colour="text-blue-300"
            />

            <EvidenceCard
              title="Evidence Provided"
              text="Relevant supporting evidence has been supplied for the control."
              colour="text-amber-300"
            />

            <EvidenceCard
              title="Machine-Observed"
              text="An appropriate authorised technical observation supports the assessment."
              colour="text-emerald-300"
            />

            <EvidenceCard
              title="Expert-Reviewed"
              text="A relevant assessment or evidence item has been reviewed by an authorised expert."
              colour="text-purple-300"
            />
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Findings & Priorities</SectionLabel>

          <h2 className="mt-3 text-4xl font-black">
            Identify gaps. Prioritise what matters first.
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            <PriorityCard
              priority="CRITICAL"
              text="Highest assessment priority requiring prompt attention."
              colour="border-red-500/30 text-red-300"
            />
            <PriorityCard
              priority="HIGH"
              text="Important control gaps that should be prioritised."
              colour="border-orange-400/30 text-orange-300"
            />
            <PriorityCard
              priority="MEDIUM"
              text="Material improvements that should be planned and addressed."
              colour="border-amber-400/30 text-amber-300"
            />
            <PriorityCard
              priority="LOW"
              text="Lower-priority improvement opportunities or planning items."
              colour="border-cyan-400/30 text-cyan-300"
            />
          </div>
        </section>

        <section className="mt-24">
          <SectionLabel>Improvement Roadmap</SectionLabel>

          <h2 className="mt-3 text-4xl font-black">
            Findings become an actionable plan.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            CCR groups findings into practical suggested timeframes so that
            organisations can focus on immediate priorities without losing
            sight of medium and longer-term improvements.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <RoadmapMethodCard
              title="Do Now"
              text="Highest-priority actions identified for early attention."
              colour="text-red-300"
            />
            <RoadmapMethodCard
              title="Next 30 Days"
              text="Near-term actions intended to strengthen the assessed posture."
              colour="text-amber-300"
            />
            <RoadmapMethodCard
              title="Next 90 Days"
              text="Planned improvements after immediate priorities are addressed."
              colour="text-cyan-300"
            />
            <RoadmapMethodCard
              title="Plan"
              text="Longer-term improvements to keep visible in the security programme."
              colour="text-blue-300"
            />
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-blue-500/[0.04] p-8 sm:p-10">
          <SectionLabel>Framework-Informed Approach</SectionLabel>

          <h2 className="mt-3 max-w-4xl text-4xl font-black">
            Designed to reference established cyber-security guidance.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-300">
            CCR is designed so that relevant assessment controls can be mapped
            against established cyber-security guidance, including NIST CSF,
            CIS Controls and relevant Cyber Essentials control areas.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "NIST Cybersecurity Framework",
              "CIS Controls",
              "Cyber Essentials",
            ].map((framework) => (
              <div
                key={framework}
                className="rounded-2xl border border-white/10 bg-[#07111f]/70 p-5 font-semibold text-slate-200"
              >
                {framework}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
            <div className="font-bold text-amber-300">
              Mapping is not certification.
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              CCR is an independent assessment and improvement platform.
              References or mappings to third-party frameworks do not
              constitute certification, accreditation or endorsement by the
              referenced framework owners.
            </p>
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          <InfoPanel
            eyebrow="What CCR Is"
            title="Decision support for cyber-security improvement."
          >
            <ul className="space-y-3">
              {[
                "A structured cyber-security assessment.",
                "An evidence-aware view of assessed controls.",
                "A way to identify and prioritise control gaps.",
                "An improvement-planning tool.",
                "A basis for reassessment and continuous improvement.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-300"
                >
                  <span className="text-cyan-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoPanel>

          <InfoPanel
            eyebrow="What CCR Is Not"
            title="Assessment does not equal certification or guarantee."
          >
            <ul className="space-y-3">
              {[
                "Not a penetration test.",
                "Not a formal security certification.",
                "Not a guarantee that an organisation is secure.",
                "Not a guarantee of regulatory compliance.",
                "Not a replacement for specialist advice where deeper assurance is required.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-300"
                >
                  <span className="text-amber-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoPanel>
        </section>

        <section className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <SectionLabel>Assessment Limitations</SectionLabel>

          <h2 className="mt-3 text-3xl font-black">
            An assessment is a point-in-time decision-support tool.
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <p className="leading-8 text-slate-400">
              Quick Check results are based primarily on the information
              supplied during the assessment. Self-reported answers may not
              provide the same level of assurance as appropriate supporting
              evidence or expert review.
            </p>

            <p className="leading-8 text-slate-400">
              Cyber-security risk changes over time. Technology, people,
              suppliers, vulnerabilities and business processes can change,
              so periodic reassessment and improvement are important.
            </p>
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Start With Clarity</SectionLabel>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Understand your posture. Improve what matters first.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Start with the free CCR Quick Check and build a clearer picture
              of your organisation&apos;s cyber-security readiness.
            </p>

<Link
  href="/">
  Start Free Cyber Check →
</Link>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © 2026 CCR. Cyber Check Report.
            </div>

            <div>
              Evidence-aware cyber and connected-device security assessment.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  text,
}: {
  label: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <div className="text-sm font-semibold text-slate-400">
        {label}
      </div>

      <div className="mt-3 text-4xl font-black text-cyan-300">
        {value}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function ProcessCard({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs font-bold text-cyan-400">
        {number}
      </div>

      <div className="mt-3 font-bold">
        {title}
      </div>
    </div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <div className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
        {eyebrow}
      </div>

      <h3 className="mt-3 text-2xl font-black">
        {title}
      </h3>

      <div className="mt-5 leading-8 text-slate-400">
        {children}
      </div>
    </div>
  );
}

function ExposureBadge({
  label,
  colour,
}: {
  label: string;
  colour: string;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-4 text-center text-sm font-bold ${colour}`}
    >
      {label}
    </div>
  );
}

function EvidenceCard({
  title,
  text,
  colour,
}: {
  title: string;
  text: string;
  colour: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className={`font-bold ${colour}`}>
        {title}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function PriorityCard({
  priority,
  text,
  colour,
}: {
  priority: string;
  text: string;
  colour: string;
}) {
  return (
    <div className={`rounded-2xl border bg-white/[0.03] p-6 ${colour}`}>
      <div className="font-black">
        {priority}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function RoadmapMethodCard({
  title,
  text,
  colour,
}: {
  title: string;
  text: string;
  colour: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className={`font-black ${colour}`}>
        {title}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}