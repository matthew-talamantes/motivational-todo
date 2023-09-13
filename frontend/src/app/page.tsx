import BackgroundImage from "@/components/backgroundImg";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="">
      <div className="absolute w-full h-full z-0">
        <BackgroundImage />
      </div>
      <div className="relative z-1">
        <Header />
      </div>
    </main>
  )
}
