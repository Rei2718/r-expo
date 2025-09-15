"use client";

import HeaderLayout from "@/components/HeaderSection/HeaderLayout";
import SponcerCard from "@/components/HeroSection/Sponcer";

export default function Home() {
  return (
    <>
      <header data-name="Header">
        <HeaderLayout />
      </header>

      <div
        data-name="BackgroundVideo"
        className="
          fixed inset-0 -z-50
          h-[100lvh] w-[100lvw]
          pointer-events-none
        "
        aria-hidden="true"
      >
        <video
          {...{ "x-webkit-airplay": "deny" }}
          disableRemotePlayback
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero.webp"
          className="h-full w-full object-cover"
          aria-hidden="true"
          role="presentation"
        >
          <source
            src="/bg_video.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source
            src="/bg_video_2.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </video>
      </div>

      <main
        data-name="Layout"
        className="
          [--hero-h:90lvh]
          [--grad-h:20lvh]
          [--top-span:calc(var(--hero-h)-var(--grad-h)/2)]
          [--title-bottom-ratio:0.95]
          grid grid-rows-[var(--top-span)_calc(var(--grad-h)/2)_auto]
        "
      >
        <div
          data-name="Concept__Background"
          className="
            col-start-1
            row-[1/3]
            h-[var(--grad-h)]
            w-full
            self-end
            pointer-events-none
          "
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent to-background" />
        </div>

        <section
          data-name="Hero__TitleGroup"
          aria-label="Hero"
          className="
            col-start-1
            row-start-1
            grid
            w-full
            translate-y-[calc((var(--title-bottom-ratio)-1)*var(--top-span))]
            justify-items-center
            gap-6
            self-end
            px-6
            text-center
          "
        >
          <p data-name="Hero__Subtitle" className="break-words text-md font-medium">
            あなたのために作られたクリエイティブツール
          </p>
          <p data-name="Hero__Title" className="break-words text-7xl font-semibold">R-EXPO</p>
          <p data-name="Hero__Description" className="break-words text-md">
            クリエイティブなプロフェッショナルや意欲的なアーティスト向けに作られた、強力で直感的なアプリで創造性を高めましょう。
          </p>
        </section>

        <div data-name="SkyLayer" className="relative z-10 col-start-1 row-[2/4]">
          <section data-name="Concept" aria-label="Concept" className="grid h-auto w-full">
            <div
              data-name="Concept__Card"
              className="p-6"
            >
              <SponcerCard />
            </div>
          </section>

          <section data-name="Sponsor" aria-label="Sponsor">
            <div className="h-[100lvh] w-[100lvw] bg-orange-500" />
          </section>

          <section data-name="Feed" aria-label="Feed">
            <div className="h-[100lvh] w-[100lvw] bg-pink-500" />
          </section>
        </div>

        <div
          data-name="UnderRed"
          className="z-0 col-start-1 row-start-3 min-h-[100lvh] w-full bg-background"
        />
      </main>
    </>
  );
}
