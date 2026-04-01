import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Vyplňte všetky polia");
      return;
    }
    toast.success("Správa bola odoslaná!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-gradient">Kontakt</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold">Adresa</p>
                  <p className="text-muted-foreground font-body">Štúrova 22/44, 040 01 Košice, Slovakia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold">Telefón</p>
                  <a href="tel:+421915846918" className="text-muted-foreground font-body hover:text-primary transition-colors">
                    +421 915 846 918
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-body font-semibold">Email</p>
                  <a href="mailto:t2boulder@centrum.sk" className="text-muted-foreground font-body hover:text-primary transition-colors">
                    t2boulder@centrum.sk
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border mt-4">
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

          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Meno"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary transition-colors"
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary transition-colors"
                maxLength={255}
              />
              <textarea
                placeholder="Správa"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body focus:outline-none focus:border-primary transition-colors resize-none"
                maxLength={1000}
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl hover:brightness-110 transition-all glow-orange text-lg"
              >
                Odoslať správu
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
