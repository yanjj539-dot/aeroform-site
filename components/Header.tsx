"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { withBasePath } from "@/lib/paths";

const navItems = [
  { label: "System", href: "#system" },
  { label: "Products", href: "#products" },
  { label: "Lab", href: "#technology" },
  { label: "Motion", href: "#motion" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-load-fade>
      <a className="brand-mark" href="#top" aria-label="AEROFORM home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/assets/brand/logo-horizontal-light.svg")}
          alt="AEROFORM"
          width={152}
          height={30}
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="shop-link" href="#products">
        Explore
        <ArrowRight size={15} strokeWidth={1.8} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#products" onClick={() => setOpen(false)}>
          Shop
        </a>
      </div>
    </header>
  );
}
