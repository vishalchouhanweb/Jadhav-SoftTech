import { useEffect, useRef, useState } from "react";
import {
  motion, AnimatePresence, useScroll, useTransform, useMotionValue,
  useMotionValueEvent, useMotionTemplate, useInView,
} from "framer-motion";
import {
  Briefcase, FolderCheck, MessageSquare, Cpu, Layers, Check, Award, ChevronLeft, ChevronRight,
} from "lucide-react";
import theme from "./showcaseTheme";

const DURATION = 8000;          // ek dev = 8 sec
const IDLE_AFTER_INPUT = 1200;  // user input ke baad auto-play resume
const DRAW_END = 0.75;          // border kitne time me poori bane
const NAV_SPACE = "7rem";       // fixed navbar ke liye upar jagah (desktop)
const LINE = "#d8b4fe";
const pad = (n) => String(n).padStart(2, "0");
const OUTLINE_FILTER = [
  `drop-shadow(2px 0 0 ${LINE})`, `drop-shadow(-2px 0 0 ${LINE})`,
  `drop-shadow(0 2px 0 ${LINE})`, `drop-shadow(0 -2px 0 ${LINE})`,
  `drop-shadow(0 0 3px rgba(216,180,254,0.8))`,
].join(" ");

/* ---------------- helpers ---------------- */
function useIsMobile() {
  const q = "(max-width: 1023px)";
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const f = (e) => setM(e.matches);
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  return m;
}

// prog (0..n) se active dev, local progress aur border clip
function useDerived(prog, n) {
  const [active, setActive] = useState(0);
  const [local, setLocal] = useState(0);
  useMotionValueEvent(prog, "change", (v) => {
    const i = Math.min(Math.floor(v), n - 1);
    setActive(i);
    setLocal(Math.round((v - i) * 60) / 60);
  });
  const localMV = useTransform(prog, (v) => v - Math.floor(v));
  const hideRight = useTransform(localMV, [0, DRAW_END], [100, 0]);
  const clip = useMotionTemplate`inset(-6% ${hideRight}% 0% -6%)`;
  return { active, local, localMV, clip };
}

function RatingBar({ label, value, fill, Icon }) {
  return (
    <div className="min-w-[130px] flex-1">
      <div className="mb-2 flex items-center justify-between text-xs text-white/60">
        <span className="flex items-center gap-1.5"><Icon size={14} className="text-purple-300" />{label}</span>
        <span className="text-white">{value.toFixed(1)}/5</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-500 transition-[width] duration-300"
             style={{ width: `${(value / 5) * 100 * fill}%` }} />
      </div>
    </div>
  );
}

