"use client";

const contactCards = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f24e1e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    label: "CORPORATE HEADQUARTERS",
    title: "ORIENT TECH USA, INC.",
    subtitle: "Atlanta, Georgia, United States",
    action: "GET DIRECTIONS",
    href: "https://maps.google.com/?q=Atlanta+Georgia",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f24e1e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "DIRECT PHONE INQUIRIES",
    title: "+1 (404) 956-5578",
    subtitle: "Direct US Inquiries & Dispatch",
    action: "CALL DIRECTLY",
    href: "tel:+14049565578",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f24e1e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    label: "CENTRAL LOGISTICS HUB",
    title: "ATLANTA LOGISTICS HUB",
    subtitle: "Regional US Distribution & Dispatch",
    action: "VIEW FACILITY SPECS",
    href: "#inquiry",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f24e1e]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "ELECTRONIC COMMUNICATIONS",
    title: "infor@orienttech.us",
    subtitle: "rfq@orienttechusa.com",
    action: "SEND EMAIL",
    href: "mailto:infor@orienttech.us",
  },
];

export default function ContactHub() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#0a0a0c] min-h-screen min-h-[100dvh] flex flex-col justify-center py-10 sm:py-14 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#f24e1e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full my-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f24e1e]" />
            Operations &amp; Contact
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]"
          >
            LET&apos;S BUILD{" "}
            <span className="text-[#f24e1e]">SOMETHING TOGETHER.</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Ready to elevate your automotive parts supply chain? Contact our US
            distribution headquarters today.
          </p>
        </div>

        {/* Content Layout: 2x2 Cards (Left) + Interactive Visual Hub (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-10">
          {/* Left: 2x2 Contact Grid */}
          <address className="not-italic lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#111217] border border-white/[0.08] p-5 sm:p-6 hover:border-[#f24e1e]/40 hover:bg-[#13141c] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#f24e1e]/10 border border-[#f24e1e]/20 flex items-center justify-center">
                      {c.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
                    {c.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                    {c.subtitle}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-white/[0.06]">
                  <a
                    href={c.href}
                    title={`${c.action} - ${c.title}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#f24e1e] transition-colors"
                  >
                    <span>{c.action}</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </address>

          {/* Right: Hub Radar Map Card */}
          <div className="lg:col-span-5 rounded-xl bg-[#111217] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Terminal Status */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">
                  Atlanta Central Hub • Active
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#f24e1e] font-semibold bg-[#f24e1e]/15 px-2 py-0.5 rounded border border-[#f24e1e]/30">
                LIVE DISPATCH
              </span>
            </div>

            {/* Simulated Radar Visual */}
            <div className="relative my-4 sm:my-6 py-6 sm:py-8 flex flex-col items-center justify-center">
              {/* Radar Rings */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-white/[0.08] flex items-center justify-center">
                <div className="w-30 h-30 sm:w-32 sm:h-32 rounded-full border border-[#f24e1e]/20 flex items-center justify-center animate-pulse">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border border-[#f24e1e]/40 flex items-center justify-center">
                    {/* Glowing Target Center */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f24e1e] shadow-lg shadow-[#f24e1e]/60 flex items-center justify-center text-white">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hub Annotation */}
              <div className="mt-4 text-center">
                <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  ATLANTA LOGISTICS HEADQUARTERS
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5">
                  33.7490° N, 84.3880° W • GEORGIA USA
                </p>
              </div>
            </div>

            {/* Bottom Facility Action */}
            <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-mono text-[10px] sm:text-[11px]">
                Next-Day Regional Reach
              </span>
              <a
                href="#inquiry"
                className="text-[#f24e1e] hover:text-[#ff6838] font-bold uppercase tracking-wider flex items-center gap-1 text-xs"
              >
                <span>Facility Specs</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Distributor Portfolio Banner */}
        <div className="relative rounded-xl bg-gradient-to-r from-[#181922] via-[#1a1b26] to-[#181922] border border-white/10 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#f24e1e]/15 border border-[#f24e1e]/30 flex items-center justify-center text-[#f24e1e] flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">
                LOOKING TO EXPAND YOUR DISTRIBUTOR PORTFOLIO?
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Join our authorized North American partner network for exclusive
                regional territories and volume pricing.
              </p>
            </div>
          </div>

          <a
            href="#inquiry"
            className="flex-shrink-0 bg-[#f24e1e] hover:bg-[#d63d11] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded transition-all shadow-md shadow-[#f24e1e]/30"
          >
            Apply for Dealership →
          </a>
        </div>
      </div>
    </section>
  );
}
