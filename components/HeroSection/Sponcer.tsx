import Image from "next/image";

const mainSponsors = [
  { name: "TechCorp", logoUrl: "/KeishoWideLogo.png" },
  { name: "Innovate Inc.", logoUrl: "/GoogleWideLogo.png" },
];

export default function SponcerCard() {
  return (
    <div
      className="
        h-full rounded-xl
        border border-foreground/20
        backdrop-blur-md bg-foreground/10
        grid p-4
      "
    >
      <div className="place-self-center flex flex-col items-center">
        <p className="text-[12px] uppercase font-extralight tracking-wider text-foreground/40">
          sponsored by
        </p>

        <div className="flex items-center gap-6">
          <div className="relative w-32 aspect-video">
            <Image
              src={mainSponsors[0].logoUrl}
              alt={`${mainSponsors[0].name} logo`}
              fill
              className="object-contain"
            />
          </div>

          <div className="h-8 w-px bg-foreground/20" />

          <div className="relative w-32 aspect-video">
            <Image
              src={mainSponsors[1].logoUrl}
              alt={`${mainSponsors[1].name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <a href="/sponsors" className="place-self-end text-[10px] uppercase font-extralight text-foreground/40">
        other sponsor &gt;
      </a>
    </div>
  );
}