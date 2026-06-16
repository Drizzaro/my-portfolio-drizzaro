import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { categories } from "./data";

export function Categories() {
  return (
    <section id="categories" className="relative z-10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Categories"
          title={<>Specialized in the games<br />creators are winning with.</>}
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#work"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-72 md:h-96 overflow-hidden rounded-3xl border border-white/10 bg-surface"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1280}
                height={736}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
              <div className="absolute inset-0 rounded-3xl ring-0 ring-white/0 transition-all group-hover:ring-1 group-hover:ring-white/30 group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.3)]" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <div className="font-display text-3xl md:text-5xl font-semibold">{c.name}</div>
                  <div className="mt-2 text-sm text-white/55">{c.subtitle}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl md:text-3xl">{c.count}+</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">Projects</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur transition-transform group-hover:rotate-45">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}