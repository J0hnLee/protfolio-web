import HeroSection from "./components/HeroSection";
export default function Home() {
  //TODO: `用mij 生新圖 pharmacy & coding...代替image

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
