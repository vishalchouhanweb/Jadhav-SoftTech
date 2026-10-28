import { useEffect, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import {
  ArrowRight, ArrowLeft, CheckCircle2, Globe, Smartphone, Building2,
  ShoppingCart, Plug, Headset, Lightbulb, FileText, Code2, Settings, Rocket,
} from 'lucide-react';
import ParticleButton from '../components/ui/ParticleButton';
import {
  SOFTWARE_SERVICES,
  SOFTWARE_PROCESS,
  getSoftwareService,
} from '../data/softwareServicesData';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Globe, Smartphone, Building2, ShoppingCart, Plug, Headset,
  Lightbulb, FileText, Code2, Settings, Rocket,
};

export default function SoftwareServiceDetail() {
  const { serviceId } = useParams();
  const service = getSoftwareService(serviceId);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!service) return;
    const ctx = gsap.context(() => {
      gsap.from('.sd-reveal', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.utils.toArray('.sd-feature').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 92%' },
          opacity: 0,
          x: -16,
          duration: 0.55,
          delay: i * 0.05,
          ease: 'power2.out',
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, [service]);

  if (!service) return <Navigate to="/our-services" replace />;

  const Icon = ICON_MAP[service.icon] || Code2;
  const others = SOFTWARE_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div ref={rootRef} className="relative min-h-screen bg-brand-bg text-brand-text overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[50vmin] h-[50vmin] rounded-full bg-brand-accent/12 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[40vmin] h-[40vmin] rounded-full bg-[#7a4fa0]/20 blur-[90px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <Link
            to="/our-services"
            className="sd-reveal mb-8 inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-accent transition"
          >
            <ArrowLeft size={16} /> Our Services
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="sd-reveal mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/10 text-brand-accent">
                <Icon size={26} />
              </div>
              <h1 className="sd-reveal font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
                {service.name}
              </h1>
              <p className="sd-reveal text-lg text-brand-text-muted max-w-2xl leading-relaxed mb-8">
                {service.short}
              </p>
              <p className="sd-reveal text-brand-text-muted/90 max-w-2xl mb-10">
                {service.processFocus}
              </p>
              <div className="sd-reveal flex flex-wrap gap-4">
                <ParticleButton href="/contact">
                  Start This Project
                  <ArrowRight size={16} />
                </ParticleButton>
                <Link to="/our-services#process" className="btn-kdm btn-kdm-outline">
                  See Our Process
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 sd-reveal">
              <div className="rounded-2xl border border-brand-border bg-brand-surface/50 p-6 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-accent mb-4">
                  Stack highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 font-display text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-20 border-t border-brand-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {service.features.map((f) => (
              <div
                key={f}
                className="sd-feature flex items-start gap-3 rounded-xl border border-brand-border/70 bg-brand-surface/30 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-accent" size={18} />
                <span className="text-sm leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared process strip */}
      <section className="relative py-16 md:py-20 process-section">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-center">
            How we deliver
          </h2>
          <p className="text-center text-brand-text-muted mb-12 max-w-xl mx-auto text-sm">
            Every engagement follows the same transparent path — adapted to your product and timeline.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {SOFTWARE_PROCESS.map((step) => {
              const StepIcon = ICON_MAP[step.icon] || Code2;
              return (
                <div key={step.num} className="text-center">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-surface/50 text-brand-accent">
                    <StepIcon size={18} />
                  </div>
                  <p className="font-mono text-[10px] text-brand-accent mb-1">{step.num}</p>
                  <p className="font-display text-sm font-semibold mb-1">{step.title}</p>
                  <p className="text-xs text-brand-text-muted leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="relative py-16 border-t border-brand-border/40">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="font-display text-xl font-semibold mb-6">Related software services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((s) => {
              const OIcon = ICON_MAP[s.icon] || Code2;
              return (
                <Link
                  key={s.id}
                  to={s.href}
                  className="group rounded-xl border border-brand-border bg-brand-surface/30 p-5 transition hover:border-brand-accent/40"
                >
                  <OIcon size={18} className="mb-3 text-brand-accent" />
                  <p className="font-display text-sm font-semibold group-hover:text-brand-accent transition-colors">
                    {s.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Ready to start with {service.name.split(' ')[0]}?
          </h2>
          <p className="text-brand-text-muted mb-8 max-w-md mx-auto">
            Tell us about your product goals — we&apos;ll respond with a clear plan and timeline.
          </p>
          <ParticleButton href="/contact">
            Talk to Jadhav SoftTech
            <ArrowRight size={16} />
          </ParticleButton>
        </div>
      </section>
    </div>
  );
}
