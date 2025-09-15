import BackGround from "@/components/HeroSection/BackGround";
import MainTitle from "@/components/HeroSection/MainTitle";
import SponcerCard from "@/components/HeroSection/Sponcer";
import DateTitle from "@/components/HeroSection/DateTitle";

export default function HeroSection() {
  return (
    <section className="grid h-[100svh] w-full">
      <div className="fixed inset-0 -z-10">
        <BackGround />
      </div>
      <div className="row-start-1 col-start-1 place-self-center text-center mb-[10svh]">
        <MainTitle />
      </div>
      <div className="row-start-1 col-start-1 self-end w-full">
        <div className="row-start-1 col-start-1 self-end h-[20svh] w-full bg-gradient-to-b from-transparent to-background -z-10" />
        <div className="row-start-1 col-start-1 self-end h-[10svh] bg-background" />
      </div>

      <div className="row-start-1 col-start-1 self-end w-full flex flex-col items-center gap-6 p-6">
        <DateTitle />
        <div className="w-full">
          <SponcerCard />
        </div>
      </div>
    </section>
  );
}