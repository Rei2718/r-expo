export default function Concept() {
  return(
    <>
      <section className="grid bg-gradient-to-b from-secondary from-50% to-background to-50%">
        <div  className="h-[80lvh] w-lvw col-start-1 row-start-1 z-0">
          <video
            {...{ "x-webkit-airplay": "deny" }}
            disableRemotePlayback
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/hero.webp"
            className="h-full w-full rounded-lg object-cover brightness-60"
            aria-hidden="true"
            role="presentation"
          >
            <source src="/bg_video.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/bg_video_2.mp4" type="video/mp4" media="(max-width: 767px)" />
          </video>
        </div>
        <div className="col-start-1 row-start-1 self-center justify-items-center z-10">
          <div className="h-full w-full grid">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}