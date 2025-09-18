"use client";

import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "新しいテクノロジーの夜明け",
    label: "イベント",
    date: "3月12日",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "都市景観を変えるアートインスタレーション",
    label: "アナウンス",
    date: "4月2日",
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "持続可能な未来への大きな一歩",
    label: "イベント",
    date: "5月20日",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "グルメの祭典、今年も開催が決定",
    label: "アナウンス",
    date: "6月8日",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function NewsFeed() {
  return (
    <div className="py-12 px-6 bg-background rounded-lg">
      <div className="pb-12">
        <div className="text-3xl font-semibold pb-3">最新情報を入手</div>
        <div className="text-base font-light text-foreground/80">
          アーティストの紹介や世界で行われているイベント、Procreate のニュース — ここでインサイトをお読みください。
        </div>
      </div>

      <div className="">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="my-12 first:mt-0 last:mb-0"
          >
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover brightness-85"
                priority={item.id === 1}
              />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="py-1 text-xs font-medium text-foreground">
                {item.label}
              </span>
              <span className="text-xs text-foreground/70">{item.date}</span>
            </div>

            <div className="text-xl font-semibold text-foreground mt-2">
              「{item.title}」
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
