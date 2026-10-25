import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import DecorativeBackground from '../ui/DecorativeBackground';
import RibbonDecorations from '../ui/RibbonDecorations';
import SushCarousel from '../ui/SushCarousel';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'HRMS Platform',
    category: 'HRMS Solution',
    description: 'A human resource management system that brings employee records, attendance and HR workflows into one place.',
    image: '/images/success/1_hrms.jpg',
    tags: ['HRMS', 'Web App', 'Automation'],
  },
  {
    id: 2,
    title: 'Ticket Booking Platform',
    category: 'Booking Platform',
    description: 'An online ticket booking platform built for smooth, reliable reservations.',
    image: '/images/success/2_ticket.jpg',
    tags: ['Booking', 'Web App', 'Realtime'],
  },
  {
    id: 3,
    title: 'AI Car Industry Leads',
    category: 'AI Software',
    description: 'AI software that analyses automotive industry data to surface qualified leads.',
    image: '/images/success/3_ai_car.jpg',
    tags: ['AI', 'Data', 'Lead Generation'],
  },
  {
    id: 4,
    title: 'Real-Time Power BI Dashboards',
    category: 'Business Intelligence',
    description: 'Power BI dashboards that show live business data so teams can decide faster.',
    image: '/images/success/4_powerbi.jpg',
    tags: ['Power BI', 'Dashboards', 'Realtime'],
  },
  {
    id: 5,
    title: 'Manufacturing CRM',
    category: 'CRM Application',
    description: 'A CRM application that manages every module of a manufacturing business end to end.',
    image: '/images/success/5_crm.jpg',
    tags: ['CRM', 'Manufacturing', 'All Modules'],
  },
];

// Total cinematic distance: full carousel rotation + content transitions
const PIN_END = '+=700%';

