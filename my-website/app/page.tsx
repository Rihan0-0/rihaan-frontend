import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 min-h-screen relative">
      <BackgroundPattern />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <CoursesSection />
          <AboutSection />
        </main>
      </div>
    </div>
  );
}
