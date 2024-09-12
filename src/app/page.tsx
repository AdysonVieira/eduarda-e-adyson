import Image from "next/image";
import Flower from "./_components/Flower";
import Title from "./_components/Title";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center">
      <Flower src="/flor.png" className="top-[-20px] left-[-80px]"/>
      <div className="flex flex-col justify-center items-center gap-5">
        <Image 
          src="/brasao.svg"
          alt="Brasão do casamento"
          width={200}
          height={200}
        />
        <Title>Eduarda & Adyson</Title>
      </div>
    </main>
  );
}
