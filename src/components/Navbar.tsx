import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import t2Logo from "@/assets/t2-logo.png";
import { serviceLinks } from "@/data/services";

const links = [
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Cenník", href: "#pricing" },
  { label: "Galéria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const useDarkText = scrolled || location.pathname.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src={t2Logo} alt="T2 Boulder Arena logo" className="h-8 sm:h-10 w-auto" />
          <span className={`font-display text-lg sm:text-xl tracking-wider transition-colors ${
              useDarkText ? "text-foreground" : "text-white"
            }`}>
            T2 BOULDER ARENA
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) =>
            l.label === "Služby" ? (
              <div key={l.href} className="relative group">
                <Link
                  to={{ pathname: "/", hash: l.href }}
                  className={`font-body text-base font-medium transition-colors hover:text-primary ${
                    useDarkText ? "text-foreground/80" : "text-white/90"
                  }`}
                >
                  {l.label}
                </Link>
                <div className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-3xl border border-border bg-white p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 group-hover:pointer-events-auto shadow-xl">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-foreground/90 hover:bg-muted hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                to={{ pathname: "/", hash: l.href }}
                className={`font-body text-base font-medium transition-colors hover:text-primary ${
                  useDarkText ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${useDarkText ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={{ pathname: "/", hash: l.href }}
                  className={`font-body text-lg ${useDarkText ? "text-foreground/80" : "text-white/90"} hover:text-primary transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-border pt-3">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block font-body text-lg text-foreground/80 hover:text-primary transition-colors py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
