import { Ticket, Calendar, MapPin, Mic, Info, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type CardItemProps = {
  icon: ReactNode;
  text: string;
  href: string;
  isPrimary?: boolean;
  subtitle: string;
};

const cardItems: CardItemProps[] = [
  {
    icon: <Ticket className="h-6 w-6" strokeWidth={1.5} />,
    text: "TICKETS",
    href: "#tickets",
    isPrimary: true,
    subtitle: "イベントへの参加はこちらから",
  },
  {
    icon: <Calendar className="h-6 w-6" strokeWidth={1.5} />,
    text: "TIMETABLE",
    href: "#timetable",
    subtitle: "開催スケジュールを確認",
  },
  {
    icon: <Mic className="h-6 w-6" strokeWidth={1.5} />,
    text: "ARTISTS",
    href: "#artists",
    subtitle: "出演アーティスト一覧",
  },
  {
    icon: <MapPin className="h-6 w-6" strokeWidth={1.5} />,
    text: "ACCESS",
    href: "#access",
    subtitle: "会場へのアクセス方法",
  },
  {
    icon: <Info className="h-6 w-6" strokeWidth={1.5} />,
    text: "INFORMATION",
    href: "#information",
    subtitle: "注意事項とご案内",
  },
];

function CardLink({ item }: { item: CardItemProps }) {
  const { icon, text, href, isPrimary, subtitle } = item;

  const linkClassName = isPrimary
    ? "group col-span-2 aspect-[2/1] md:aspect-[3/1] bg-primary text-background"
    : "group col-span-1 aspect-square bg-background text-foreground";

  return (
    <Link
      href={href}
      className={`${linkClassName} w-full rounded-md p-6 grid border border-foreground/12`}
    >
      <div className="col-start-1 row-start-1 grid grid-rows-[auto_1fr_auto] h-full">
        <div className="row-start-1">{icon}</div>
        <div className="row-start-3 grid gap-y-2">
          <div>
            <h3 className={`font-bold ${isPrimary ? "text-2xl" : "text-lg"}`}>
              {text}
            </h3>
            <p className={`mt-1 ${isPrimary ? "text-sm" : "text-xs text-gray"}`}>
              {subtitle}
            </p>
          </div>

          {isPrimary && (
            <div className="justify-self-end">
              <ArrowRight
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            </div>
          )}
        </div>
      </div>

      {!isPrimary && (
        <ArrowUpRight
          className="col-start-1 row-start-1 justify-self-end self-start h-6 w-6 text-gray"
          strokeWidth={1.5}
        />
      )}
    </Link>
  );
}

export default function Card() {
  return (
    <div className="bg-secondary rounded-t-lg h-auto w-full px-6 py-28">
      <div className="grid grid-cols-1 justify-items-center gap-3 pb-12 text-center max-w-4xl mx-auto">
        <p className="font-semibold text-base text-primary">はじめまして</p>
        <h2 className="text-3xl font-bold text-foreground tracking-tighter">
          まずは、ハイライトから
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 max-w-4xl mx-auto">
        {cardItems.map((item) => (
          <CardLink key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}