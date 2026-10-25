"use client";
import StartAssessmentButton from "@/components/StartAssessmentButton";
const domains = [
  { name: "Identity & Access", score: 74 },
  { name: "Backup & Recovery", score: 81 },
  { name: "Network Security", score: 62 },
  { name: "Incident Response", score: 51 },
  { name: "IoT & Connected Devices", score: 43 },
  { name: "Security Awareness", score: 71 },
];

const features = [
  {
    number: "01",
    title: "Assess",
    text: "Understand your organisation's cyber-security posture through a structured, plain-English assessment.",
  },
  {
    number: "02",
    title: "Evidence",
    text: "Support security claims with relevant evidence and understand how confidently your controls can be assessed.",
  },
  {
    number: "03",
    title: "Improve",
    text: "Identify priority control gaps and receive a practical roadmap showing what to address first.",
  },
];

const steps = [
  {
    number: "01",
    title: "Business Profile",
    description:
      "Tell us about your organisation, people, technology and digital environment.",
  },
  {
    number: "02",
    title: "Adaptive Assessment",
    description:
      "Answer relevant cyber and connected-device security questions in plain English.",
  },
  {
    number: "03",
    title: "Supporting Evidence",
    description:
      "Provide appropriate supporting evidence where it is safely available.",
  },
  {
    number: "04",
    title: "CyberScoreHub Analysis",
    description:
      "Receive readiness, evidence-confidence and domain-level assessment results.",
  },
  {
    number: "05",
    title: "Priority Roadmap",
    description:
      "Understand what should be addressed now, within 30 days and within 90 days.",
  },
  {
    number: "06",
    title: "Track Improvement",
    description:
      "Reassess and measure how your cyber-security posture changes over time.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#07111f]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* BRAND */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 font-black text-[#07111f]">
              C
            </div>

            <div>
<div className="text-xl font-bold tracking-tight">CyberScoreHub</div>
<div className="text-xs text-slate-400">
  Cyber Security Assessment & Risk Insights
</div>
            </div>
          </div>

          {/* NAVIGATION */}
<nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
  <a
    href="#platform-highlights"
    className="transition hover:text-cyan-300"
  >
    Product
  </a>

  <a
    href="#roi"
    className="transition hover:text-cyan-300"
  >
    Solutions
  </a>

  <a
    href="#how-it-works"
    className="transition hover:text-cyan-300"
  >
    How It Works
  </a>

<a
  href="/methodology"
  className="transition hover:text-cyan-300"
>
  Methodology
</a>

            <a
  href="#pricing"
  className="transition hover:text-cyan-300"
>
  Pricing
</a>
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:text-white sm:block">
              EN | TR
            </button>

            <a
  href="/login"
  className="hidden px-3 py-2 text-sm font-medium text-white transition hover:text-cyan-300 sm:block"
>
  Sign In
</a>
            <button
  onClick={() => {
    window.location.href = "/assessment";
  }}
  className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-[#07111f] transition hover:bg-cyan-300"
>
  Start Free Check
</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          {/* HERO LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Cyber & Connected-Device Security for SMEs
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
Measure Your
<span className="text-cyan-400">Cyber Security Score</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
Assess your cyber security maturity, identify critical risks,
benchmark performance and receive prioritised improvement recommendations.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <StartAssessmentButton
label="Start Free Assessment"
  className="rounded-xl bg-cyan-400 px-6 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
/>
``

              <a
  href="#how-it-works"
  className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10 text-center"
>
  See How It Works
</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span>✓ Plain English</span>
              <span>✓ SME focused</span>
              <span>✓ Evidence-aware</span>
              <span>✓ Cyber + IoT</span>
            </div>
          </div>

          {/* HERO RIGHT - SCORE CARD */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <div className="text-sm text-slate-400">
                  Example CyberScoreHub Assessment
                  </div>

                  <div className="mt-1 font-semibold">ABC Ltd</div>
                </div>

                <div className="rounded-lg bg-amber-400/10 px-3 py-2 text-xs font-bold text-amber-300">
                  ELEVATED EXPOSURE
                </div>
              </div>

              {/* SCORES */}
              <div className="grid gap-4 py-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#0b192a] p-5">
<div className="text-sm text-slate-400">
  CyberScore Rating
</div>


                  <div className="mt-2 text-4xl font-black">
                    71
                    <span className="text-lg text-slate-500">/100</span>
                  </div>

                  <div className="mt-2 text-sm text-cyan-300">
                    Developing posture
                  </div>
                </div>

                <div className="rounded-2xl bg-[#0b192a] p-5">
                  <div className="text-sm text-slate-400">
                    Evidence Confidence
                  </div>

                  <div className="mt-2 text-4xl font-black">
                    68
                    <span className="text-lg text-slate-500">/100</span>
                  </div>

                  <div className="mt-2 text-sm text-emerald-300">
                    Evidence improving
                  </div>
                </div>
              </div>

              {/* DOMAIN SCORES */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Security Domains</h3>

                  <span className="text-xs text-slate-500">
                    Example results
                  </span>
                </div>

                <div className="space-y-4">
                  {domains.map((domain) => (
                    <div key={domain.name}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-slate-300">
                          {domain.name}
                        </span>

                        <span className="font-semibold">
                          {domain.score}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${domain.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRIORITY */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#07111f]/70 p-4">
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Example Priority
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Improve connected-device controls and incident-response
                  readiness before lower-priority improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section
  id="roi"
  className="border-y border-white/10 bg-[#091625]"
>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              More Than a Questionnaire
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From security claims to practical improvement.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              CyberScoreHub is designed to help small businesses understand their
              security posture, understand what they can evidence and identify
              what should be improved first.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="text-sm font-black text-cyan-400">
                  {feature.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* TRUST BAR */}
<section className="border-y border-white/10 bg-[#07111f]">
  <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

    <div className="text-center text-sm uppercase tracking-[0.25em] text-slate-500">
      Framework Inspired
    </div>

    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">

      {[
        "NIST CSF 2.0",
        "CIS Controls",
        "Cyber Essentials",
        "ISO 27001",
        "OWASP",
        "Zero Trust"
      ].map((item) => (
        <div
          key={item}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300"
        >
          {item}
        </div>
      ))}

    </div>

  </div>
</section>
{/* STATS */}
<section className="bg-[#050505]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="grid gap-6 text-center md:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          30+
        </div>
        <div className="mt-2 text-slate-400">
          Security Controls
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          6
        </div>
        <div className="mt-2 text-slate-400">
          Assessment Domains
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          NIST
        </div>
        <div className="mt-2 text-slate-400">
          Framework Alignment
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          PDF
        </div>
        <div className="mt-2 text-slate-400">
          Executive Reports
        </div>
      </div>

    </div>

  </div>
</section>
{/* STATS */}
<section className="bg-[#050505]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="grid gap-6 text-center md:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          30+
        </div>
        <div className="mt-2 text-slate-400">
          Security Controls
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          6
        </div>
        <div className="mt-2 text-slate-400">
          Assessment Domains
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          NIST
        </div>
        <div className="mt-2 text-slate-400">
          Framework Alignment
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-4xl font-black text-cyan-400">
          PDF
        </div>
        <div className="mt-2 text-slate-400">
          Executive Reports
        </div>
      </div>

    </div>

  </div>
</section>
     <section id="how-it-works"></section>
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
             How CyberScoreHub Works
            </div>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Understand. Prioritise. Improve.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              A guided process designed to turn cyber-security information into
              understandable and prioritised actions.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-[70px_220px_1fr] sm:items-center"
              >
                <div className="text-xl font-black text-cyan-400">
                  {step.number}
                </div>

                <div className="font-bold">
                  {step.title}
                </div>

                <div className="text-sm leading-6 text-slate-400">
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORKS */}
      <section className="border-y border-white/10 bg-[#091625]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Framework-Informed Methodology
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            Built around established cybersecurity guidance.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
           CyberScoreHub is designed to map relevant assessment controls against
            established cybersecurity guidance while clearly separating a
            readiness assessment from formal certification.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "NIST CSF 2.0",
              "CIS Controls",
              "Cyber Essentials",
              "Cyber & IoT Controls",
            ].map((framework) => (
              <div
                key={framework}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-semibold text-slate-200"
              >
                {framework}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-xs leading-6 text-slate-500">
           CyberScoreHub is an independent assessment and improvement platform. Framework
            mapping does not constitute certification or endorsement by the
            referenced framework owners.
          </p>
        </div>
      </section>

      {/* CYBER + IOT */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Cyber + Connected Devices
            </div>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Your business may be more connected than you think.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              CyberScoreHub is designed to consider traditional business IT alongside
              connected devices that may form part of your organisation's
              technology environment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              "CCTV",
              "POS",
              "Printers",
              "Access Control",
              "Sensors",
              "Smart Displays",
              "Guest Wi-Fi",
              "Building Systems",
              "Other Devices",
            ].map((device) => (
              <div
                key={device}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm font-semibold text-slate-300"
              >
                {device}
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ROI */}
<section className="border-y border-white/10 bg-[#091625]">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        Why Act Now
      </div>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Small security gaps can become costly business problems.
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Identify weaknesses early, prioritise improvements and build cyber resilience
        before incidents disrupt your operations.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
        <div className="text-4xl">⚠️</div>
        <h3 className="mt-4 text-xl font-bold">
          Unknown Risks
        </h3>
        <p className="mt-3 text-slate-400">
          Critical security gaps often remain hidden until an incident occurs.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
        <div className="text-4xl">🎯</div>
        <h3 className="mt-4 text-xl font-bold">
          Clear Priorities
        </h3>
        <p className="mt-3 text-slate-400">
          Focus first on the controls that reduce the most risk.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
        <div className="text-4xl">📈</div>
        <h3 className="mt-4 text-xl font-bold">
          Continuous Improvement
        </h3>
        <p className="mt-3 text-slate-400">
          Track improvements and strengthen your security posture over time.
        </p>
      </div>

    </div>

  </div>
</section>
      {/* CALL TO ACTION */}
      <section className="border-t border-white/10 bg-[#091625]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-16 sm:px-12">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Start With Clarity
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Know where you're exposed.
              <br />
              Know what to improve first.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Start with a simple cyber check and build a clearer picture of
              your organisation's security posture.
            </p>

            <StartAssessmentButton
  label="Start Free Cyber Check"
  className="mt-8 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
/>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            CyberScoreHub Plans
          </div>

          <h2 className="mt-4 text-3xl font-bold">
            Start free. Go deeper when you need to.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          CyberScoreHub will offer different assessment levels for organisations that
            need greater evidence, analysis, reporting and expert review.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left">
              <div className="text-sm font-bold text-cyan-400">
                QUICK CHECK
              </div>

              <div className="mt-4 text-3xl font-black">
                Free
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                A simple starting point for understanding your organisation's
                assessed cyber-security position.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.05] p-7 text-left">
              <div className="text-sm font-bold text-cyan-400">
                PROFESSIONAL
              </div>

              <div className="mt-4 text-3xl font-black">
                Coming Next
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Deeper assessment, evidence confidence, connected-device
                analysis, roadmap and detailed reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-left">
              <div className="text-sm font-bold text-cyan-400">
                BUSINESS REVIEW
              </div>

              <div className="mt-4 text-3xl font-black">
                Expert
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                A future enhanced service incorporating expert review and
                management-level assessment output.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* PRICING */}
<section
  id="pricing"
  className="border-t border-white/10 bg-[#050c16]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        Pricing
      </div>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Choose Your CyberScoreHub Plan
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-slate-400">
        Start free and upgrade when you need deeper insights.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-cyan-400 font-bold">FREE</div>
        <div className="mt-4 text-5xl font-black">£0</div>

        <ul className="mt-6 space-y-3 text-slate-300">
          <li>✓ Quick Assessment</li>
          <li>✓ CyberScore</li>
          <li>✓ Risk Overview</li>
        </ul>
        <button
  className="mt-8 w-full rounded-xl border border-cyan-400 px-4 py-3 font-bold text-cyan-300"
>
  Coming Soon
</button>
        <button
  onClick={() => {
    window.location.href = "/assessment";
  }}
  className="mt-8 w-full rounded-xl border border-white/20 px-4 py-3 font-bold text-white"
>
  Start Free
</button>
      </div>

      <div className="rounded-2xl border border-cyan-400 bg-cyan-400/10 p-8">
        <div className="text-cyan-300 font-bold">
          PROFESSIONAL
        </div>

        <div className="mt-4 text-5xl font-black">£29</div>

        <ul className="mt-6 space-y-3 text-slate-200">
          <li>✓ Full Assessment</li>
          <li>✓ PDF Report</li>
          <li>✓ Domain Scores</li>
          <li>✓ Roadmap</li>
          <li>✓ Framework Mapping</li>
        </ul>
        <button
  onClick={() => {
    window.location.href = "/assessment";
  }}
  className="mt-8 w-full rounded-xl bg-[#C6FF00] px-4 py-3 font-bold text-[#07111f] transition hover:bg-cyan-300"
>
  Get Started
</button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-cyan-400 font-bold">BUSINESS</div>

        <div className="mt-4 text-5xl font-black">£99</div>

        <ul className="mt-6 space-y-3 text-slate-300">
          <li>✓ Unlimited Assessments</li>
          <li>✓ Team Access</li>
          <li>✓ Trend Tracking</li>
          <li>✓ Historical Reports</li>
        </ul>
      </div>

    </div>
  </div>
</section>
{/* TESTIMONIALS */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        Success Stories
      </div>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Helping Businesses Improve Security
      </h2>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-yellow-400">★★★★★</div>
        <p className="mt-4 text-slate-300">
          CyberScoreHub helped us identify security gaps we didn't know existed.
        </p>
        <div className="mt-6 text-sm text-slate-500">
          Manufacturing SME
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-yellow-400">★★★★★</div>
        <p className="mt-4 text-slate-300">
          The roadmap made it very clear what actions should be prioritised.
        </p>
        <div className="mt-6 text-sm text-slate-500">
          IT Manager
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <div className="text-yellow-400">★★★★★</div>
        <p className="mt-4 text-slate-300">
          A professional assessment experience without enterprise-level costs.
        </p>
        <div className="mt-6 text-sm text-slate-500">
          Business Owner
        </div>
      </div>

    </div>
  </div>
</section>
{/* FAQ */}
<section className="border-t border-white/10 bg-[#091625]">
  <div className="mx-auto max-w-5xl px-6 py-24">

    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        FAQ
      </div>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="mt-12 space-y-6">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="font-bold">
          Is CyberScoreHub a certification?
        </h3>
        <p className="mt-3 text-slate-400">
          No. CyberScoreHub provides an independent assessment and improvement roadmap.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="font-bold">
          How long does the assessment take?
        </h3>
        <p className="mt-3 text-slate-400">
          Most organisations complete the assessment in 15 to 30 minutes.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h3 className="font-bold">
          Can I improve my score over time?
        </h3>
        <p className="mt-3 text-slate-400">
          Yes. You can reassess periodically and track improvement.
        </p>
      </div>

    </div>

  </div>
</section>
{/* PLATFORM HIGHLIGHTS */}
<section
  id="platform-highlights"
  className="border-t border-white/10 bg-[#050505]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

    <div className="text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        Platform Highlights
      </div>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
        Everything You Need In One Place
      </h2>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-3xl">🛡️</div>
        <h3 className="mt-4 font-bold">Cyber Assessment</h3>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-3xl">📊</div>
        <h3 className="mt-4 font-bold">Risk Scoring</h3>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-3xl">📄</div>
        <h3 className="mt-4 font-bold">PDF Reports</h3>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-3xl">🚀</div>
        <h3 className="mt-4 font-bold">Improvement Roadmap</h3>
      </div>

    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050c16]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="font-bold text-slate-200">
                CyberScoreHub
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Cyber Security Assessment Platform
              </div>

              <div className="mt-4 max-w-sm text-xs leading-5 text-slate-600">
                Evidence-aware cyber and connected-device security assessment
                designed for small and medium-sized organisations.
              </div>
            </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-500">

  <a href="/privacy" className="hover:text-cyan-300">
    Privacy
  </a>

  <a href="/terms" className="hover:text-cyan-300">
    Terms
  </a>

  <a href="/methodology" className="hover:text-cyan-300">
    Methodology
  </a>

  <a href="/security" className="hover:text-cyan-300">
    Security
  </a>

  <a href="/contact" className="hover:text-cyan-300">
    Contact
  </a>

</div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-600">
           © 2026 CyberScoreHub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