const SelectedWork = () => {
  const sectionRef = useRef(null);
  const desktopRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const desktop = desktopRef.current;
    const stage = stageRef.current;
    if (!section || !desktop || !stage) return undefined;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.portfolio-panel', desktop);
      const markers = gsap.utils.toArray('.portfolio-marker', desktop);

      gsap.set(panels, { autoAlpha: 0, y: 42 });
      gsap.set(markers, { backgroundColor: 'rgba(255,255,255,0.22)' });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(markers[0], { backgroundColor: '#D8B4E2' });

      // Single ScrollTrigger drives the entire cinematic sequence
      // — the carousel animation AND the project content transitions
      // share the same progress (0..1), so the next section can only
      // appear once the pin releases at progress === 1.
      ScrollTrigger.create({
        trigger: desktop,
        pin: stage,
        start: 'top top',
        end: PIN_END,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });

      // Foreground panel transitions (content)
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: desktop,
          start: 'top top',
          end: PIN_END,
          scrub: 0.6,
        },
      });

      timeline.to({}, { duration: 1 });
      projects.forEach((project, index) => {
        if (index === 0) return;
        const point = `project-${index}`;
        timeline
          .to(panels[index - 1], { autoAlpha: 0, y: -42, duration: 0.45 }, point)
          .to(markers[index - 1], { backgroundColor: 'rgba(255,255,255,0.22)', duration: 0.25 }, point)
          .to(panels[index], { autoAlpha: 1, y: 0, duration: 0.55 }, point)
          .to(markers[index], { backgroundColor: '#D8B4E2', duration: 0.25 }, point)
          .to({}, { duration: 1 });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="selected-work-section relative overflow-hidden text-white">
      <DecorativeBackground type="glow" color="brand-accent" position="top-right" opacity="opacity-15" />
      <RibbonDecorations orbs />

      {/* DESKTOP — cinematic carousel */}
      <div ref={desktopRef} className="hidden lg:block">
        <div ref={stageRef} className="relative h-screen">
          {/* Cinematic 3D carousel as the section's visual focus */}
          <div className="absolute inset-0 z-0">
            <SushCarousel
              images={projects.map((project) => project.image)}
              darkness={0.45}
              backgroundColor="#0a090d"
              rotationSpeed={28.27}
              progressRef={progressRef}
            />
          </div>

          {/* Foreground content layer */}
          <div className="container relative z-10 mx-auto flex h-full flex-col px-6 pb-14 pt-32 md:px-12 md:pt-40">
            <div className="flex items-end justify-between border-b border-white/10 pb-7">
              <div>
                <div className="section-title-kdm mb-10">
                  <h2 className="text-[2rem] font-display font-bold leading-[1.05] text-brand-text md:text-[2.5rem] lg:text-[3.2rem]">Success Stories</h2>
                </div>
                <h3 className="max-w-5xl text-[2.25rem] font-display font-bold leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">Featured <span className="italic font-light text-brand-accent">Projects.</span></h3>
                <p className="mt-10 max-w-3xl text-lg font-body leading-relaxed text-white/70 md:text-xl lg:text-2xl">Five success stories — scroll through the carousel.</p>
              </div>
              <span className="hidden pb-1 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-white/55 xl:block">Success stories</span>
            </div>

            <div className="mt-8 grid min-h-0 flex-1 grid-cols-12 gap-10">
              <div className="relative col-span-5 flex min-h-0 flex-col justify-end">
                {projects.map((project) => (
                  <article key={project.id} className="portfolio-panel absolute inset-0 flex flex-col justify-end pb-2" aria-label={`Project ${project.id}: ${project.title}`}>
                    <div className="mb-4 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-brand-accent"><span>0{project.id}</span><span className="h-px w-10 bg-brand-accent/60" /><span className="text-white/70">{project.category}</span></div>
                    <h3 className="max-w-xl text-[2.4rem] font-display font-bold leading-[0.98] xl:text-[3.4rem]">{project.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 xl:text-base">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/75">{tag}</span>)}</div>
                    <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-3 border-b border-brand-accent/50 pb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-accent transition-colors hover:text-white">Explore case study <ArrowUpRight size={15} /></a>
                  </article>
                ))}
                <div className="absolute bottom-0 left-0 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] text-white/70">{projects.map((project, index) => <React.Fragment key={project.id}><span>0{project.id}</span><span className="portfolio-marker h-1.5 w-1.5 rounded-full" />{index < projects.length - 1 && <span className="mx-1 h-px w-10 bg-white/15" />}</React.Fragment>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET — horizontal scroll carousel */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="mb-12 sm:mb-14 border-b border-white/10 pb-6 sm:pb-8">
            <div className="section-title-kdm mb-6"><h2 className="text-[2rem] font-display font-bold leading-[1.05] text-brand-text md:text-[2.5rem]">Success Stories</h2></div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold leading-[1.02] tracking-[-0.02em] text-brand-text md:text-5xl">Featured <span className="italic font-light text-brand-accent">Projects.</span></h3>
            <p className="mt-6 max-w-md text-base sm:text-lg font-body leading-relaxed text-white/70">Five success stories — built to deliver.</p>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="relative -mx-4 sm:-mx-6">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 sm:px-6" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              {projects.map((project) => (
                <article key={project.id} className="group shrink-0 w-[85vw] sm:w-[60vw] snap-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(216,180,226,0.08)]">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 font-mono text-xs text-brand-accent">PROJECT 0{project.id}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                  </div>
                  <div className="mt-5 px-2">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-accent">{project.category}</p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold leading-tight group-hover:text-brand-accent transition-colors duration-300">{project.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/70 text-sm sm:text-base">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-wider text-white/65 group-hover:border-brand-accent/50 transition-colors duration-300">{tag}</span>
                      ))}
                    </div>
                    <a href="#contact" className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-accent hover:gap-3 transition-all duration-300 min-h-[44px]">
                      Explore <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-brand-accent/30" />
              ))}
            </div>
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <a href="#work" className="btn-kdm btn-kdm-primary">
              View All Projects
              <span className="btn-kdm-icon"><ArrowRight size={16} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
