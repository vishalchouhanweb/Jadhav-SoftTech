import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const HERO_HEADING = "Your Technology Partner for Building, Scaling, and Growing";

const STATS = [
  { value: 2025, from: 2000, suffix: "", label: "Founded" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

const HOW_WE_WORK = [
  { n: "01", title: "Understand", text: "We start by learning your business goals, current setup and the exact skills or solution you need." },
  { n: "02", title: "Match & Plan", text: "We shortlist the right professionals or design the right technical approach, with clear timelines and scope." },
  { n: "03", title: "Build & Deploy", text: "Our developers integrate with your team or deliver the solution end to end, with regular, transparent updates." },
  { n: "04", title: "Support & Scale", text: "After delivery we stay involved, helping you scale the team or the product as your needs grow." },
];

const VALUES = [
  { title: "Quality", text: "Every hire and every line of code is held to a high standard.", img: "/about/value-quality.jpg" },
  { title: "Transparency", text: "Clear communication, honest timelines and no hidden surprises.", img: "/about/value-transparency.jpg" },
  { title: "Trust", text: "We earn long-term partnerships by delivering what we promise.", img: "/about/value-trust.jpg" },
  { title: "Growth", text: "We grow alongside our clients and keep learning new technologies.", img: "/about/value-growth.jpg" },
];

const WHY_US = [
  "Pre-vetted technology professionals across 60+ skills",
  "Flexible engagement: contract, dedicated team or full project",
  "Direct interviews with candidates before you hire",
  "Dedicated support from onboarding to delivery",
];

const JOURNEY = [
  { year: "2025", title: "The Beginning", img: "/about/journey-1.jpg",
    text: "Jadhav SoftTech began with a small team of two people and a clear vision: to help businesses access the right technology expertise, embrace emerging technologies such as AI, and use technology to support their growth." },
  { year: "2025", title: "Building the Foundation", img: "/about/journey-2.jpg",
    text: "As our vision started taking shape, we expanded our team from 2 to 8 professionals. This growth helped us strengthen our capabilities, broaden our technology expertise, and better support our clients' evolving needs." },
  { year: "2025", title: "Earning Trust", img: "/about/journey-3.jpg",
    text: "By successfully delivering projects and providing skilled resources for client requirements, we began earning the trust of our clients. The successful completion of projects and contract engagements became the foundation for long-term relationships and continued collaboration." },
  { year: "2026", title: "Growing Stronger", img: "/about/journey-4.jpg",
    text: "In 2026, Jadhav SoftTech continued its growth by welcoming experienced professionals and strengthening its leadership team. From a team of 2 in 2025 to 15+ professionals in 2026, we continue to expand our expertise, capabilities, and commitment to delivering greater value to our clients." },
];

// Purani list yahan daalo + doc ke naye 4 countries
const COUNTRIES = ["India", "United States", "United Kingdom", "UAE", "Australia",
  "South Africa", "Belgium", "Switzerland", "Canada"];

export default function About() {
  const root = useRef(null);
  const magnetRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // HERO: words reveal + video parallax
        gsap.from(".ab-hero__word", {
          yPercent: 110, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.06, delay: 0.2,
        });
        gsap.from(".ab-hero__sub, .ab-hero__tag", {
          y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.7,
        });
        gsap.to(".ab-hero__video", {
          yPercent: 20, scale: 1.1, ease: "none",
          scrollTrigger: { trigger: ".ab-hero", start: "top top", end: "bottom top", scrub: true },
        });

        // FOUNDER: image clip reveal + text stagger
        gsap.fromTo(".ab-founder__img",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut",
            scrollTrigger: { trigger: ".ab-founder", start: "top 70%" } });
        gsap.from(".ab-founder__text > *", {
          y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".ab-founder", start: "top 70%" },
        });

        // generic stagger for cards / headings
        gsap.utils.toArray(".ab-reveal-group").forEach((group) => {
          gsap.from(group.querySelectorAll(".ab-reveal"), {
            y: 60, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 80%" },
          });
        });

        // JOURNEY: line draw + cards slide
        gsap.fromTo(".ab-journey__progress",
          { scaleY: 0 },
          { scaleY: 1, ease: "none",
            scrollTrigger: { trigger: ".ab-journey__list", start: "top 60%", end: "bottom 60%", scrub: true } });
        gsap.utils.toArray(".ab-journey__item").forEach((item, i) => {
          gsap.from(item, {
            x: i % 2 === 0 ? -80 : 80, opacity: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 80%" },
          });
        });

        // GLOBAL REACH chips
        gsap.from(".ab-chip", {
          scale: 0.6, opacity: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.05,
          scrollTrigger: { trigger: ".ab-reach", start: "top 75%" },
        });
      });

      // COUNTERS (reduced motion me bhi final value dikhegi)
      gsap.utils.toArray(".ab-stat__num").forEach((el) => {
        const end = Number(el.dataset.value);
        const obj = { v: Number(el.dataset.from || 0) };
        gsap.to(obj, {
          v: end, duration: 2, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v) + (el.dataset.suffix || ""); },
        });
      });
    }, root);

    // 3D tilt on cards
    const cards = root.current.querySelectorAll(".ab-tilt");
    const onMove = (e) => {
      const c = e.currentTarget, r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(c, { rotateY: x * 10, rotateX: -y * 10, duration: 0.4, ease: "power2.out", transformPerspective: 800 });
    };
    const onLeave = (e) => gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
    cards.forEach((c) => { c.addEventListener("mousemove", onMove); c.addEventListener("mouseleave", onLeave); });

    // Magnetic CTA button
    const btn = magnetRef.current;
    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
    const mMove = (e) => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const mLeave = () => { xTo(0); yTo(0); };
    btn.addEventListener("mousemove", mMove);
    btn.addEventListener("mouseleave", mLeave);

    return () => {
      cards.forEach((c) => { c.removeEventListener("mousemove", onMove); c.removeEventListener("mouseleave", onLeave); });
      btn.removeEventListener("mousemove", mMove);
      btn.removeEventListener("mouseleave", mLeave);
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <main className="ab" ref={root}>
      {/* 1. HERO */}
      <section className="ab-hero">
        <video className="ab-hero__video" src="/about/about-hero.mp4" poster="/about/about-hero.jpg" autoPlay muted loop playsInline />
        <div className="ab-hero__overlay" />
        <div className="ab-container ab-hero__content">
          <span className="ab-hero__tag">About Jadhav SoftTech</span>
          <h1 className="ab-hero__title">
            {HERO_HEADING.split(" ").map((w, i) => (
              <span className="ab-hero__mask" key={i}><span className="ab-hero__word">{w}&nbsp;</span></span>
            ))}
          </h1>
          <p className="ab-hero__sub">
            Jadhav SoftTech helps businesses build innovative digital solutions and access skilled technology
            talent. From software development and digital transformation to IT staff augmentation, we bring the
            right expertise to help you move faster.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER */}
      <section className="ab-section ab-founder">
        <div className="ab-container ab-founder__grid">
          <div className="ab-founder__text">
            <span className="ab-eyebrow">From Our Founder</span>
            <h2 className="ab-h2">The right talent. The right technology. The right solution, to build the perfect software and products.</h2>
            <p>
              I believe that bringing the right people, with the right expertise, to the right project, along with
              a transparent approach, is the foundation of every successful outcome. Our vision is to connect
              businesses with the talent and technology they need, whether through skilled professionals,
              dedicated teams, or end-to-end software solutions.
            </p>
            <p>
              Through quality, service, transparency, and trust, we strive to build long-term partnerships and
              grow alongside our clients.
            </p>
          </div>
          <div className="ab-founder__img">
            <img src="/about/founder.png" alt="Founder of Jadhav SoftTech" />
          </div>
        </div>
      </section>

      {/* 3. MISSION + STATS */}
      <section className="ab-section ab-mission">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">Our Mission</span>
          <h2 className="ab-h2 ab-reveal">Helping businesses build better, hire smarter and scale faster.</h2>
          <div className="ab-stats">
            {STATS.map((s) => (
              <div className="ab-stat ab-reveal" key={s.label}>
                <span className="ab-stat__num" data-value={s.value} data-from={s.from || 0} data-suffix={s.suffix}>
                  {s.value}{s.suffix}
                </span>
                <span className="ab-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="ab-section">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">How We Work</span>
          <h2 className="ab-h2 ab-reveal">A simple, transparent process</h2>
          <div className="ab-grid4">
            {HOW_WE_WORK.map((s) => (
              <div className="ab-card ab-tilt ab-reveal" key={s.n}>
                <span className="ab-card__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section className="ab-section">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">Our Values</span>
          <h2 className="ab-h2 ab-reveal">What we stand for</h2>
          <div className="ab-grid4">
            {VALUES.map((v) => (
              <div className="ab-value ab-tilt ab-reveal" key={v.title}>
                <img src={v.img} alt="" />
                <div className="ab-value__body"><h3>{v.title}</h3><p>{v.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY JADHAV SOFTTECH */}
      <section className="ab-section">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">Why Jadhav SoftTech</span>
          <h2 className="ab-h2 ab-reveal">Built for teams that need to move fast</h2>
          <ul className="ab-why">
            {WHY_US.map((w) => <li className="ab-reveal" key={w}>{w}</li>)}
          </ul>
        </div>
      </section>

      {/* 8. JOURNEY */}
      <section className="ab-section ab-journey">
        <div className="ab-container">
          <div className="ab-reveal-group">
            <span className="ab-eyebrow ab-reveal">Our Journey</span>
            <h2 className="ab-h2 ab-reveal">From 2 people to 15+ professionals</h2>
          </div>
          <div className="ab-journey__list">
            <div className="ab-journey__line"><div className="ab-journey__progress" /></div>
            {JOURNEY.map((j, i) => (
              <div className={`ab-journey__item ${i % 2 ? "is-right" : ""}`} key={j.title}>
                <span className="ab-journey__dot" />
                <div className="ab-journey__card">
                  <img src={j.img} alt="" />
                  <span className="ab-journey__year">{j.year}</span>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. GLOBAL REACH */}
      <section className="ab-section ab-reach">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">Global Reach</span>
          <h2 className="ab-h2 ab-reveal">Serving clients across the world</h2>
          <div className="ab-chips">
            {COUNTRIES.map((c) => <span className="ab-chip" key={c}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="ab-section ab-cta">
        <div className="ab-container ab-reveal-group">
          <span className="ab-eyebrow ab-reveal">Let's Build Together</span>
          <h2 className="ab-cta__title ab-reveal">Let's Build Your Next Technology Success Story</h2>
          <p className="ab-reveal">Whether you need a skilled technology professional or a complete engineering team, we're ready to help.</p>
          <Link to="/contact" className="ab-btn" ref={magnetRef}>Talk to an Expert</Link>
        </div>
      </section>
    </main>
  );
}