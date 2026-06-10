import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileSearch,
  LineChart,
  MessageSquare,
  MousePointerClick,
  PieChart,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "@/components/Button";
import { FeatureCard, StepCard, TestimonialCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";

const whatsappLink = "https://wa.me/9779827155905";

const problemPoints = [
  "Boosting posts without a strategy",
  "Running ads without a strong offer",
  "Copying competitors and hoping something works",
  "Sending traffic to weak pages or messy inboxes",
  "Judging ads too early",
  "Stopping campaigns before proper testing",
  "Looking at likes, clicks, and reach instead of leads, bookings, and sales"
];

const quotes = [
  "I tried ads before and they didn't work.",
  "People message 'price?' and disappear.",
  "I need more customers, not just engagement.",
  "Some months are good, some months are terrible.",
  "I want to grow, but I don't understand all this technical stuff."
];

const included = [
  ["Business & Ad Account Audit", "We review your current setup and find the biggest leaks."],
  ["Offer Strategy", "We help position your offer so it is easier for people to understand and respond to."],
  ["Audience Research", "We identify the people most likely to need your product or service."],
  ["Ad Copywriting", "We write clear, simple, persuasive ad copy that speaks to your customer's real pain and desire."],
  ["Creative Direction", "We guide the ad visuals, videos, hooks, and angles that should be tested."],
  ["Campaign Setup", "We build your Meta Ads campaigns properly instead of relying on random boosting."],
  ["Tracking Setup Guidance", "We help you understand what should be tracked so you can judge results properly."],
  ["Lead Form or Landing Page Guidance", "We help improve the path people take after they click your ad."],
  ["Retargeting Campaigns", "We help bring back people who showed interest but did not take action yet."],
  ["Weekly Optimization", "We monitor, adjust, and improve campaigns based on performance."],
  ["Simple Performance Reporting", "No confusing dashboards. Just clear reporting on what matters."],
  ["Lead Follow-Up Recommendations", "Because leads only matter if they are followed up properly."]
];

const objectionItems = [
  {
    question: "I tried ads before and they didn't work.",
    answer:
      "That is common. But in many cases, the issue was not Meta Ads. The issue was the setup: no clear offer, no proper targeting, no strong ad message, no tracking, no retargeting, and no follow-up system. That is why our approach is different. We build the full system around the ads."
  },
  {
    question: "I don't have a huge ad budget.",
    answer:
      "You do not need to start with a huge budget. You need to start with a smart strategy. Many business owners waste money because they spend before fixing the basics. We help you understand what should be fixed first, what to test, and how to avoid careless spending."
  },
  {
    question: "How do I know this will work for my business?",
    answer:
      "We start by looking at your business, your offer, your audience, and your current marketing. That way, you are not buying a generic service. You are getting a clear plan based on where your business is now."
  },
  {
    question: "I don't want fake leads.",
    answer:
      "Neither do we. Cheap leads are not the goal. The goal is to attract better-quality inquiries from people who are more likely to need your product or service. That is why we focus on the offer, message, targeting, creative, and follow-up process."
  },
  {
    question: "I don't have time to manage all this.",
    answer:
      "That is exactly why this service exists. You do not need to become a Meta Ads expert. You need someone to handle the strategy, setup, optimization, and reporting so you can focus on running your business."
  },
  {
    question: "What if the reports look good but sales do not improve?",
    answer:
      "We do not focus only on likes, reach, and clicks. Those numbers can be useful, but they do not pay the bills. We focus on leads, messages, calls, bookings, sales opportunities, and what happens after the lead comes in."
  }
];

const faqItems = [
  {
    question: "What is a Meta Ads audit?",
    answer:
      "It is a clear review of your current ads, boosted posts, offer, audience, tracking, landing path, and follow-up process. The goal is to show what is working, what is leaking money, and what should be fixed first."
  },
  {
    question: "Do I need to already be running ads?",
    answer:
      "No. If you are already running ads, we can audit them. If you are starting fresh, we can review your offer, audience, and customer journey before money is spent."
  },
  {
    question: "Can this work if I only boosted posts before?",
    answer:
      "Yes. Boosted posts are often the first place business owners start. The audit helps show why boosting is different from a real campaign system built around leads, inquiries, bookings, and sales."
  },
  {
    question: "Do I need a big ad budget?",
    answer:
      "No. You need a budget that matches your goals, market, and offer. We help you make smarter decisions before spending more."
  },
  {
    question: "Will you manage the ads for me?",
    answer:
      "Yes, the system can include campaign setup, management, optimization, tracking guidance, reporting, and improvement based on what your business needs."
  },
  {
    question: "Can you help with ad copy and creative direction?",
    answer:
      "Yes. Clear copy, strong hooks, and useful creative direction are part of the system because the ad message matters as much as the campaign setup."
  },
  {
    question: "Do you help with lead follow-up?",
    answer:
      "Yes. Leads are only valuable when they are followed up properly. We help identify simple ways to respond faster, qualify better, and avoid losing serious prospects."
  },
  {
    question: "How do I get started?",
    answer:
      "Book your free Meta Ads audit or message on WhatsApp. We will look at where you are now and show you the clearest next step."
  }
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function CTAButtons({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
      <Button href="#audit-form">Get Leads Now</Button>
      <Button href={whatsappLink} variant="secondary" icon="whatsapp">
        Message Us on WhatsApp
      </Button>
    </div>
  );
}

function HeroDashboard() {
  const metrics = [
    ["Qualified Leads", "47", "+18%"],
    ["Real Inquiries", "31", "+12%"],
    ["Bookings", "14", "+9%"],
    ["Sales Opportunities", "22", "+15%"],
    ["Ad Spend Clarity", "Clear", "Tracked"]
  ];

  return (
    <div
      aria-label="Example Meta Ads performance dashboard showing qualified leads, real inquiries, bookings, sales opportunities, and ad spend clarity"
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Example dashboard
          </p>
          <h2 className="mt-1 text-xl font-bold text-slate-950">Lead Growth Snapshot</h2>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          Live clarity
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {metrics.map(([label, value, change]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">{label}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <span className="text-2xl font-bold text-slate-950">{value}</span>
              <span className="text-xs font-semibold text-blue-700">{change}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg bg-slate-950 p-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-300">Budget visibility</span>
          <span className="text-sm font-bold">Examples only</span>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-300" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_34%),linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                Predictable Lead Growth System for Facebook and Instagram
              </p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Stop Boosting Posts That Get Likes But No Customers
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
                Turn Facebook and Instagram into a predictable customer-generating system
                that brings real inquiries, qualified leads, bookings, and sales.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                We help business owners replace random posting, weak boosted ads, and
                guesswork with a complete Meta Ads system built to attract people who are
                actually ready to buy.
              </p>
              <div className="mt-8">
                <CTAButtons />
                <p className="mt-4 text-sm font-medium text-slate-500">
                  No pressure. No confusing jargon. Just a clear look at what is working
                  and what is not.
                </p>
              </div>
            </div>
            <HeroDashboard />
          </div>
        </section>

        <Section id="problem" className="bg-white">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
                If this sounds familiar, you are not alone.
              </p>
              <div className="mt-6 space-y-5 text-xl leading-9 text-slate-700">
                <p>You post on Facebook and Instagram. You boost a few posts. You get some likes, comments, and maybe a few messages.</p>
                <p>But when you check the real result...</p>
                <p className="font-semibold text-slate-950">No serious buyers. No consistent bookings. No clear return. No idea what is working.</p>
                <p>And the worst part?</p>
                <p>You know your business is good. You know your product or service can help people. But not enough people are seeing it, trusting it, or buying from you.</p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">What usually happens</h2>
              <ul className="mt-5 grid gap-4">
                {["Likes but no customers", "Messages that disappear", "Weak lead quality", "Unclear return", "Random monthly sales"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="size-5 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section className="bg-slate-50">
          <SectionHeading
            title={`The problem is not that Meta Ads "don't work."`}
            description="The problem is that most businesses are using them the wrong way."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 aria-hidden="true" className="mb-4 size-5 text-blue-600" />
                <h3 className="text-base font-semibold leading-7 text-slate-950">{item}</h3>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-slate-700">
            That is why it feels like you are spending money but not moving forward.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {quotes.map((quote) => (
              <div key={quote} className="rounded-lg border border-blue-100 bg-white p-5 text-sm font-semibold leading-7 text-slate-700 shadow-sm">
                &quot;{quote}&quot;
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-slate-950 p-8 text-center text-white">
            <p className="text-xl font-semibold">This is exactly why you do not need &quot;just ads.&quot;</p>
            <p className="mt-2 text-3xl font-bold">You need a system.</p>
          </div>
        </Section>

        <Section id="system" className="bg-white">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              align="left"
              eyebrow="Solution"
              title="Introducing The Predictable Lead Growth System"
              description="A complete Meta Ads system designed to help business owners get more qualified leads, inquiries, bookings, calls, or online sales from Facebook and Instagram."
            />
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>We do not just run ads. We help build the full customer journey.</p>
              <p>That means we look at your offer, audience, ad message, creative, campaign setup, tracking, retargeting, and follow-up process.</p>
              <p>Because ads alone do not grow a business. A working system does.</p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-950">The goal is simple:</p>
                <p className="mt-2 text-blue-900">To help you stop guessing and start knowing what is bringing customers into your business.</p>
              </div>
              <CTAButtons />
            </div>
          </div>
        </Section>

        <Section id="process" className="bg-slate-50">
          <SectionHeading title="How The System Works" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <StepCard step="Step 1" title="We Audit What You Are Doing Now" icon={FileSearch}>
              First, we look at your current marketing, ads, boosted posts, offer, audience, landing page or lead form, follow-up process, and results. We find where things are breaking. No guessing. No confusing jargon.
            </StepCard>
            <StepCard step="Step 2" title="We Build Your Growth Strategy" icon={Target}>
              Next, we create a simple campaign roadmap. We decide what offer to promote, who to target, what message to use, what type of creative to test, where leads should go, how to track results, and how to follow up.
            </StepCard>
            <StepCard step="Step 3" title="We Launch Your Meta Ads System" icon={MousePointerClick}>
              Then we set up and manage your campaigns across Facebook and Instagram. This can include lead generation campaigns, message campaigns, retargeting, creative testing, and tracking setup.
            </StepCard>
            <StepCard step="Step 4" title="We Track, Optimize, and Improve" icon={LineChart}>
              Once your campaigns are live, we monitor the numbers, check lead quality, test new creatives, adjust campaigns, and show you what is happening in simple reports.
            </StepCard>
          </div>
        </Section>

        <Section className="bg-white">
          <SectionHeading title="What This Can Help You Do" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Get More Qualified Inquiries" icon={Users}>Not just random likes or people asking for discounts. The goal is to attract people who understand your offer and are more likely to become customers.</FeatureCard>
            <FeatureCard title="Stop Depending Only on Referrals" icon={RefreshCcw}>Referrals are great, but they are not predictable. With the right Meta Ads system, your business can start building a steadier pipeline of prospects.</FeatureCard>
            <FeatureCard title="Know What Is Actually Working" icon={PieChart}>No more wondering whether your posts, ads, or budget are helping. You get simple reporting that shows what is bringing leads, inquiries, bookings, or sales.</FeatureCard>
            <FeatureCard title="Feel More in Control of Growth" icon={ShieldCheck}>You should not have to wake up every day hoping business will be good. The goal is to create a system that gives you more clarity, confidence, and control.</FeatureCard>
            <FeatureCard title="Spend Smarter, Not Randomly" icon={TrendingUp}>We help you avoid wasting money on boosted posts, weak offers, unclear targeting, and campaigns with no tracking.</FeatureCard>
          </div>
        </Section>

        <Section className="bg-slate-50">
          <SectionHeading title="The Predictable Lead Growth System Includes" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map(([title, copy]) => (
              <FeatureCard key={title} title={title}>
                {copy}
              </FeatureCard>
            ))}
          </div>
        </Section>

        <Section className="bg-white">
          <SectionHeading title="Included Bonuses" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Bonus 1: Meta Ads Leak Audit" icon={ClipboardCheck} highlighted>We identify what may be causing wasted spend, poor lead quality, or low conversions.</FeatureCard>
            <FeatureCard title="Bonus 2: Offer Clarity Review" icon={Sparkles} highlighted>Many businesses do not have an ad problem. They have an offer problem. We help review your offer so people instantly understand why they should contact you.</FeatureCard>
            <FeatureCard title="Bonus 3: Lead Follow-Up Checklist" icon={MessageSquare} highlighted>Getting leads is only the first step. We give you a simple checklist to help your team respond faster, qualify better, and avoid losing interested prospects.</FeatureCard>
            <FeatureCard title={'Bonus 4: "Boost Post vs Real Campaign" Breakdown'} icon={BarChart3} highlighted>You will understand why boosted posts often bring likes instead of customers, and what a proper campaign should do differently.</FeatureCard>
          </div>
        </Section>

        <Section id="results" className="bg-slate-50">
          <SectionHeading title="Real Businesses Need Real Results" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <FeatureCard title="Case Study Placeholder" icon={BadgeCheck}>How we helped a local service business move from random boosted posts to a structured lead generation campaign that brought steady inquiries.</FeatureCard>
            <FeatureCard title="Lead Quality Placeholder" icon={Users}>Before working with us, most inquiries were people asking only for price. After improving the offer, targeting, and follow-up process, the business started receiving more serious conversations.</FeatureCard>
            <FeatureCard title="Booking Growth Placeholder" icon={Clock3}>A clinic, coach, restaurant, boutique, real estate agent, or service provider can use this section to show more bookings, inquiries, or sales after implementing the system.</FeatureCard>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <TestimonialCard>Before this, I was boosting posts and hoping something would happen. Now I understand what is working, where my leads are coming from, and what to improve next.</TestimonialCard>
            <TestimonialCard>The biggest difference was clarity. I finally knew why my ads were not converting and what needed to be fixed.</TestimonialCard>
          </div>
          <p className="mt-6 text-center text-sm font-medium text-slate-500">
            Replace these with your real case studies, screenshots, and testimonials when available.
          </p>
        </Section>

        <Section className="bg-white">
          <SectionHeading title="Still Wondering If This Is Right For You?" />
          <div className="mt-12">
            <FAQAccordion items={objectionItems} />
          </div>
        </Section>

        <Section className="bg-slate-950 text-white">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Risk reversal</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Start With Clarity Before Spending More</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Before asking you to spend more money on ads, we first help you understand what is currently broken. That is why the first step is a Meta Ads audit.</p>
              <div className="mt-8">
                <Button href="#audit-form">Reserve Your Spot</Button>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="font-semibold text-white">You will get a clear view of:</p>
              <ul className="mt-5 grid gap-4 text-slate-300">
                {["What is leaking money", "What needs to be fixed", "What opportunities are being missed", "What kind of system your business needs"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 text-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-300">No pressure. No confusing jargon. No vague promises. Just a clear plan to help you make a smarter decision.</p>
            </div>
          </div>
        </Section>

        <Section className="bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <ArrowUpRight aria-hidden="true" className="size-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              If Your Ads Are Already Wasting Money, Waiting Will Not Fix It
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every month you continue guessing, you may be losing leads to competitors who have a better system.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              If your current marketing is bringing likes but not customers, now is the time to find out why.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We only take a limited number of businesses at a time because proper campaign setup, testing, and optimization require attention.
            </p>
            <p className="mt-4 text-lg font-semibold leading-8 text-slate-950">
              So if you want help building a more predictable lead system, start with the audit.
            </p>
          </div>
        </Section>

        <Section id="faq" className="bg-slate-50">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </Section>

        <Section id="audit-form" className="bg-[linear-gradient(180deg,#eff6ff,#ffffff)]">
          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">Free audit</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Ready To Stop Guessing And Start Growing With A Clear Meta Ads System?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Fill out the short audit form. After you submit it, you will be redirected to WhatsApp so we can continue the conversation directly.
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
