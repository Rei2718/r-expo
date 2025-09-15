{/*
import dynamic from 'next/dynamic';

const ClientOnlyEventCountdown = dynamic(
  () => import('@/components/HeroSection/EventCountDown'),
  { ssr: false }
);
*/}

export default function MainTitle() {
  return(
    <>
      <p className="text-[23vw] text-foreground font-bold leading-[23vw]">R-EXPO</p>
      <p className="text-[5vw] text-foreground font-semibold leading-[5vw] pt-2">CONFERENCE 2026</p>
      {/*
      <div className="text-[4vw] text-foreground font-extralight leading-[4vw] pt-4">
        <ClientOnlyEventCountdown />
      </div>
      */}
    </>
  )
}