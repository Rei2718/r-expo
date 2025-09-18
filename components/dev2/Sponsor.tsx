import Image from "next/image";
import Link from "next/link";

const mainSponsors = [
  { name: "TechCorp", logoUrl: "/KeishoWideLogo.png" },
  { name: "Innovate Inc.", logoUrl: "/GoogleWideLogo.png" },
];

const subSponsors = Array.from({ length: 18 }, (_, i) => ({
  name: `Sub Sponsor ${i + 1}`,
  logoUrl: `https://placehold.co/200x200/1D1D1F/86868B?text=Sponsor`,
}));

export function Sponcor() {
  return (
    <div className="grid grid-cols-1 gap-2 px-6 py-28">
      <div className="grid grid-cols-1 justify-items-center gap-3 pb-12 text-center">
        <div className="font-semibold text-base text-primary">スポンサー</div>
        <div className="pb-6 text-3xl font-bold text-foreground tracking-tighter">
          感謝の気持ちを込めて
        </div>
        <Link href="#" className="text-sm text-sky-600">
          すべてのサポーターを見る<span className="ml-1">&rsaquo;</span>
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
        {mainSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative w-full aspect-[16/9] bg-secondary rounded-sm border border-foreground/12 overflow-hidden"
          >
            <Image
              src={sponsor.logoUrl}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain p-6"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
        {subSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="grid place-items-center w-full aspect-square bg-secondary rounded-sm border border-foreground/12 overflow-hidden"
          >
            <div className="relative w-full h-full p-3">
              <Image
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain"
                unoptimized={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}