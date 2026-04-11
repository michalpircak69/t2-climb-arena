import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import t2Logo from "@/assets/t2-logo.png";
import { serviceLinks } from "@/data/services";

type NavLinkItem = {
  label: string;
  href?: string;
  to?: string;
};

const links: NavLinkItem[] = [
  { label: "O nás", href: "#about" },
  { label: "Služby", href: "#services" },
  { label: "Udalosti", href: "#events" },
  { label: "Daruj 2% pre T2", to: "/daruj-2-percenta-pre-t2" },
  { label: "Cenník", href: "#pricing" },
  { label: "Galéria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const useDarkText =
    scrolled || location.pathname.startsWith("/services/") || location.pathname === "/daruj-2-percenta-pre-t2";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (item: NavLinkItem, className: string, onClick?: () => void) => {
    if (item.to) {
      return (
        <Link key={item.to} to={item.to} className={className} onClick={onClick}>
          {item.label}
        </Link>
      );
    }

    return (
      <Link key={item.href} to={{ pathname: "/", hash: item.href }} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-card/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src={t2Logo} alt="T2 Boulder Arena logo" className="h-8 w-auto sm:h-10" />
          <span
            className={`font-display text-lg tracking-wider transition-colors sm:text-xl ${
              useDarkText ? "text-foreground" : "text-white"
            }`}
          >
            T2 BOULDER ARENA
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((item) =>
            item.label === "Služby" ? (
              <div key={item.label} className="group relative">
                {renderNavLink(
                  item,
                  `font-body text-base font-medium transition-colors hover:text-primary ${
                    useDarkText ? "text-foreground/80" : "text-white/90"
                  }`,
                )}
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-3xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-muted hover:text-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              renderNavLink(
                item,
                `font-body text-base font-medium transition-colors hover:text-primary ${
                  useDarkText ? "text-foreground/80" : "text-white/90"
                }`,
              )
            ),
          )}
        </div>

        <button
          className={`md:hidden ${useDarkText ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-md md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 py-4">
              {links.map((item) =>
                renderNavLink(
                  item,
                  `font-body text-lg transition-colors hover:text-primary ${
                    useDarkText ? "text-foreground/80" : "text-white/90"
                  }`,
                  () => setOpen(false),
                ),
              )}
              <div className="border-t border-border pt-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block py-2 font-body text-lg text-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {service.label}
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
