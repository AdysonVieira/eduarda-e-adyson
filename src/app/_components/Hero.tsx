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
             
      <p className="md:text-[0.75rem] text-[0.625rem] tracking-widest uppercase">com a bênção de Deus e dos seus pais</p>
      
      <div className="flex flex-col sm:flex sm:flex-row md:text-[1rem] md:gap-10 text-[0.625rem] uppercase gap-5 text-center">
        <div>
          <p>Maria Lindalva Alves Silva Duarte</p>
          <p>Enaldo Machado Duarte</p>
        </div>
        <div>
          <p>Maria de Fátima Vieira dos Santos {`${"(IN MEMORIAM)"}`}</p>
          <p>José Augusto Abreu dos Santos</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        <Image 
          src="/brasao.svg"
          alt="Brasão do casamento"
          width={200}
          height={200}
        />
        <Title>Eduarda & Adyson</Title>
      </div>
    
      <p className="md:text-[0.75rem] text-[0.625rem] tracking-widest uppercase text-center max-w-[20rem]">
        Felizes, convidam você para participar desse momento único em suas vidas
      </p>
    </section>
  );
}

export default Hero;