import clsx from "clsx";
import { useEffect, useState } from "react";

export default function BackgroundMovieLayer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <>
      <div
        data-section="background-video"
        className={clsx(
          "fixed inset-0 -z-50 h-[100lvh] w-[100lvw] pointer-events-none duration-1000",
          {
            "brightness-45": isScrolled,
            "brightness-90": !isScrolled,
          }
        )}
        aria-hidden="true"
      >
        <video
          {...{ "x-webkit-airplay": "deny" }}
          disableRemotePlayback
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero.webp"
          className="h-full w-full object-cover"
          aria-hidden="true"
          role="presentation"
        >
          <source src="/bg_video.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/bg_video_2.mp4" type="video/mp4" media="(max-width: 767px)" />
        </video>
      </div>
    </>
  )
}