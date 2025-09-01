import MenuButton from "@/components/MenuButton";
import Image from "next/image";
import { MdIosShare } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[90svh]">
        <Image
          src="/hero.webp"
          alt="Hero Image"
          fill
          className="-z-20 object-cover"
        />
        <div className="absolute top-0 left-0 h-16 w-full">
          <div className="fixed z-50 top-4 left-4 focus:outline-none">
            <MenuButton />
          </div>
          <div className="fixed top-5 right-5">
            <MdIosShare className="h-6 w-6" />
          </div>
        </div>
        <div className="absolute inset-0 pt-16 pb-[15svh] flex justify-center items-center z-10">
          <p className="text-5xl text-white font-bold">REXPO</p>
        </div>
        <div className="absolute bottom-0 left-0 h-[30svh] w-full bg-gradient-to-b from-transparent to-black -z-10"></div>
      </div>
      <div className="w-[80svw] h-[100svh] mx-auto -mt-[15svh] bg-gray-500"></div>
      <div className="h-[100svh] bg-pink-500"></div>
    </div>
  );
}