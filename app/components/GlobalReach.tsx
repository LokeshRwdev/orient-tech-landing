const markets = [
  {
    status: "Expanding",
    name: "United States",
    place: "Atlanta, Georgia",
    copy: "Orient Tech USA, Inc. spearheading local automotive warehouse & parts distribution networks.",
    foot: "ORIENTTECH.US",
    active: true,
  },
  {
    status: "Established",
    name: "Qatar",
    place: "International group presence",
    copy: "Established operations serving commercial and industrial automotive fleets across the territory.",
    foot: "ORIENTTECH.COM.QA",
  },
  {
    status: "Trade hub",
    name: "UAE",
    place: "United Arab Emirates",
    copy: "International group presence acting as a high-capacity regional trade hub and transshipment bridge.",
    foot: "MIDDLE EAST NETWORK",
  },
  {
    status: "Distribution",
    name: "Oman",
    place: "Sultanate of Oman",
    copy: "International group presence driving strategic distribution and regional aftermarket channels.",
    foot: "STRATEGIC CORRIDOR",
  },
];

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      aria-labelledby="global-reach-heading"
      className="relative overflow-hidden bg-[#111216] min-h-screen min-h-[100dvh] flex flex-col justify-center py-10 sm:py-14 border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 w-full my-auto">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="eyebrow mb-2 sm:mb-3">◉ International group network // Protocol 03</p>
          <h2
            id="global-reach-heading"
            className="text-3xl font-black uppercase leading-[1.03] tracking-tight text-white sm:text-5xl"
          >
            One group. Multiple markets.{" "}
            <span className="text-orange-500">Global opportunities.</span>
          </h2>
          <p className="mx-auto mt-2 sm:mt-3 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400">
            With an international group presence across the Middle East and a growing base in the United States, Orient Tech is building a connected automotive business across markets.
          </p>
        </div>

        <div className="relative mb-6 overflow-hidden rounded bg-[#1b1c20] px-5 py-6 sm:px-10 sm:py-8">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <svg
            className="relative mx-auto h-[200px] w-full max-w-5xl sm:h-[260px]"
            viewBox="0 0 1000 300"
            fill="none"
            role="img"
            aria-label="Route map connecting Atlanta with the Middle East hubs"
          >
            <path
              d="M190 153 Q450 20 765 139"
              stroke="#ff6a16"
              strokeWidth="2"
              strokeDasharray="7 6"
            />
            <path
              d="M190 153 Q485 45 730 190"
              stroke="#e72435"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
            <path
              d="M190 153 Q495 75 780 166"
              stroke="#f4a082"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <circle cx="190" cy="153" r="15" fill="#f45b09" fillOpacity=".2" />
            <circle cx="190" cy="153" r="7" fill="#ff6500" />
            <circle cx="730" cy="190" r="11" fill="#ed2336" fillOpacity=".2" />
            <circle cx="730" cy="190" r="5" fill="#e71935" />
            <circle cx="765" cy="139" r="11" fill="#f45b09" fillOpacity=".2" />
            <circle cx="765" cy="139" r="5" fill="#ff6500" />
            <circle cx="780" cy="166" r="11" fill="#ddd" fillOpacity=".12" />
            <circle cx="780" cy="166" r="5" fill="#ccc" />
            <g fill="#e3e0e1" fontFamily="monospace" fontWeight="700" fontSize="12">
              <text x="130" y="127">ATLANTA, GA (USA)</text>
              <text x="138" y="174" fill="#c38c78" fontSize="10">HQ • ORIENT TECH USA</text>
              <text x="699" y="218">QATAR HUB</text>
              <text x="745" y="117">UAE HUB</text>
              <text x="730" y="195">OMAN DISTRIBUTION</text>
            </g>
          </svg>
          <div className="relative mt-2 sm:mt-3 flex flex-wrap justify-between gap-2 eyebrow">
            <span>Coordinates: Lat 33.7490° N, Lon 84.3880° W</span>
            <span>System connectivity: Active multi-region</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market) => (
            <article
              key={market.name}
              className={`min-h-[170px] sm:min-h-[190px] rounded p-4 sm:p-5 flex flex-col justify-between ${
                market.active ? "bg-[#28292d]" : "bg-[#1a1b1f]"
              }`}
            >
              <div>
                <span
                  className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                    market.active ? "bg-orange-600 text-black" : "bg-zinc-700 text-zinc-300"
                  }`}
                >
                  {market.status}
                </span>
                <h3 className="mt-2.5 text-base font-black uppercase text-zinc-100">
                  {market.name}
                </h3>
                <p className="eyebrow mt-1">{market.place}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {market.copy}
                </p>
              </div>
              <p className="eyebrow mt-3 text-[#d29b85]">{market.foot} ↗</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
