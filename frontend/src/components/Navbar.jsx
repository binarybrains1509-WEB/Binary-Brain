
import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logoIcon from "../assets/logo-icon.jpeg";
import ServiceMegaMenu from "./ServiceMegaMenu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Students", href: "#students", hasMenu: true },
  { label: "Business", href: "#business", hasMenu: true },
  { label: "Projects", href: "#recent-projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenQuote }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const openMenuAfterHover = (label) => {
    clearHoverTimeout();
    setOpenMenu(label);
  };

  const closeMenuAfterHover = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      hoverTimeoutRef.current = null;
    }, 3000);
  };

  /* ========================================
     SCROLL DETECTION
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearHoverTimeout();
    };
  }, []);

  /* ========================================
     CLOSE MENUS OUTSIDE
  ======================================== */

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        clearHoverTimeout();
        setOpenMenu(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearHoverTimeout();
        setOpenMenu(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ========================================
     TOGGLE MENU
  ======================================== */

  const toggleMenu = (label) => {
    clearHoverTimeout();
    setOpenMenu((current) =>
      current === label ? null : label
    );
  };

  /* ========================================
     NAVIGATION CLICK
  ======================================== */

  const handleNavClick = () => {
    clearHoverTimeout();
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  };

  /* ========================================
     QUOTE HANDLER
  ======================================== */

  const handleQuote = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);

    if (typeof onOpenQuote === "function") {
      onOpenQuote();
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceSelect = (service, audience) => {
    handleNavClick();
    if (typeof onOpenQuote === "function") {
      onOpenQuote(audience, service);
    }
  };

  /* ========================================
     SCROLL TO SECTION
  ======================================== */

  const scrollToSection = (id) => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /* ========================================
     MOBILE SERVICE ITEMS
  ======================================== */

  const studentServices = [
    "Final Year Project Development",
    "Project Guidance",
    "Portfolio Website",
    "Resume Building",
    "LinkedIn Profile",
    "Internship Guidance",
    "Career Support",
  ];

  const businessServices = [
    "Website Development",
    "Mobile Application Development",
    "ERP Solutions",
    "Custom Software Development",
    "E-Commerce Development",
    "API Development",
    "Cloud & DevOps",
    "Maintenance & Support",
  ];

  const getMobileServices = (label) => {
    return label === "Students"
      ? studentServices
      : businessServices;
  };

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-500 ${
        scrolled || mobileOpen
  ? "border-b border-white/[0.08] bg-[#071225]/95 shadow-lg backdrop-blur-xl"
  : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* ========================================
          NAVBAR CONTAINER
      ======================================== */}

      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-500 ${
            scrolled ? "h-[72px]" : "h-[80px]"
          }`}
        >
          {/* ====================================
              LOGO
          ==================================== */}

          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex shrink-0 items-center gap-2.5 no-underline"
          >
            {/* LOGO ICON */}

            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl transition duration-300 group-hover:bg-cyan-400/25" />

              <img
                src={logoIcon}
                alt="BinaryBrains logo"
                className="relative h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* BRAND */}

            <div className="leading-tight">
              <div className="text-[1.08rem] font-extrabold tracking-[-0.055em] text-white sm:text-[1.2rem]">
                Binary
                <span className="bg-gradient-to-r from-[#32c7ff] to-[#6380ff] bg-clip-text text-transparent">
                  Brains
                </span>
              </div>

              <div className="mt-0.5 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.1em] text-blue-100/60 sm:text-[9px]">
                Build Today. A Brighter Tomorrow.
              </div>
            </div>
          </a>

          {/* ====================================
              DESKTOP NAVIGATION
          ==================================== */}

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => {
              const isOpen = openMenu === link.label;

              if (link.hasMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => openMenuAfterHover(link.label)}
                    onMouseLeave={closeMenuAfterHover}
                  >
                    <button
                      type="button"
                      onClick={() => toggleMenu(link.label)}
                      onFocus={() => openMenuAfterHover(link.label)}
                      className={`group inline-flex items-center gap-1 whitespace-nowrap py-2 text-[12px] font-semibold transition-all duration-300 xl:text-[13px] ${
                        isOpen
                          ? "text-cyan-300"
                          : "text-white/75 hover:text-white"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-cyan-300"
                            : "text-white/50"
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}

                    {isOpen && (
                      <ServiceMegaMenu
                        type={link.label.toLowerCase()}
                        onClose={() => setOpenMenu(null)}
                        onSelectService={(service) => handleServiceSelect(service, link.label === "Students" ? "STUDENT" : "BUSINESS")}
                      />
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    if (link.label === "Contact") {
                      event.preventDefault();
                      handleQuote();
                    } else {
                      handleNavClick();
                    }
                  }}
                  className={`relative whitespace-nowrap py-2 text-[12px] font-semibold transition-all duration-300 xl:text-[13px] ${
                    link.label === "Home"
                      ? "text-cyan-300"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* ACTIVE HOME LINE */}

                  {link.label === "Home" && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ====================================
              RIGHT SIDE ACTIONS
          ==================================== */}

          <div className="flex items-center gap-2 sm:gap-3">
            {/* SEARCH BUTTON */}

            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((current) => !current);
                  setOpenMenu(null);
                }}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                  searchOpen
                    ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-200"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:text-cyan-200"
                }`}
                aria-label="Search"
                aria-expanded={searchOpen}
              >
                <Search className="h-[17px] w-[17px]" />
              </button>

              {/* SEARCH PANEL */}

              {searchOpen && (
                <div className="absolute right-0 top-14 w-64 rounded-2xl border border-white/15 bg-[#0b1a35]/95 p-3 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5">
                    <Search className="h-4 w-4 shrink-0 text-slate-400" />

                    <input
                      type="search"
                      placeholder="Search..."
                      autoFocus
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* GET A FREE QUOTE */}

            <button
              type="button"
              onClick={handleQuote}
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#079ff4] to-[#6548f5] px-4 py-3 text-[11px] font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(37,99,235,0.45)] sm:inline-flex xl:px-5 xl:text-[12px]"
            >
              Get a Free Quote

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setOpenMenu(null);
                setSearchOpen(false);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-transparent text-white/80 transition-all duration-300 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:text-cyan-200 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ========================================
            MOBILE MENU
        ======================================== */}

        {mobileOpen && (
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#071225] py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                if (link.hasMenu) {
                  const isOpen = openMenu === link.label;

                  return (
                    <div
                      key={link.label}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                    >
                      <button
                        type="button"
                        onClick={() => toggleMenu(link.label)}
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold transition ${
                          isOpen
                            ? "text-cyan-300"
                            : "text-white/85 hover:text-white"
                        }`}
                        aria-expanded={isOpen}
                      >
                        {link.label}

                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 bg-black/10 px-3 py-3">
                          <div className="space-y-1">
                            {getMobileServices(link.label).map((item) => (
                              <a
                                key={item}
                                href="#"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleServiceSelect(item, link.label === "Students" ? "STUDENT" : "BUSINESS");
                                }}
                                className="block rounded-lg px-3 py-2.5 text-sm text-white/65 transition hover:bg-white/[0.07] hover:text-cyan-200"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => {
                      if (link.label === "Contact") {
                        event.preventDefault();
                        handleQuote();
                      } else {
                        handleNavClick();
                      }
                    }}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      link.label === "Home"
                        ? "bg-cyan-300/[0.08] text-cyan-300"
                        : "text-white/75 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* MOBILE QUOTE BUTTON */}

              <button
                type="button"
                onClick={handleQuote}
                className="group mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#079ff4] to-[#6548f5] px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition hover:shadow-[0_12px_30px_rgba(37,99,235,0.4)]"
              >
                Get a Free Quote

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}