import { Newspaper, Tickets } from "lucide-react";

export default function ConceptLayout() {
  return (
    <>
      <section data-section="concept-message" aria-label="Concept Message">
        <div className="h-lvh w-lvw grid">
          <div className="grid gap-6 p-6 my-auto">
            <div className="text-4xl text-left">
              ここから始まる、
              <br />
              一歩先の未来
            </div>

            <div className="text-md">
              「Helpfeel Tech
              Conf」は、Helpfeelが提供するプロダクトの技術領域での取り組みをお伝えするカンファレンスです。人間と技術の関わり方が大きく変わる中、開発、組織、そしてプロダクトもまた大きな変革の時を迎えています。テクノロジーの力を活用して情報共有をスムーズにし、人の可能性を広げることを目指す私たちが今、取り組んでいることについてお話しします。
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="grid h-12 w-full grid-cols-[auto_1fr] items-center gap-3 rounded-md border border-primary p-1.5 text-foreground">
                <div className="grid aspect-square h-full place-items-center rounded-sm">
                  <Tickets
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-left text-foreground">チケット</span>
              </button>
              <button className="grid h-12 w-full grid-cols-[auto_1fr] items-center gap-3 rounded-md border border-foreground/12 bg-secondary p-1.5 text-foreground">
                <div className="grid aspect-square h-full place-items-center rounded-sm">
                  <Newspaper
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-left text-foreground">ニュース</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}