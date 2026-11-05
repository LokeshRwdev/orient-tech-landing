"use client";

import { useState } from "react";

const links = [
  ["About us", "#about"],
  ["Our solutions", "#capabilities"],
  ["Global presence", "#global-reach"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0c0d0f]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <a
          href="#"
          className="flex shrink-0 items-center gap-3"
          aria-label="Orient Tech USA home"
        >
          <img
            src="https://bitiu6ibmezlvci7.public.blob.vercel-storage.com/Screenshot%202026-11-05%20184223.png"
            alt="Orient Tech USA, Inc. Logo"
            className="h-8 w-auto object-contain"
            width={160}
            height={32}
          />
          <span className="block">
            <b className="block text-xs font-black leading-none sm:text-sm">
              ORIENT
              <br />
              TECH USA,
              <br />
              INC.
            </b>
          </span>
        </a>
        <span className="hidden rounded bg-[#17181b] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-red-300 lg:block">
          Coming soon — USA
        </span>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          <a
            href="#"
            className="rounded bg-orange-600 px-3 py-1.5 text-sm font-bold uppercase text-black"
          >
            Home
          </a>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="hidden rounded bg-[#1a1b1f] px-3 py-2 text-[9px] font-bold uppercase text-zinc-300 lg:block">
          ⚡ US-East region
        </span>
        <button
          type="button"
          className="rounded-full bg-[#ffb39a] px-2.5 py-1.5 text-xs text-black xl:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="grid gap-1 border-t border-white/10 bg-[#101114] px-5 py-3 xl:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2 text-xs font-bold uppercase tracking-wider text-zinc-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={() => setOpen(false)}
            className="py-2 text-xs font-bold uppercase text-orange-500"
          >
            Coming soon — USA
          </a>
        </nav>
      )}
    </header>
  );
}
