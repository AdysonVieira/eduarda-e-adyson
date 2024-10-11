import Confirmation from "./_components/Confirmation";
import Footer from "./_components/Footer";
import Gift from "./_components/Gift";
import Hero from "./_components/Hero";
import Info from "./_components/Info";

export default function Home() {
  return (
    <main className="flex gap-10 min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Info />
      <Confirmation />
      <Gift />
      <Footer />
    </main>
  );
}
