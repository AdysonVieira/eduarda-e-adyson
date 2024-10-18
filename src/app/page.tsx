import Confirmation from "./_components/Confirmation";
import Gift from "./_components/Gift";
import Hero from "./_components/Hero";
import Info from "./_components/Info";
import MessageSection from "./_components/MessageSection";

export default function Home() {
  return (
    <main className="flex gap-10 min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Info />
      <Confirmation />
      <Gift />
      <MessageSection />
    </main>
  );
}
