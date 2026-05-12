export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Section 174 Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying Taxes on Your{" "}
          <span className="text-[#58a6ff]">Dev Work</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Section 174 changed how software R&amp;D expenses are deducted. Our calculator finds your optimal strategy — instantly — so you keep more of what you earn.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⚡", title: "Instant Calculation", desc: "Enter your expenses, get your optimal deduction strategy in seconds." },
          { icon: "📄", title: "PDF Reports", desc: "Download a formatted report to share with your accountant or keep for records." },
          { icon: "💾", title: "Save Scenarios", desc: "Compare multiple strategies side-by-side and save your best options." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Section 174 calculations",
              "PDF report generation",
              "Save &amp; compare scenarios",
              "Amortization schedule builder",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start Now — $29/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is Section 174 and why does it matter for developers?",
              a: "Section 174 of the US tax code governs how software R&D expenses are deducted. Starting in 2022, these costs must be amortized over 5 years (15 for foreign work) instead of expensed immediately — significantly increasing your taxable income if you don't plan correctly."
            },
            {
              q: "Who is this calculator for?",
              a: "Freelance developers, indie hackers, small dev agencies, and tax preparers who want to model the impact of Section 174 and find the most tax-efficient strategy for their specific situation."
            },
            {
              q: "Do I need an accountant to use this?",
              a: "No — the calculator is designed to be self-serve. That said, we always recommend reviewing the output with a qualified CPA before filing. Our PDF reports make that conversation much easier."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Section 174 Calculator. Not legal or tax advice.
      </footer>
    </main>
  );
}
