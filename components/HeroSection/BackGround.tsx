import Image from "next/image"

export default function BackGround() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full -z-20 object-cover"
    >
      <source src="/bg_video.mp4" type="video/mp4" media="(min-width: 768px)" />
      <source src="/bg_video_2.mp4" type="video/mp4" media="(max-width: 767px)" />
      <Image
        src="/hero.webp"
        alt="Hero Image"
        fill
        unoptimized
        priority
        className="-z-20 object-cover"
      />
    </video>
  );
}