"use client";

import { useState } from "react";

export default function JourneyCta() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="inquiry"
      aria-labelledby="journey-heading"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center py-12 sm:py-16 bg-gradient-to-br from-[#f24e1e] via-[#ff5722] to-[#d63d11] overflow-hidden text-white border-b border-white/[0.08]"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* Decorative mechanical pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Announcement */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black text-white text-xs font-black uppercase tracking-widest shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#f24e1e] animate-pulse" />
              Expansion 2026
            </div>

            <h2
              id="journey-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight uppercase leading-[0.92]"
            >
              THE JOURNEY
              <br />
              IS JUST
              <br />
              BEGINNING.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-black/90 font-medium max-w-lg leading-relaxed pt-1">
              Orient Tech USA is entering its next exciting chapter in the American 
              automotive market. Partner with us early to unlock priority supply channels, 
              direct pricing advantages, and collaborative logistics solutions:
            </p>

            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm md:text-base font-bold text-black">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-[#f24e1e] flex items-center justify-center flex-shrink-0 text-xs font-black">
                  ✓
                </div>
                <span>Strategic US distribution &amp; rapid fulfillment facilities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-[#f24e1e] flex items-center justify-center flex-shrink-0 text-xs font-black">
                  ✓
                </div>
                <span>Immediate access to over 50,000+ OEM replacement SKUs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-[#f24e1e] flex items-center justify-center flex-shrink-0 text-xs font-black">
                  ✓
                </div>
                <span>Dedicated enterprise accounts &amp; technical customer support</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Sleek Charcoal Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#101116] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#f24e1e] font-bold">
                  Direct Channel Access
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1">
                  Connect with Orient Tech
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Submit your inquiry and our commercial team will contact you within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4" role="status" aria-live="polite">
                  <div className="w-12 h-12 bg-[#f24e1e]/20 text-[#f24e1e] rounded-full flex items-center justify-center mx-auto text-xl font-black">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase">Inquiry Received</h4>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Thank you. An Orient Tech North American representative will be in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-[#f24e1e] hover:underline uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs" noValidate={false}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-zinc-300 font-semibold uppercase tracking-wider mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-required="true"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181920] border border-white/10 rounded px-3.5 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#f24e1e] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-zinc-300 font-semibold uppercase tracking-wider mb-1"
                      >
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        aria-required="true"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181920] border border-white/10 rounded px-3.5 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#f24e1e] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-zinc-300 font-semibold uppercase tracking-wider mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181920] border border-white/10 rounded px-3.5 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#f24e1e] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-zinc-300 font-semibold uppercase tracking-wider mb-1"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your Business or Fleet Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#181920] border border-white/10 rounded px-3.5 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#f24e1e] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-zinc-300 font-semibold uppercase tracking-wider mb-1"
                    >
                      Tell us about your parts needs or interest
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={2}
                      placeholder="Specify vehicle categories, expected SKU volumes, or partnership details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181920] border border-white/10 rounded px-3.5 py-2 sm:py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-[#f24e1e] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-1 bg-[#f24e1e] hover:bg-[#d63d11] text-white font-black py-3 sm:py-3.5 px-6 rounded uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#f24e1e]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Commercial Inquiry</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center pt-1">
                    Commercial data protected. Non-disclosure agreements honored upon request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
