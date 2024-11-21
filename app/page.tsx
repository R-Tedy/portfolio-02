import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from '@/components/Experience'
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        {/* <Process/> */}
        <Footer/>
      </div>
    </main>
  );
}
