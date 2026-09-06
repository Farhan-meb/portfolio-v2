import { Reveal } from "@/components/ui/Reveal";
import { philosophyCards, philosophyHeading, philosophyKicker } from "@/content/philosophy";

export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="py-[clamp(72px,11vh,132px)]">
      <p className="font-mono text-xs tracking-[0.14em] text-neutral-600">{philosophyKicker}</p>
      <h2
        id="philosophy-heading"
        className="mt-4 mb-12 font-medium tracking-[-0.025em] text-neutral-100 sm:mb-14"
        style={{ fontSize: "clamp(26px,3vw,38px)" }}
      >
        {philosophyHeading}
      </h2>

      <div className="flex flex-wrap overflow-hidden rounded-xl border-t border-l border-[var(--hairline-strong)]">
        {philosophyCards.map((card, i) => (
          <Reveal
            key={card.ordinal}
            delay={i * 80}
            className="bg-page min-w-[230px] flex-1 border-r border-b border-[var(--hairline-strong)] p-[clamp(22px,3vw,34px)] transition-colors duration-200 hover:bg-[rgba(35,37,50,0.6)]"
          >
            <span className="font-mono text-[10px]" style={{ color: `var(--color-${card.hue})` }}>
              {card.ordinal}
            </span>
            <h3 className="mt-[22px] text-[19px] font-medium text-neutral-100">{card.title}</h3>
            <p className="mt-3 text-sm leading-[1.65] text-neutral-500">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
