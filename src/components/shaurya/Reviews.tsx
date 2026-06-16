import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { reviews } from "./data";

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="glass-panel mx-3 w-[340px] shrink-0 rounded-2xl p-6">
      <div className="text-yellow-200/90 tracking-widest text-sm">★★★★★</div>
      <p className="mt-4 text-sm text-white/75 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="text-sm font-medium text-white">{r.name}</div>
        <div className="text-xs text-white/45">{r.niche}</div>
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = reviews;
  const row2 = [...reviews].reverse();
  return (
    <section id="reviews" className="relative z-10 py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client Reviews"
          title={<>Trusted by creators<br />who care about growth.</>}
        />
      </div>

      <div className="mt-16 space-y-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee duration={50}>
          {row1.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
        <Marquee duration={60} reverse>
          {row2.map((r, i) => <Card key={i} r={r} />)}
        </Marquee>
      </div>
    </section>
  );
}

function Marquee({ children, duration, reverse }: { children: React.ReactNode; duration: number; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <div className="flex">{children}</div>
        <div className="flex" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}