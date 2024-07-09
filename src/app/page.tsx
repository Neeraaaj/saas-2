import Image from "next/image";
import Globe from "@/components/Globe";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex max-w-full items-center justify-center flex-col">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-slate-900 to-gray-300/80 bg-clip-text text-center text-7xl lg:text-[9vw] font-semibold font-serif leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Translate Languages all over the world
        </span>
        <Globe className="top-29 block" />
        <div className="mt-[65vh] w-full flex justify-center">
          <a href="/home" className="block">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Translate!
            </button>
          </a>
        </div>
      </div>
      
      <About />
    </div>
  );
}
