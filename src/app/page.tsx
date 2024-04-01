import Image from "next/image";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl flex-col divide-y-2 mb-20 items-center justify-between px-4 lg:px-24">
      <Hero></Hero>
      <Cards></Cards>

      {/* <Footer></Footer> */}
    </main>
  );
}
