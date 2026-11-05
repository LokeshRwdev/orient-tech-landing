export default function Hero() {
  return (
    <section
      aria-label="Hero Introduction"
      className="hero-section relative overflow-hidden border-b border-white/[0.08] min-h-screen min-h-[100dvh] flex flex-col justify-between"
    >
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">
          {/* <span className="rounded-full bg-[#1a1b1f]/90 px-3 py-1.5 text-[#ffb09a]">
            <i className="mr-2 inline-block h-2 w-2 rounded-full bg-red-600" />
            Atlanta, Georgia — USA
          </span> */}
          <span className="rounded-full bg-red-700 px-3 py-1.5 text-white">
            Orient Tech USA — Coming Soon
          </span>
          {/* <span className="bg-[#1a1b1f]/90 px-3 py-1.5 text-zinc-300">
            <b className="text-orange-500">Spec:</b> US expansion 2026
          </span> */}
        </div>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.7rem]">
          <span className="hero-wordmark">OTGRIP</span> Automotive
        </h1>
        <h2 className="mt-3 text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
          <span className="text-[#ff9d95]">Grip the road,</span> trust the drive
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          Bringing international automotive expertise, high-traction
          dependability, and an uncompromising standard of service to the United
          States.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex min-w-[210px] items-center justify-center gap-3 rounded bg-orange-600 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_26px_#f45c2444] transition hover:bg-orange-500"
          >
            Get in touch <span aria-hidden="true">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex min-w-[230px] items-center justify-center gap-3 rounded bg-[#202125] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-100 transition hover:bg-[#2a2b30]"
          >
            <span className="text-orange-400">◉</span> Explore our vision
          </a>
        </div>
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 border border-white/[0.06] bg-[#1a1b20]/90 p-4 sm:grid-cols-4 sm:gap-6 sm:px-5">
          <div>
            <p className="mt-1 text-xs font-bold uppercase text-zinc-100">
              Trusted partner for all your vehicle needs
            </p>
          </div>
          <div>
            {/* <small className="eyebrow">Regional headquarters</small> */}
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#ffa18a]">
              Atlanta, GA — United States
            </p>
          </div>
          <div>
            {/* <small className="eyebrow">Primary capabilities</small> */}
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-zinc-100">
              Precision parts &amp; logistics
            </p>
          </div>
          <div>
            {/* <small className="eyebrow">Global ecosystem</small> */}
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#ffa18a]">
              USA • Qatar • UAE • Oman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
