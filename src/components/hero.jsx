import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex gap-8 flex-col items-center min-h-screen max-h-full justify-center text-center relative overflow-hidden">
      <Image
        src="/shape.png"
        alt="Circulo naranja difuminado"
        className="absolute bounce opacity-50 top-[30%] left-[-50%] md:left-[-10%]"
        width={300}
        height={300} />
      <h1 className="text-4xl md:text-8xl uppercase font-bold text-gradient  ">Guía de Git</h1>
      <p className="text-base md:text-2xl">Veremos los comandos básicos, desde su instalación y modos de uso.</p>
      <Image
        src="/shape.png"
        alt="Circulo naranja difuminado"
        className="absolute bounce opacity-50 bottom-[10%] right-[20%] "
        width={200}
        height={200} />
      <Image
        src="/pattern.png"
        alt="patrones circulares de color naranja"
        className="absolute opacity-50 bottom-[10px] left-0"
        width={200}
        height={200} />
      <Link href="#start" className="bg-[#ff4900] hover:bg-amber-600  text-2xl p-4 font-bold uppercase">
        Comencemos
      </Link>
    </section>
  )
}
