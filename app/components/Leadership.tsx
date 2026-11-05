export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative bg-[#0d0e12] min-h-screen min-h-[100dvh] flex flex-col justify-center py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#f24e1e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full my-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f24e1e]" />
            Executive Perspective
          </div>
          <h2
            id="leadership-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]"
          >
            LEADERSHIP BUILT ON <span className="text-[#f24e1e]">TRUST.</span>
          </h2>
        </div>

        {/* Executive Card */}
        <div className="relative rounded-2xl bg-[#111217] border border-white/[0.08] p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Leader Bio Profile */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
              {/* Circular Avatar with Glowing Ring */}
              <div className="relative mb-5">
                <div
                  aria-label="Roopesh Mohandas avatar monogram"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#f24e1e] via-[#ff6838] to-zinc-700 shadow-xl shadow-[#f24e1e]/20 flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-full bg-[#181920] flex items-center justify-center font-black text-2xl sm:text-3xl text-white tracking-wider">
                    RM
                  </div>
                </div>
                {/* Status Dot */}
                <span className="absolute bottom-1 right-2 w-4 h-4 bg-[#f24e1e] border-2 border-[#111217] rounded-full" />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                ROOPESH MOHANAN
              </h3>
              <p className="text-sm font-bold text-[#f24e1e] uppercase tracking-wider mt-1">
                Founder &amp; CEO
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Orient Group of Companies
              </p>

              {/* Leadership tags */}
              <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                  Executive vision
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-[#f24e1e]/15 text-[#f24e1e] border border-[#f24e1e]/30">
                  Global Strategy
                </span>
              </div>
            </div>

            {/* Right: The Executive Quote */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {/* Quotation Icon */}
              <div
                className="text-[#f24e1e] text-5xl sm:text-6xl font-serif leading-none mb-3 opacity-80 select-none"
                aria-hidden="true"
              >
                “
              </div>

              {/* Quote Statement */}
              <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-zinc-100 uppercase leading-snug tracking-wide">
                “OUR VISION FOR ORIENT TECH ISN’T JUST ABOUT DELIVERING
                INDIVIDUAL COMPONENTS—IT’S ABOUT CONNECTING BUSINESSES AND
                PEOPLE TO RELIABILITY, PRECISION ENGINEERING, AND INTEGRITY. AS
                WE EXPAND INTO NORTH AMERICA, WE BRING OUR UNWAVERING COMMITMENT
                TO HIGH QUALITY, TRANSPARENCY, AND SPEED ACROSS EVERY SHIPMENT
                DELIVERED ACROSS THE UNITED STATES.”
              </blockquote>

              {/* Meta Credentials */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-5 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#f24e1e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Regional Base: Atlanta, Georgia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#f24e1e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Orient Group of Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#f24e1e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:roopesh@orientech.us"
                    className="text-zinc-300 font-mono hover:text-[#f24e1e] transition-colors"
                  >
                    roopesh@orientech.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
