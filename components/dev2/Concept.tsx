export default function Concept() {
  return (
    <>
      <div className="bg-secondary">
        <section className="grid h-auto w-full place-items-center overflow-hidden rounded-t-lg">
          <div className="col-start-1 row-start-1 h-full w-full">
            <video
              {...{ "x-webkit-airplay": "deny" }}
              disableRemotePlayback
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/hero.webp"
              className="h-full w-full object-cover brightness-50"
              aria-hidden="true"
              role="presentation"
            >
              <source src="/bg_video.mp4" type="video/mp4" media="(min-width: 768px)" />
              <source src="/bg_video_2.mp4" type="video/mp4" media="(max-width: 767px)" />
            </video>
          </div>

          <div className="col-start-1 row-start-1 mx-auto max-w-2xl px-6 py-28 text-left grid gap-12 z-10">
              <h2 className="text-4xl font-bold leading-tight tracking-tighter">
                ここから始まる、
                <br />
                一歩先の未来
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-8 text-foreground">
                「Helpfeel Tech Conf」は、Helpfeelが提供するプロダクトの技術領域での取り組みをお伝えするカンファレンスです。人間と技術の関わり方が大きく変わる中、開発、組織、そしてプロダクトもまた大きな変革の時を迎えています。テクノロジーの力を活用して情報共有をスムーズにし、人の可能性を広げることを目指す私たちが今、取り組んでいることについてお話しします。
              </p>
          </div>
        </section>
      </div>
    </>
  );
}