import Image from "next/image";
import Flower from "./Flower";
import Title from "./Title";

const Hero = () => {
  return (
    <section className="flex gap-10 min-h-screen flex-col items-center justify-center p-5 relative w-full">
      <Flower
        src="/flor.png"
        className="absolute lg:w-[40vw] lg:top-[-20px] lg:left-[-80px] w-[50vw] top-[0] left-[-20px]"
      />
      <div className="flex flex-col items-center justify-center gap-5">
        <Image 
          src="/brasao.svg"
          alt="Brasão do casamento"
          width={200}
          height={200}
        />
        <Title>Eduarda & Adyson</Title>
      </div>
    </section>
  );
}

export default Hero;