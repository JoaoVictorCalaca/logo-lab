import MainConfig from "@/components/mainConfig/MainConfig";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-slate-800 flex-col gap-8 min-h-screen items-center p-4">
      <Image src='/logo.png' className='' width={158} height={1} alt='logo'/>
      <MainConfig/>
    </main>
  );
}
