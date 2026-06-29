"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

const metiers = [
  { label: "Avocats", href: "/avocats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [metiersOpen, setMetiersOpen] = useState(false);
  const [metiersMobileOpen, setMetiersMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="/"
          className="text-lg font-semibold tracking-widest2 text-foreground"
          aria-label="OlympeAI — accueil"
        >
          O<span className="text-foreground-alt">l</span>y
          <span className="text-foreground-alt">m</span>p
          <span className="text-foreground-alt">e</span>AI
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {/* Dropdown Métiers */}
          <li
            className="relative"
            onMouseEnter={() => setMetiersOpen(true)}
            onMouseLeave={() => setMetiersOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm text-foreground-alt transition-colors hover:text-foreground"
              aria-expanded={metiersOpen}
            >
              Métiers
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  metiersOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {metiersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="min-w-[160px] rounded-xl border border-border-strong bg-card p-1.5 shadow-xl">
                    {metiers.map((m) => (
                      <a
                        key={m.href}
                        href={m.href}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground-alt transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        {m.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground-alt transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-border-strong bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03] md:inline-block"
        >
          Réserver un appel
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-subtle bg-black md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {/* Métiers accordion mobile */}
              <li>
                <button
                  onClick={() => setMetiersMobileOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-base text-foreground-alt"
                >
                  Métiers
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      metiersMobileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {metiersMobileOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2">
                        {metiers.map((m) => (
                          <a
                            key={m.href}
                            href={m.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-foreground-alt transition-colors hover:text-foreground"
                          >
                            {m.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-foreground-alt transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
                >
                  Réserver un appel
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
