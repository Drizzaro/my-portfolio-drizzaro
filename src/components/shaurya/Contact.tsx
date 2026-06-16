import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  discord: z.string().trim().max(64).optional().or(z.literal("")),
  projectType: z.string().trim().min(1, "Select a project type").max(60),
  budget: z.string().trim().min(1, "Select a budget").max(40),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

const projectTypes = ["BGMI", "GTA V", "Valorant", "Minecraft", "Other"];
const budgets = ["< $50", "$50 – $150", "$150 – $500", "$500+"];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", discord: "", projectType: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", discord: "", projectType: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Let's Work"
          title={<>Tell me about<br />your next video.</>}
          description="I respond within 12 hours. For quick chats, ping me on Discord or WhatsApp."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <form onSubmit={submit} className="glass-panel relative rounded-3xl p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Name" error={errors.name}>
                <input value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@channel.com" />
              </Field>
              <Field label="Discord (optional)" error={errors.discord}>
                <input value={form.discord} onChange={(e) => update("discord", e.target.value)} className={inputCls} placeholder="username" />
              </Field>
              <Field label="Project Type" error={errors.projectType}>
                <select value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className={inputCls}>
                  <option value="">Select…</option>
                  {projectTypes.map((p) => <option key={p} value={p} className="bg-surface">{p}</option>)}
                </select>
              </Field>
              <Field label="Budget" error={errors.budget}>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputCls}>
                  <option value="">Select…</option>
                  {budgets.map((b) => <option key={b} value={b} className="bg-surface">{b}</option>)}
                </select>
              </Field>
              <Field label="Message" error={errors.message} className="md:col-span-2">
                <textarea rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputCls} placeholder="Tell me about your channel, video idea, and timeline…" />
              </Field>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <button type="submit" className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                Send Message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <span className="text-xs text-white/40">Avg. response: 12 hrs</span>
            </div>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-4 text-sm text-emerald-200"
                >
                  ✓ Message received. I'll get back to you within 12 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="space-y-3">
            <ContactBtn icon="◎" label="Discord" value="drizzaro" href="https://discord.com/users/762706489873399820" />
            <ContactBtn icon="✆" label="Instagram" value="shauryaa.4suree" href="https://www.instagram.com/shauryaa.4suree" />
            <ContactBtn icon="✉" label="Email" value="shauryaa.designss@gmail.com" href="mailto:shauryaa.designss@gmail.com" />
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/45">Currently</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-sm text-white/80">Accepting 3 more clients this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls = "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-black/60";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">{label}</div>
      {children}
      {error && <div className="mt-1.5 text-xs text-red-300/80">{error}</div>}
    </label>
  );
}

function ContactBtn({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group glass-panel flex items-center gap-4 rounded-2xl p-5 transition hover:bg-white/[0.06]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">{label}</div>
        <div className="text-sm text-white">{value}</div>
      </div>
      <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">→</span>
    </a>
  );
}