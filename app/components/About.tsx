export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-[#0a0a0c] min-h-screen min-h-[100dvh] flex flex-col justify-center py-12 sm:py-16 lg:py-20 border-b border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f24e1e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full my-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            {/* <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f24e1e]" />
              About us // Protocol 01
            </div> */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]"
            >
              GLOBAL EXPERTISE.{" "}
              <span className="text-[#f24e1e]">AMERICAN AMBITION.</span>
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end text-right border-l-2 border-[#f24e1e] pl-4">
            <span className="text-xs font-mono text-zinc-400">
              EXPANSION ROADMAP
            </span>
            <span className="text-sm font-bold text-white tracking-wider">
              Atlanta Metro • Georgia
            </span>
          </div>
        </div>

        {/* Two Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Story & Statistics */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-7 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
              <p className="text-base sm:text-lg text-zinc-200 font-semibold leading-relaxed tracking-wide">
                ORIENT TECH USA, INC. IS EXPANDING ITS PRESENCE IN THE AMERICAN
                AUTOMOTIVE MARKET, BRINGING TOGETHER INTERNATIONAL BUSINESS
                EXPERIENCE AND AN UNRELENTING COMMITMENT TO DEPENDABLE
                automotive tyres AND WAREHOUSE SOLUTIONS.
              </p>
            </div>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Based in Atlanta, Georgia, we are building relationships and
                opportunities to serve the evolving needs of the US automotive
                industry. Our approach merges time-tested global distribution
                rigor with agile, technology-driven warehousing tailored to
                North American demands.
              </p>
              <p>
                Whether streamlining component availability or engineering
                robust logistics pipelines for automotive suppliers, Orient Tech
                USA focuses on high-traction dependability and execution.
              </p>
            </div>

            {/* Three Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/[0.08]">
              <div className="p-3.5 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-2xl sm:text-4xl font-black text-[#f24e1e]">
                  100%
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-300 mt-1">
                  Quality Verified
                </div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">
                  OEM Standard Testing
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-2xl sm:text-4xl font-black text-white">
                  4+
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-300 mt-1">
                  Continents
                </div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">
                  Global Sourcing Network
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-2xl sm:text-4xl font-black text-[#f24e1e]">
                  2026
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-300 mt-1">
                  US Expansion
                </div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 mt-0.5">
                  Direct US Fulfillment
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Dossier / Entity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#111217] border border-white/10 p-5 sm:p-7 shadow-2xl overflow-hidden">
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f24e1e] via-[#ff6838] to-transparent" />

              {/* Dossier Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                    Corporate Dossier
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mt-0.5">
                    Enterprise Registration
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#f24e1e]/20 text-[#f24e1e] border border-[#f24e1e]/30">
                  Active Entity
                </span>
              </div>

              {/* Simulated Document / Certificate Box */}
              <div className="my-5 p-3.5 sm:p-4 rounded-lg bg-[#181920] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#f24e1e]/15 border border-[#f24e1e]/30 flex items-center justify-center text-[#f24e1e] flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      ORIENT TECH USA, INC.
                    </h4>
                    <p className="text-xs text-zinc-400">
                      International Automotive Division
                    </p>
                  </div>
                </div>
              </div>

              {/* Detailed specification list */}
              <div className="space-y-3 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-500 font-mono uppercase tracking-wider">
                    US Operating Arm
                  </span>
                  <span className="text-zinc-200 font-semibold mt-0.5 sm:mt-0">
                    Orient Tech USA, Inc.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-500 font-mono uppercase tracking-wider">
                    Regional Base
                  </span>
                  <span className="text-zinc-200 font-semibold mt-0.5 sm:mt-0">
                    Atlanta Metro, Georgia
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-500 font-mono uppercase tracking-wider">
                    Industry Focus
                  </span>
                  <span className="text-zinc-200 font-semibold mt-0.5 sm:mt-0">
                    automotive tyres &amp; Warehousing
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-500 font-mono uppercase tracking-wider">
                    Global Reach
                  </span>
                  <span className="text-zinc-200 font-semibold mt-0.5 sm:mt-0">
                    USA • Qatar • UAE • Oman
                  </span>
                </div>
              </div>

              {/* Bottom footer in dossier card */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500">
                <span>Compliance Verified</span>
                <span className="text-[#f24e1e] font-mono font-medium">
                  REF: OT-US-2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
