import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col justify-end h-[80svh] bg-red-500 -z-10">
        <Image
          src="/hero.webp"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="-z-20"
        />
        <div className="h-[30svh] bg-blue-500 -z-10"></div>
      </div>
      <div className="w-[80svw] h-[100svh] mx-auto -mt-[15svh] bg-gray-500">
      </div>
      <div className="h-[100svh] bg-pink-500"></div>
    </div>
  );
}
