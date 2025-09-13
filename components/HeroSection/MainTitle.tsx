import EventCountdown from "@/components/HeroSection/EventCountDown";

export default function MainTitle() {
  return(
    <>
      <p className="text-[80px] text-foreground font-bold leading-[80px]">R-EXPO.</p>
      <p className="text-[20px] text-foreground font-semibold leading-[20px] pt-1">CONFERENCE 2026</p>
      <div className="text-[12px] text-foreground font-extralight leading-[15px] pt-4">
        <EventCountdown />
      </div>
    </>
  )
}