function DevImage({ src, imageDir, alt, clip }) {
  const fallback = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${imageDir}/placeholder.svg`; };
  return (
    <div className="relative h-full">
      <motion.img src={src} onError={fallback} alt="" aria-hidden draggable={false}
        style={{ filter: OUTLINE_FILTER, clipPath: clip }}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
      <img src={src} onError={fallback} alt={alt} draggable={false}
        className="pointer-events-none relative h-full w-auto select-none object-contain" />
    </div>
  );
}

function DevDetails({ d, local, localMV, compact }) {
  const reveal = Math.min(1, local * 1.6);
  const visible = Math.max(1, Math.ceil(reveal * d.stack.length));
  return (
    <>
      <h3 className={`${compact ? "text-xl" : "text-2xl"} text-white ${theme.nameFont || "font-semibold"}`}>{d.name}</h3>
      <p className={`text-purple-300 ${compact ? "text-sm" : ""}`}>{d.role}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80 sm:text-sm">
        {d.experience && (
          <span className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
            <Briefcase size={14} className="text-purple-300" />{d.experience} Years
          </span>
        )}
        {d.highlight && (
          <span className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5">
            <FolderCheck size={14} className="text-purple-300" />{d.highlight}
          </span>
        )}
      </div>

      <p className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40">
        <Layers size={13} /> Domain Expertise
      </p>
      <p className={`mt-1.5 text-sm text-white/70 ${compact ? "line-clamp-2" : ""}`}>{d.domain.join(" · ")}</p>

      <p className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40">
        <Cpu size={13} /> Core Tech Stack
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {d.stack.map((s, i) => (
          <motion.span key={i}
            animate={i < visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.12, scale: 0.9, y: 6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[11px] text-white sm:px-3 sm:text-xs">
            <Check size={12} className="text-purple-300" />{s}
          </motion.span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-5">
        {typeof d.communication === "number" && <RatingBar label="Communication" value={d.communication} fill={reveal} Icon={MessageSquare} />}
        {typeof d.technical === "number" && <RatingBar label="Technical" value={d.technical} fill={reveal} Icon={Cpu} />}
        {d.badges?.map((b) => (
          <span key={b} className="flex items-center gap-1.5 text-xs text-white/80">
            <Award size={14} className="text-purple-300" />{b}
          </span>
        ))}
      </div>

      <div className="mt-5 h-[2px] overflow-hidden rounded-full bg-white/10">
        <motion.div style={{ scaleX: localMV }} className="h-full origin-left bg-purple-400" />
      </div>
    </>
  );
}

function Header({ eyebrow, title, highlight, description, compact }) {
  return (
    <>
      <span className={theme.eyebrow || "inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-white/70"}>
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400 align-middle" />{eyebrow}
      </span>
      <h2 className={theme.h2 || "mt-5 text-3xl font-bold text-white md:text-4xl"}>
        {title} <span className={theme.h2Accent || "font-light italic text-purple-300"}>{highlight}</span>
      </h2>
      {description && (
        <p className={`${theme.body || "mt-3 max-w-xl text-sm text-white/55"} ${compact ? "line-clamp-3" : "line-clamp-2"}`}>{description}</p>
      )}
    </>
  );
}

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

/* ---------------- FIT BOX: content lamba ho to scale down ---------------- */
function FitBox({ children }) {
  const outer = useRef(null);
  const inner = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const calc = () => {
      if (!outer.current || !inner.current) return;
      const avail = outer.current.clientHeight;
      const need = inner.current.scrollHeight;   // transform layout ko affect nahi karta
      setScale(need > avail ? Math.max(0.55, avail / need) : 1);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(outer.current);
    ro.observe(inner.current);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={outer} className="flex h-full w-full items-center overflow-hidden">
      <div ref={inner} className="w-full" style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}>
        {children}
      </div>
    </div>
  );
}

/* ---------------- DESKTOP: header normal scroll, card + image pinned ---------------- */
function DesktopShowcase({ data }) {
  const { devs, imageDir } = data;
  const n = devs.length;
  const ref = useRef(null);
  const prog = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    prog.set(Math.min(Math.max(v, 0) * n, n - 0.0001));
  });

  useEffect(() => {
    let lastInput = 0, pos = null, raf, last = performance.now();
    const mark = () => { lastInput = performance.now(); pos = null; };
    const evs = ["wheel", "touchstart", "touchmove", "keydown", "mousedown"];
    evs.forEach((e) => window.addEventListener(e, mark, { passive: true }));
    const tick = (t) => {
      const dt = Math.min(t - last, 100);
      last = t;
      const el = ref.current;
      if (el && !document.hidden && t - lastInput > IDLE_AFTER_INPUT) {
        const r = el.getBoundingClientRect();
        const range = el.offsetHeight - window.innerHeight;
        const pinned = r.top <= 1 && r.bottom >= window.innerHeight - 1;
        const end = r.top + window.scrollY + range;
        if (pinned && range > 0 && window.scrollY < end - 2) {
          if (pos === null) pos = window.scrollY;
          pos = Math.min(pos + (range / n) * (dt / DURATION), end - 1);
          window.scrollTo({ top: pos, behavior: "instant" });
        } else {
          pos = null;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      evs.forEach((e) => window.removeEventListener(e, mark));
    };
  }, [n]);

  const s = useDerived(prog, n);
  const d = devs[s.active] ?? devs[0];

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 pt-24">
        <Header {...data} />
      </div>

      <section ref={ref} className="relative" style={{ height: `${Math.max(n, 2) * 70}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden pb-6" style={{ paddingTop: NAV_SPACE }}>
          <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2 gap-16 px-6">
            <FitBox>
              <AnimatePresence mode="wait">
                <motion.div key={s.active} {...fade}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                  <DevDetails d={d} local={s.local} localMV={s.localMV} />
                </motion.div>
              </AnimatePresence>
            </FitBox>

            <div className="relative flex max-h-[500px] items-end justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={s.active} className="h-full"
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                  <DevImage src={`${imageDir}/${pad(s.active + 1)}.png`} imageDir={imageDir} alt={d.name} clip={s.clip} />
                </motion.div>
              </AnimatePresence>
              <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2">
                {devs.map((_, i) => (
                  <span key={i} className={`w-1.5 rounded-full transition-all duration-300 ${i === s.active ? "h-8 bg-purple-400" : "h-1.5 bg-white/25"}`} />
                ))}
              </div>
              <div className="absolute bottom-2 left-2 z-20 font-mono text-sm text-white/50">
                <span className="text-lg text-white">{pad(s.active + 1)}</span> / {pad(n)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- MOBILE: swipe card + auto-play ---------------- */
function MobileShowcase({ data }) {
  const { devs, imageDir } = data;
  const n = devs.length;
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const prog = useMotionValue(0);
  const lastInput = useRef(0);

  useEffect(() => {
    if (!inView) return;
    let raf, last = performance.now();
    const tick = (t) => {
      const dt = Math.min(t - last, 100);
      last = t;
      if (t - lastInput.current > IDLE_AFTER_INPUT && !document.hidden) {
        prog.set((prog.get() + dt / DURATION) % n);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, n, prog]);

  const s = useDerived(prog, n);
  const d = devs[s.active] ?? devs[0];
  const touch = () => { lastInput.current = performance.now(); };
  const go = (dir) => { prog.set((((s.active + dir) % n) + n) % n); touch(); };
  const goTo = (i) => { prog.set(i); touch(); };
  const startX = useRef(null);
  const onTouchStart = (e) => { startX.current = e.touches[0]?.clientX ?? null; touch(); };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
    startX.current = null;
    if (dx < -50) go(1);
    else if (dx > 50) go(-1);
  };

  return (
    <section ref={ref} className="relative px-5 py-16 sm:px-8">
      <Header {...data} compact />

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
        <div
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
          style={{ touchAction: "pan-y" }}
          className="relative flex h-[300px] items-end justify-center bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.25),transparent_70%)] pt-6 sm:h-[380px]"
        >
          <AnimatePresence mode="wait">
            <motion.div key={s.active} className="h-full"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <DevImage src={`${imageDir}/${pad(s.active + 1)}.png`} imageDir={imageDir} alt={d.name} clip={s.clip} />
            </motion.div>
          </AnimatePresence>
          <div className="absolute left-4 top-4 font-mono text-xs text-white/50">
            <span className="text-base text-white">{pad(s.active + 1)}</span> / {pad(n)}
          </div>
          <span className="absolute right-4 top-4 text-[10px] uppercase tracking-widest text-white/40">Swipe</span>
        </div>

        <div className="min-h-[360px] border-t border-white/10 p-5">
          <AnimatePresence mode="wait">
            <motion.div key={s.active} {...fade}>
              <DevDetails d={d} local={s.local} localMV={s.localMV} compact />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => go(-1)} aria-label="Previous developer"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 active:scale-95">
          <ChevronLeft size={18} />
        </button>
        <div className="flex flex-wrap justify-center gap-1.5 px-3">
          {devs.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Developer ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === s.active ? "w-6 bg-purple-400" : "w-1.5 bg-white/25"}`} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next developer"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 active:scale-95">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default function DeveloperShowcase({ data }) {
  const isMobile = useIsMobile();
  if (!data?.devs?.length) return null;
  return isMobile ? <MobileShowcase data={data} /> : <DesktopShowcase data={data} />;
}
