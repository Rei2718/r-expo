import { AlsoSponsorCard, MainSponsorCard } from "../HeroSection/Sponcer";

export default function HeroLayout() {
  return(
    <>
      <section
        id="hero"
        aria-labelledby="hero-title"
        data-section="hero-and-sponsor"
        className="
          [--hero-height:90lvh]
          [--gradient-height:20lvh]
          [--top-span:calc(var(--hero-height)-var(--gradient-height)/2)]
          [--title-offset-ratio:0.95]
          grid grid-rows-[var(--top-span)_calc(var(--gradient-height)/2)_auto]
        "
      >
        {/* Background sheet for the lower area */}
        <div
          data-element="background-sheet"
          className="z-0 col-start-1 row-start-3 h-full w-full bg-background rounded-b-lg"
        />

        {/* Bottom fade gradient overlay (decorative) */}
        <div
          data-element="background-gradient"
          className="
            col-start-1
            row-[1/3]
            h-[var(--gradient-height)]
            w-full
            self-end
            pointer-events-none
          "
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent to-background" />
        </div>

        {/* Hero copy block */}
        <div
          data-element="hero-copy"
          className="
            col-start-1
            row-start-1
            grid
            w-full
            translate-y-[calc((var(--title-offset-ratio)-1)*var(--top-span))]
            justify-items-center
            gap-6
            self-end
            px-6
            text-center
          "
        >
          <p data-element="hero-subtitle" className="break-words text-md font-medium">
            あなたのために作られたクリエイティブツール
          </p>
          <h1 id="hero-title" data-element="hero-title" className="break-words text-7xl font-semibold">
            R-EXPO
          </h1>
          <p data-element="hero-description" className="break-words text-md">
            クリエイティブなプロフェッショナルや意欲的なアーティスト向けに作られた、強力で直感的なアプリで創造性を高めましょう。
          </p>
        </div>

        {/* Sponsor cards */}
        <div data-section="sponsor" className="relative z-10 col-start-1 row-[2/4]">
          <section aria-label="Sponcer" className="grid h-auto w-full">
            <div data-element="sponcer-card" className="space-y-6 p-6">
              <MainSponsorCard />
              <AlsoSponsorCard />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}