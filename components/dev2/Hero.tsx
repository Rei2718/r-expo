"use client"

import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer"

const Scene = dynamic(() => import("@/components/dev2/Scene"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  return(
    <>
      <div ref={ref} className="h-[80lvh] w-lvw grid">
        <div className="h-full w-full col-start-1 row-start-1 z-0">
          <Scene inView={inView} />
        </div>
        <div className="scroll w-[1px] h-[20lvh] mr-3 relative  col-start-1 row-start-1 justify-self-end self-end overflow-hidden z-10">
        </div>
      </div>
    </>
  )
}