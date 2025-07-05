import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LandingPage from "@/components/ui/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="bg-[#f5f7ff] text-black dark:bg-zinc-900 dark:text-white w-full">
      <Navbar />
      <div className="min-h-[calc(100vh-70px)] py-4">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}
