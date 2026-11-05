export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#07080a] text-zinc-400 border-t border-white/[0.08] text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-9 h-9 rounded bg-[#f24e1e] flex items-center justify-center font-black text-white text-base">
                OT
              </div> */}
              <span className="text-white font-black text-lg tracking-tight uppercase">
                ORIENT TECH USA, INC.
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Trusted partner for all your vehicle needs. Advancing automotive
              reliability, aftermarket parts distribution, and streamlined
              warehousing across North America.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/orient-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#f24e1e] transition-colors"
                aria-label="Orient Tech LinkedIn Profile"
              >
                <span className="font-bold text-xs" aria-hidden="true">
                  in
                </span>
              </a>
              <a
                href="https://twitter.com/OrientTechUSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#f24e1e] transition-colors"
                aria-label="Orient Tech X Twitter Profile"
              >
                <span className="font-bold text-xs" aria-hidden="true">
                  𝕏
                </span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#f24e1e] transition-colors"
                aria-label="Orient Tech YouTube Channel"
              >
                <span className="font-bold text-xs" aria-hidden="true">
                  ▶
                </span>
              </a>
              <a
                href="mailto:contact@orienttech.com"
                className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#f24e1e] transition-colors"
                aria-label="Email Orient Tech"
              >
                <span className="font-bold text-xs" aria-hidden="true">
                  ✉
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer Quick Links"
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Orient Tech
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="hover:text-white transition-colors"
                >
                  Core Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#global-reach"
                  className="hover:text-white transition-colors"
                >
                  Global Markets &amp; Hubs
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="hover:text-white transition-colors"
                >
                  Executive Leadership
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; RFQ
                </a>
              </li>
              <li>
                <a
                  href="#inquiry"
                  className="hover:text-white transition-colors"
                >
                  Authorized Distributorship
                </a>
              </li>
            </ul>
          </nav>

          {/* Global Operations */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global Presence
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-300 font-medium">United States</span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Atlanta, Georgia HQ
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-300 font-medium">Qatar</span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Doha Industrial Center
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-300 font-medium">
                  United Arab Emirates
                </span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Dubai Transit Gateway
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-300 font-medium">Oman</span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Muscat Distribution
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                <span className="text-zinc-300 font-medium">
                  Global network
                </span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  Qatar • UAE • Oman
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Entity Registration Bar */}
        <div className="my-8 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f24e1e]" />
            <span className="font-mono text-zinc-300">
              LEGAL ENTITY: ORIENT TECH, SA DE CV / ORIENT TECH USA, INC.
            </span>
          </div>
          <span className="font-mono text-zinc-500">
            ATLANTA, GEORGIA • US OPERATIONS LAUNCH 2026
          </span>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4 pt-4">
          <p>
            © 2026 Orient Tech USA, Inc. All rights reserved. A member of Orient
            Group of Companies.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Supply
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Supply Chain Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
