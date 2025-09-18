"use client"

import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/dev2/Scene"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Hero() {
  return(
    <>
      <div className="h-[80lvh] w-lvw grid">
        <div className="h-full w-full col-start-1 row-start-1 z-0 touch-none">
          {/* <Scene /> */}
          <Scene />
        </div>
        <div
          data-element="hero-copy"
          className="w-full col-start-1 row-start-1 self-center grid gap-6 p-6 text-center z-10"
        >
          <div id="hero-title" data-element="hero-title" className="break-words text-7xl font-semibold">
            R-EXPO
          </div>
          {/*
          <div className="text-center pb-4">
            <p className="inline-grid grid-cols-[auto_auto] items-baseline gap-x-1 font-bold text-[10vw]">
              <span>2.11</span>
              <span className="text-[5vw]">mon 10:00 - 18:00</span>
            </p>
            <p className="text-[3vw] font-light uppercase tracking-tighter pt-1">
              札幌コンベンションセンター
            </p>
          </div>
          */}
        </div>
      </div>
    </>
  )
}