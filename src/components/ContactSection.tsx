import { useState } from "react";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Vyplňte všetky polia");
      return;
    }

    setSending(true);
    try {
      const mailtoBody = `Meno: ${form.name}\nEmail: ${form.email}\n\nSpráva:\n${form.message}`;
      const mailtoLink = `mailto:t2boulder@centrum.sk?subject=${encodeURIComponent(`Správa z webu od ${form.name}`)}&body=${encodeURIComponent(mailtoBody)}`;
      window.location.href = mailtoLink;
      toast.success("Otváram emailového klienta...");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Niečo sa pokazilo, skúste to znova");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-gradient">Kontakt</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold">Adresa</p>
                  <p className="text-muted-foreground font-body text-sm sm:text-base">Štúrova 22/44, 040 01 Košice, Slovakia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold">Telefón</p>
                  <a href="tel:+421915846918" className="text-muted-foreground font-body hover:text-primary transition-colors">
                    +421 915 846 918
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold">Email</p>
                  <a href="mailto:t2boulder@centrum.sk" className="text-muted-foreground font-body hover:text-primary transition-colors">
                    t2boulder@centrum.sk
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.facebook.com/T2boulder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/t2_boulder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </motion.a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border mt-4 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.5!2d21.2573!3d48.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQzJzAwLjEiTiAyMcKwMTUnMjYuMyJF!5e0!3m2!1ssk!2ssk!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa T2 Boulder Arena Košice"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Meno"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm sm:text-base"
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-sm sm:text-base"
                maxLength={255}
              />
              <textarea
                placeholder="Správa"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-sm text-sm sm:text-base"
                maxLength={1000}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={sending}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:brightness-110 transition-all glow-orange text-base sm:text-lg shadow-lg disabled:opacity-60"
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Odosielam...
                  </span>
                ) : (
                  "Odoslať správu"
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
