import Image from "next/image";

const mainSponsors = [
  { name: "TechCorp", logoUrl: "/KeishoWideLogo.png" },
  { name: "Innovate Inc.", logoUrl: "/GoogleWideLogo.png" },
];

const subSponsors = Array.from({ length: 20 }, (_, i) => ({
  name: `Sub Sponsor ${i + 1}`,
  logoUrl: `https://placehold.co/120x60/AEAEB2/000000?text=Sponsor+${i + 1}`,
}));

export function MainSponsorCard() {
  return (
    <div
      className="
        h-auto rounded-md
        border-1 border-foreground/12
        backdrop-blur-md bg-secondary
        grid grid-cols-1 p-6 gap-6
      "
    >
      <div className="grid grid-cols-1 justify-items-center gap-3">
        <span className="text-sm text-foreground">Main Supported By</span>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="relative w-25 aspect-video">
            <Image
              src={mainSponsors[0].logoUrl}
              alt={`${mainSponsors[0].name} logo`}
              fill
              className="object-contain"
            />
          </div>

          <div className="h-8 w-px bg-foreground/25" />

          <div className="relative w-25 aspect-video">
            <Image
              src={mainSponsors[1].logoUrl}
              alt={`${mainSponsors[1].name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AlsoSponsorCard() {
  return (
    <div
      className="
        h-auto rounded-md
        border-1 border-foreground/12
        backdrop-blur-md bg-secondary
        grid grid-cols-1 p-6 gap-6
      "
    >
      <div className="grid grid-cols-1 justify-items-center gap-3">
        <span className="text-sm text-foreground">Also Supported By</span>
      </div>

      <div className="
        grid
        grid-cols-3 sm:grid-cols-4 md:grid-cols-5
        gap-x-2 gap-y-3
        place-items-center
      ">
        {subSponsors.map((sponsor) => (
          <div key={sponsor.name} className="relative w-20 h-10">
            <Image
              src={sponsor.logoUrl}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain"
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}