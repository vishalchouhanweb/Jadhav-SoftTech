import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import {
  ArrowRight, Globe, Smartphone, Building2, ShoppingCart, Plug, Headset,
  Lightbulb, FileText, Code2, Settings, Rocket, CheckCircle2, Calendar,
} from 'lucide-react';
import ParticleButton from '../components/ui/ParticleButton';
import {
  SOFTWARE_SERVICES,
  SOFTWARE_PROCESS,
  SOFTWARE_CASE_STUDIES,
  SOFTWARE_TECH,
} from '../data/softwareServicesData';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Globe, Smartphone, Building2, ShoppingCart, Plug, Headset,
  Lightbulb, FileText, Code2, Settings, Rocket,
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function OurServices() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.os-hero-line', {
        yPercent: 110,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: 'power4.out',
        delay: 0.15,
      });
      gsap.from('.os-hero-sub', { opacity: 0, y: 24, duration: 0.9, delay: 0.55, ease: 'power3.out' });
      gsap.from('.os-hero-cta', { opacity: 0, y: 20, duration: 0.8, delay: 0.75, ease: 'power3.out' });
      gsap.from('.os-float-card', {
        opacity: 0,
        scale: 0.85,
        y: 30,
        duration: 0.9,
        stagger: 0.08,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.os-service-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: (i % 3) * 0.08,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray('.os-step').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          opacity: 0,
          y: 32,
          duration: 0.65,
          delay: i * 0.07,
          ease: 'power3.out',
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden bg-brand-bg text-brand-text">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Ambient nebula glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[70vmin] h-[70vmin] rounded-full bg-brand-accent/15 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[55vmin] h-[55vmin] rounded-full bg-[#7a4fa0]/25 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full bg-brand-accent/[0.04] blur-[80px]" />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(216,180,226,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(216,180,226,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/10 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-accent">
                  Software Development
                </span>
              </div>

              <h1 className="font-display font-bold tracking-tight leading-[1.05] mb-6">
                <span className="block overflow-hidden">
                  <span className="os-hero-line block text-[2.2rem] sm:text-[2.9rem] md:text-[3.4rem] lg:text-[3.85rem]">
                    Custom Software
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="os-hero-line block text-[2.2rem] sm:text-[2.9rem] md:text-[3.4rem] lg:text-[3.85rem]">
                    Development for
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="os-hero-line block text-[2.2rem] sm:text-[2.9rem] md:text-[3.4rem] lg:text-[3.85rem] text-brand-accent">
                    Real Business Growth.
                  </span>
                </span>
              </h1>

              <p className="os-hero-sub max-w-xl text-base sm:text-lg md:text-xl text-brand-text-muted font-body leading-relaxed mb-10">
                We design, develop and scale high-performance software solutions tailored to your
                unique business needs. From idea to deployment, Jadhav SoftTech turns vision into
                products that ship.
              </p>

              <div className="os-hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <ParticleButton href="/contact">
                  Start Your Project
                  <ArrowRight size={16} />
                </ParticleButton>
                <a
                  href="#process"
                  className="btn-kdm btn-kdm-outline inline-flex items-center gap-2"
                >
                  <Calendar size={16} />
                  Book a Free Consultation
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-brand-text-muted">
                {[
                  ['50+', 'Projects Delivered'],
                  ['98%', 'Client Satisfaction'],
                  ['24/7', 'Support'],
                  ['On-Time', 'Delivery'],
                ].map(([v, l]) => (
                  <div key={l} className="flex items-center gap-2.5">
                    <span className="font-display font-semibold text-brand-accent">{v}</span>
                    <span className="opacity-70">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating capability cards (right) */}
            <div className="lg:col-span-5 relative hidden lg:block h-[420px]">
              <div className="absolute inset-0 rounded-[2rem] border border-brand-accent/15 bg-gradient-to-br from-brand-accent/10 via-transparent to-[#7a4fa0]/10 backdrop-blur-sm" />
              {[
                { label: 'Clean Code', icon: Code2, top: '8%', left: '8%' },
                { label: 'Scalable', icon: Rocket, top: '12%', right: '10%' },
                { label: 'Modern Architecture', icon: Settings, bottom: '28%', left: '6%' },
                { label: 'Secure', icon: CheckCircle2, bottom: '18%', right: '12%' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="os-float-card absolute z-10 flex items-center gap-3 rounded-2xl border border-brand-accent/20 bg-brand-surface/80 px-4 py-3 shadow-[0_0_40px_rgba(216,180,226,0.12)] backdrop-blur-md"
                    style={{
                      top: item.top,
                      left: item.left,
                      right: item.right,
                      bottom: item.bottom,
                      animation: `floatVertical ${4 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                      <Icon size={18} />
                    </div>
                    <span className="font-display text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
              {/* Decorative rings */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-accent/10" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-accent/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,180,226,0.07),transparent_55%)]" />
        <div className="container relative mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
              Our Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight mb-4">
              Complete Software Development Services
            </h2>
            <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed">
              End-to-end software development services to help you build, launch and scale digital
              products that create real impact.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOFTWARE_SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] || Code2;
              return (
                <Link
                  key={svc.id}
                  to={svc.href}
                  className="os-service-card group relative flex flex-col rounded-2xl border border-brand-border/80 bg-brand-surface/40 p-6 md:p-7 transition-all duration-500 hover:border-brand-accent/40 hover:bg-brand-surface/70 hover:shadow-[0_0_50px_rgba(216,180,226,0.12)]"
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-accent transition-transform duration-400 group-hover:scale-110 group-hover:bg-brand-accent/20">
                      <Icon size={22} />
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-border text-brand-text-muted transition-all duration-300 group-hover:border-brand-accent group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-brand-accent transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed flex-1">{svc.short}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {svc.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-brand-border/60 bg-brand-bg/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14101C]/80 to-transparent" />
        <div className="container relative mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Your Technology Partner for Long-Term Success
              </h2>
              <p className="text-brand-text-muted text-base sm:text-lg leading-relaxed mb-8">
                We combine technical expertise, industry experience and a client-first approach to
                deliver software solutions that drive measurable results.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  ['Experienced Team', 'Skilled developers with proven industry experience.'],
                  ['Tailored Solutions', 'Custom solutions designed for your unique goals.'],
                  ['Transparent Process', 'Clear communication at every stage.'],
                  ['Scalable & Future-Ready', 'Built to grow with your business.'],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-xl border border-brand-border/70 bg-brand-surface/30 p-4"
                  >
                    <h4 className="font-display text-sm font-semibold mb-1 text-brand-accent">{t}</h4>
                    <p className="text-xs text-brand-text-muted leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-brand-bg transition hover:bg-white hover:shadow-[0_0_30px_rgba(216,180,226,0.35)]"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[4/3] rounded-3xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/15 via-brand-surface to-[#7a4fa0]/20 p-1 shadow-[0_0_80px_rgba(216,180,226,0.15)]">
                  <div className="h-full w-full rounded-[1.35rem] bg-brand-bg/80 flex items-center justify-center overflow-hidden">
                    <div className="grid grid-cols-2 gap-3 p-6 w-full">
                      {['Web Apps', 'Mobile', 'Enterprise', 'E-Commerce'].map((label, i) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-brand-accent/15 bg-brand-surface/60 p-4 backdrop-blur-sm"
                          style={{ animation: `floatVertical ${5 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                        >
                          <div className="mb-3 h-2 w-10 rounded-full bg-brand-accent/40" />
                          <div className="h-2 w-full rounded-full bg-white/10 mb-1.5" />
                          <div className="h-2 w-2/3 rounded-full bg-white/10 mb-3" />
                          <span className="font-display text-xs font-medium text-brand-accent">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-4 rounded-2xl border border-brand-accent/25 bg-brand-surface/90 px-4 py-3 shadow-xl backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-accent mb-0.5">Focus</p>
                  <p className="font-display text-sm font-semibold">Production-grade builds</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section id="process" className="relative py-24 md:py-32 process-section">
        <div className="container relative mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center mb-16">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
              Our Process
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight mb-4">
              From Idea to Impact
            </h2>
            <p className="text-brand-text-muted text-base sm:text-lg">
              A simple, transparent and efficient development process to bring your vision to life.
            </p>
          </motion.div>

          <div className="relative">
            {/* connector line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden lg:block h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {SOFTWARE_PROCESS.map((step) => {
                const Icon = ICON_MAP[step.icon] || Code2;
                return (
                  <div key={step.num} className="os-step relative text-center lg:text-left">
                    <div className="mx-auto lg:mx-0 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-surface/60 text-brand-accent shadow-[0_0_30px_rgba(216,180,226,0.15)]">
                      <Icon size={22} />
                    </div>
                    <p className="mb-1 font-mono text-[11px] text-brand-accent/80">{step.num}</p>
                    <h3 className="font-display text-base font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-brand-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TECH ═══════════ */}
      <section className="relative py-20 border-y border-brand-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
              Technologies We Work With
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Modern Technologies for Modern Solutions
            </h2>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {SOFTWARE_TECH.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 rounded-xl border border-brand-border/70 bg-brand-surface/40 px-4 py-2.5 transition hover:border-brand-accent/40 hover:bg-brand-surface/70"
              >
                <span className="h-2 w-2 rounded-full bg-brand-accent/70" />
                <span className="font-display text-sm font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CASE STUDIES ═══════════ */}
      <section className="relative py-24 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div {...fadeUp}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
                Case Studies
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Real Projects. Real Results.
              </h2>
              <p className="mt-2 text-brand-text-muted max-w-lg">
                A look at the software solutions we&apos;ve built for our clients.
              </p>
            </motion.div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-display font-medium text-brand-accent hover:underline"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SOFTWARE_CASE_STUDIES.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-surface/40 transition hover:border-brand-accent/35"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-accent/20 via-[#7a4fa0]/15 to-brand-bg relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="h-16 w-24 rounded-lg border border-white/20 bg-white/5" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-brand-accent/30 bg-brand-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-accent backdrop-blur">
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-brand-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed mb-4">{c.desc}</p>
                  <Link
                    to={c.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent"
                  >
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-24 overflow-hidden cta-section">
        <div className="cta-bg" aria-hidden>
          <div className="cta-bg-orb cta-bg-orb-1" />
          <div className="cta-bg-orb cta-bg-orb-2" />
          <div className="cta-bg-orb cta-bg-orb-3" />
          <div className="cta-bg-grid" />
          <div className="cta-bg-noise" />
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-accent">
              Let&apos;s Build Together
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Have a Software Project in Mind?
            </h2>
            <p className="text-brand-text-muted text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s turn your idea into a powerful digital solution. Get a free consultation and
              expert advice from the Jadhav SoftTech team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <ParticleButton href="/contact">
                Start Your Project
                <ArrowRight size={16} />
              </ParticleButton>
              <a href="/contact" className="btn-kdm btn-kdm-outline">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
