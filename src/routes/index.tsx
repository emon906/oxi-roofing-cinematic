import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Instagram, Mail, MapPin, Menu, Play, Quote, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

import heroImage from "@/assets/roof-hero.jpg";
import teamImage from "@/assets/roof-team.jpg";
import copperImage from "@/assets/project-copper-valley.jpg";
import lakefrontImage from "@/assets/project-lakefront.jpg";
import stormImage from "@/assets/project-storm.jpg";
import bungalowImage from "@/assets/project-bungalow.jpg";
import beforeImage from "@/assets/roof-before.jpg";
import afterImage from "@/assets/roof-after.jpg";
import { Button } from "@/components/Button";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Oxi Roofing 504 | Premium Metairie Roofing" },
    { name: "description", content: "Premium roof repair, replacement, inspections and storm restoration for Metairie Lakefront and greater Louisiana." },
    { property: "og:title", content: "Oxi Roofing 504 | Built Above the Standard" },
    { property: "og:description", content: "Metairie roofing defined by honest work, refined detail and lasting protection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slider, setSlider] = useState(54);
  const [activeReel, setActiveReel] = useState(1);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  const nav = ["About", "Services", "Projects", "Before / After", "Reels", "Testimonials", "Contact"];
  const navId = (label: string) => label.toLowerCase().replace(" / ", "-").replace(" ", "-");
  const projects = [
    { image: lakefrontImage, title: "Lakefront Standing Seam", type: "Complete roof replacement", text: "A precision metal roofing system designed for exposed lakefront conditions." },
    { image: copperImage, title: "Copper Valley Detail", type: "Architectural shingles", text: "Dimensional shingles finished with hand-detailed copper valleys and flashing." },
    { image: stormImage, title: "After the Storm", type: "Storm damage response", text: "Rapid assessment and a weather-tight repair plan after severe Gulf weather." },
    { image: bungalowImage, title: "Metairie Renewal", type: "Residential replacement", text: "A crisp, durable roof installation that restores the entire home's character." },
  ];
  const reels = [
    { src: "/reels/craft.mp4", label: "On the roof" }, { src: "/reels/detail.mp4", label: "Copper detail" },
    { src: "/reels/lakefront.mp4", label: "Lakefront finish" }, { src: "/reels/finish.mp4", label: "Final reveal" },
  ];

  return (
    <main className="overflow-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-foreground/15 bg-hero/80 text-hero-foreground backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-baseline gap-2 font-display text-2xl font-semibold"><span>OXI</span><span className="text-sm font-sans font-medium text-accent">ROOFING 504</span></a>
          <nav className="hidden items-center gap-6 xl:flex">{nav.map((item) => <a key={item} href={`#${navId(item)}`} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-hero-foreground/70 transition hover:text-hero-foreground">{item}</a>)}</nav>
          <Button asChild variant="light" className="hidden lg:inline-flex"><a href="mailto:oficialoxitmc@gmail.com">Get a quote <ArrowRight size={15}/></a></Button>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center xl:hidden">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="border-t border-hero-foreground/15 bg-hero px-6 py-7 xl:hidden">{nav.map((item) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${navId(item)}`} className="block border-b border-hero-foreground/10 py-3 font-display text-2xl">{item}</a>)}</nav>}
      </header>

      <section id="top" ref={heroRef} className="relative min-h-[900px] h-[100svh] overflow-hidden bg-hero text-hero-foreground">
        <motion.img style={{ y: imageY, scale: 1.08 }} src={heroImage} alt="Luxury lakefront roof with copper accents" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-hero/30" />
        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 pt-28 lg:px-10 lg:pb-20">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-hero-foreground/75"><span className="h-px w-10 bg-accent"/>Metairie Lakefront · Louisiana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }} className="max-w-5xl text-balance font-display text-[clamp(4.2rem,10vw,9.8rem)] font-medium leading-[.75]">Built above<br/><em className="ml-[8vw] text-cream">the standard.</em></motion.h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-hero-foreground/30 pt-7 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-7 text-hero-foreground/75">Roofing shaped by honest work, refined detail, and the experience to protect what matters most.</p>
            <div className="flex flex-wrap gap-3"><Button asChild variant="light"><a href="mailto:oficialoxitmc@gmail.com">Get a quote <ArrowRight size={15}/></a></Button><Button asChild variant="outline"><a href="#projects">View our work <ArrowDown size={15}/></a></Button></div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 border-y border-l border-hero-foreground/20 bg-hero/35 px-5 py-10 backdrop-blur md:block"><p className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[.28em]">Roofing · Repair · Restoration</p></div>
      </section>

      <section id="about" className="px-5 py-24 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal className="relative"><img src={teamImage} alt="Roofing craftsmen inspecting shingles" loading="lazy" width={1408} height={1056} className="aspect-[4/5] w-[88%] object-cover"/><div className="absolute bottom-8 right-0 bg-chocolate px-7 py-8 text-hero-foreground"><span className="block font-display text-5xl">504</span><span className="text-[10px] uppercase tracking-[.2em]">Local knowledge</span></div></Reveal>
          <Reveal className="lg:pl-12"><Eyebrow>About Oxi</Eyebrow><h2 className="mt-7 max-w-3xl font-display text-5xl leading-[.95] md:text-7xl">The difference is in what <em className="text-chocolate-light">others overlook.</em></h2><p className="mt-9 max-w-xl text-base leading-8 text-muted-foreground">Oxi Roofing 504 brings an exacting eye to every roof—from the first inspection to the final clean-up. We believe lasting protection begins with clear communication, sound materials, and workmanship that never cuts corners.</p><div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7 text-sm"><p><Check className="mb-3 text-chocolate"/>Detail-driven execution</p><p><Check className="mb-3 text-chocolate"/>Built for Louisiana weather</p></div></Reveal>
        </div>
      </section>

      <section id="services" className="bg-hero px-5 py-24 text-hero-foreground lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]"><Reveal><Eyebrow>What we do</Eyebrow><div className="mt-7 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="max-w-3xl font-display text-5xl leading-none md:text-7xl">Protection, considered from every angle.</h2><p className="max-w-sm text-sm leading-7 text-hero-foreground/60">Focused roofing solutions with one uncompromising standard of care.</p></div></Reveal>
          <div className="mt-16 grid gap-px bg-hero-foreground/15 lg:grid-cols-12">
            <Service index="01" title="Roof Replacement" text="Complete systems selected and installed for long-term performance." image={lakefrontImage} className="lg:col-span-7"/>
            <Service index="02" title="Roof Repairs" text="Precise repairs that solve the source, not just the symptom." image={copperImage} className="lg:col-span-5"/>
            <Service index="03" title="Storm Damage" text="Clear guidance and responsive restoration after severe weather." image={stormImage} className="lg:col-span-5"/>
            <div className="bg-hero p-8 md:p-12 lg:col-span-7"><div className="grid h-full gap-8 md:grid-cols-2"><div><span className="text-xs text-accent">04</span><h3 className="mt-6 font-display text-4xl">Roof Inspections</h3><p className="mt-4 text-sm leading-7 text-hero-foreground/60">Thorough assessments with straightforward recommendations.</p></div><div className="border-t border-hero-foreground/20 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0"><span className="text-xs text-accent">05</span><h3 className="mt-6 font-display text-4xl">Maintenance</h3><p className="mt-4 text-sm leading-7 text-hero-foreground/60">Proactive care that preserves your roof and your peace of mind.</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1300px]"><Reveal><Eyebrow>Recent projects</Eyebrow><h2 className="mt-6 font-display text-5xl md:text-7xl">Real roofs. Real work.<br/><em className="text-chocolate-light">Built to last.</em></h2></Reveal>
          <div className="mt-16">{projects.map((project, index) => <Project key={project.title} {...project} index={index}/>)}</div>
        </div>
      </section>

      <section id="before-after" className="bg-cream px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]"><Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>Before / After</Eyebrow><h2 className="mt-6 font-display text-5xl md:text-7xl">See the standard,<br/><em className="text-chocolate-light">transformed.</em></h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Drag the handle to see how a careful replacement changes both protection and curb appeal.</p></Reveal>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/8]"><img src={beforeImage} alt="Weathered roof before replacement" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${slider}%` }}><img src={afterImage} alt="New roof after replacement" loading="lazy" width={1600} height={1000} className="h-full max-w-none object-cover" style={{ width: "calc(100vw - 40px)", maxWidth: "1400px" }}/></div><div className="pointer-events-none absolute inset-y-0 w-0.5 bg-hero-foreground" style={{ left: `${slider}%` }}><span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-hero text-hero-foreground shadow-premium"><span className="flex"><ChevronLeft size={17}/><ChevronRight size={17}/></span></span></div><span className="absolute left-5 top-5 bg-hero px-4 py-2 text-[10px] uppercase tracking-[.2em] text-hero-foreground">After</span><span className="absolute right-5 top-5 bg-background px-4 py-2 text-[10px] uppercase tracking-[.2em]">Before</span><input aria-label="Compare before and after roof" type="range" min="0" max="100" value={slider} onChange={(e) => setSlider(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/></Reveal>
        </div>
      </section>

      <section id="reels" className="bg-chocolate py-24 text-hero-foreground lg:py-36">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10"><Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Eyebrow>From the roof</Eyebrow><h2 className="mt-6 font-display text-5xl md:text-7xl">See the real work,<br/><em className="text-cream">straight from the roof.</em></h2></div><div className="flex gap-2"><button aria-label="Previous reel" onClick={() => setActiveReel((activeReel - 1 + reels.length) % reels.length)} className="grid size-12 place-items-center rounded-full border border-hero-foreground/30 hover:bg-hero-foreground/10"><ChevronLeft/></button><button aria-label="Next reel" onClick={() => setActiveReel((activeReel + 1) % reels.length)} className="grid size-12 place-items-center rounded-full border border-hero-foreground/30 hover:bg-hero-foreground/10"><ChevronRight/></button></div></Reveal></div>
        <div className="mt-14 flex touch-pan-y items-center justify-center gap-4 overflow-hidden px-[12vw]" onTouchStart={(e) => { const touch = e.touches.item(0); if (touch) e.currentTarget.dataset["x"] = String(touch.clientX); }} onTouchEnd={(e) => { const touch = e.changedTouches.item(0); if (!touch) return; const start = Number(e.currentTarget.dataset["x"]); const delta = touch.clientX - start; if (Math.abs(delta) > 50) setActiveReel((activeReel + (delta < 0 ? 1 : -1) + reels.length) % reels.length); }}>
          {reels.map((reel, index) => { const active = index === activeReel; return <motion.button key={reel.src} onClick={() => setActiveReel(index)} animate={{ scale: active ? 1 : .84, opacity: active ? 1 : .48 }} className="relative aspect-[9/16] w-[66vw] shrink-0 overflow-hidden rounded-md bg-hero sm:w-[320px]" aria-label={`Show ${reel.label}`}><video src={reel.src} autoPlay muted playsInline loop preload="metadata" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-hero/75 via-transparent to-transparent"/><span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[.16em]"><Play size={13} fill="currentColor"/> {reel.label}</span></motion.button>})}
        </div>
      </section>

      <section id="testimonials" className="px-5 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1200px]"><Reveal className="text-center"><Eyebrow>Testimonials</Eyebrow><h2 className="mt-6 font-display text-5xl md:text-7xl">Real clients. Real trust.<br/><em className="text-chocolate-light">Real experiences.</em></h2></Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-12"><Testimonial className="md:col-span-7 md:rotate-[-1deg]" quote="They treated our home with respect from the first inspection to the final clean-up. Every detail was explained, and the new roof looks exceptional." name="Metairie homeowner"/><Testimonial className="bg-chocolate text-hero-foreground md:col-span-5 md:translate-y-16 md:rotate-[1deg]" quote="Clear, responsive, and meticulous. After the storm, Oxi gave us confidence when we needed it most." name="Lakefront resident"/><Testimonial className="md:col-span-5 md:ml-16" quote="The workmanship speaks for itself. The crew was organized, professional, and left the property spotless." name="Jefferson Parish client"/><Testimonial className="bg-cream md:col-span-7 md:translate-y-8 md:rotate-[-1deg]" quote="We wanted more than a quick fix. Oxi found the underlying issue and built a solution we know will last." name="Local property owner"/></div>
        </div>
      </section>

      <section id="contact" className="bg-hero px-5 py-24 text-hero-foreground lg:px-10 lg:py-36"><div className="mx-auto max-w-[1400px]"><Reveal><Eyebrow>Start a conversation</Eyebrow><h2 className="mt-8 max-w-5xl font-display text-[clamp(4rem,9vw,8.5rem)] leading-[.82]">Your roof deserves<br/><em className="text-accent">a higher standard.</em></h2><div className="mt-14 flex flex-col justify-between gap-10 border-t border-hero-foreground/20 pt-9 md:flex-row md:items-end"><div className="space-y-3 text-sm text-hero-foreground/70"><a className="flex items-center gap-3 hover:text-hero-foreground" href="mailto:oficialoxitmc@gmail.com"><Mail size={17}/> oficialoxitmc@gmail.com</a><p className="flex items-center gap-3"><MapPin size={17}/> Metairie Lakefront, Louisiana</p></div><Button asChild variant="light" className="md:min-w-56"><a href="mailto:oficialoxitmc@gmail.com">Request a quote <ArrowRight size={15}/></a></Button></div></Reveal></div></section>

      <footer className="bg-hero px-5 pb-8 text-hero-foreground lg:px-10"><div className="mx-auto max-w-[1400px] border-t border-hero-foreground/15 pt-10"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><p className="font-display text-3xl">Oxi Roofing 504</p><p className="mt-2 text-xs text-hero-foreground/50">Metairie Lakefront, Louisiana</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-hero-foreground/60">{nav.map(item => <a key={item} href={`#${navId(item)}`} className="hover:text-hero-foreground">{item}</a>)}</div><div className="flex gap-5"><a aria-label="Instagram" href="https://instagram.com/el_oxi_504" target="_blank" rel="noreferrer"><Instagram size={19}/></a><a href="https://tiktok.com/@oxicapivara" target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase">TikTok</a></div></div><p className="mt-16 text-[10px] uppercase tracking-[.16em] text-hero-foreground/35">© 2026 Oxi Roofing 504. Built on craftsmanship.</p></div></footer>
    </main>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <motion.div className={className} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.24em]"><span className="h-px w-9 bg-accent"/>{children}</p>; }
function Service({ image, index, title, text, className }: { image: string; index: string; title: string; text: string; className: string }) { return <Reveal className={`group relative min-h-[480px] overflow-hidden bg-hero ${className}`}><img src={image} alt={title} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70"/><div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/15 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-8 md:p-12"><span className="text-xs text-accent">{index}</span><h3 className="mt-4 font-display text-5xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-hero-foreground/70">{text}</p></div></Reveal>; }
function Project({ image, title, type, text, index }: { image: string; title: string; type: string; text: string; index: number }) { return <motion.article initial={{ opacity: 0, y: 80, scale: .95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .8 }} className="sticky mb-12 overflow-hidden bg-card shadow-premium" style={{ top: `${100 + index * 12}px` }}><div className="grid lg:grid-cols-[1.35fr_.65fr]"><div className="overflow-hidden"><img src={image} alt={title} loading="lazy" width={1200} height={900} className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-[1.03]"/></div><div className="flex flex-col justify-between p-7 md:p-12"><span className="text-xs text-chocolate-light">0{index + 1}</span><div><p className="text-[10px] uppercase tracking-[.18em] text-muted-foreground">{type}</p><h3 className="mt-4 font-display text-4xl md:text-5xl">{title}</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">{text}</p></div></div></div></motion.article>; }
function Testimonial({ quote, name, className = "" }: { quote: string; name: string; className?: string }) { return <Reveal className={`border border-border bg-card p-8 shadow-premium md:p-12 ${className}`}><Quote className="text-accent" size={28}/><blockquote className="mt-7 font-display text-2xl leading-snug md:text-3xl">“{quote}”</blockquote><p className="mt-8 text-[10px] uppercase tracking-[.18em] opacity-60">{name}</p></Reveal>; }
