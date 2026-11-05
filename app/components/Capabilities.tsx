const features = [
  {
    number: "01",
    title: "AUTOMOTIVE SPARE PARTS",
    description:
      "Comprehensive catalog coverage across passenger, commercial, and heavy-duty transport vehicles. Engine components, transmission assemblies, performance braking systems, steering & suspension kits, and electronic sensors built to surpass rigorous OEM tolerances.",
    linkText: "EXPLORE CATALOG",
    linkHref: "#contact",
  },
  {
    number: "02",
    title: "WAREHOUSE SOLUTIONS",
    description:
      "High-throughput modern distribution centers equipped with intelligent inventory controls, automated order routing, and specialized automotive storage protocols engineered to ensure rapid dispatch across all North American transit corridors.",
    linkText: "VIEW LOGISTICS SPECS",
    linkHref: "#contact",
  },
  {
    number: "03",
    title: "AUTOMOTIVE PARTNERSHIPS",
    description:
      "Strategic commercial agreements and scalable supply frameworks for regional parts distributors, fleet maintenance operators, municipal agencies, and certified service networks seeking dependable supply consistency and bulk volume advantages.",
    linkText: "BECOME A PARTNER",
    linkHref: "#contact",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative bg-[#0d0e12] min-h-screen min-h-[100dvh] flex flex-col justify-center py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f24e1e]" />
            Core Capabilities
          </div>
          <h2
            id="capabilities-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]"
          >
            ENGINEERED FOR VELOCITY.{" "}
            <span className="text-[#f24e1e]">BUILT FOR SCALE.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            From precision inventory management to cross-border logistics, discover how our operations 
            are built to deliver speed, reliability, and scale to your business.
          </p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item) => (
            <article
              key={item.number}
              className="group relative rounded-xl bg-[#111217] border border-white/[0.08] p-6 sm:p-8 hover:border-[#f24e1e]/50 hover:bg-[#14151c] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#f24e1e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Top Number & Arrow */}
                <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-white/[0.06]">
                  <span className="text-3xl font-black text-zinc-500 group-hover:text-white transition-colors font-mono">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#f24e1e] group-hover:border-[#f24e1e]/40 transition-all">
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#f24e1e] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-6 mt-6 border-t border-white/[0.06]">
                <a
                  href={item.linkHref}
                  title={`Learn more about ${item.title}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-[#f24e1e] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <svg
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
