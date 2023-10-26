import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import NavBar from "./components/NavBar";

export default function Home() {
  //TODO: `用mij 生新圖 pharmacy & coding...代替image

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
