import Image from "next/image";
import Link from "next/link";
import DrAlineHero from "../../../public/images/draline-hero.jpg";
import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export default function Hero() {
  return (
    <section className="h-auto md:h-screen bg-white text-gray-900 flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-0 flex flex-col justify-center h-full">
        <header className="flex items-center justify-between mb-12 md:mb-16">
          <div className="brand">
            <strong className="block text-base text-gray-900">Dra. Aline Roque Batista</strong>
            <span className="text-sm text-gray-500">Psiquiatria • CRM 520108027-0/RJ</span>
          </div>

        </header>


        <main className="grid grid-cols-1 md:[grid-template-columns:1.05fr_0.95fr] gap-y-10 md:gap-[72px] items-center">
          <div className="hero-copy">
            <p className="eyebrow text-[#4D0000] text-sm font-extrabold uppercase tracking-wider mb-6">Psiquiatria humanizada</p>
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.4rem)] leading-[1.02] -tracking-[0.05em] text-[#4D0000] max-w-[760px] mb-7">
              Saúde mental com escuta, cuidado e direção.
            </h1>
            <p className="subtitle text-gray-600 text-base md:text-lg leading-7 max-w-[580px] mb-9">
              Atendimento psiquiátrico para crianças, adolescentes e adultos, com olhar integral,
              acolhimento real e acompanhamento individualizado para cada fase da vida.
            </p>

            <div className="actions flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              <Button asChild className="rounded-full bg-[#D1B5E8] text-[#4D0000] font-bold px-8 py-3 min-h-13.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)] 
            hover:!bg-[#7C3AED] hover:!text-white transition-colors duration-200 ease-in-out">
                <a href="https://www.doctoralia.com.br/z/pi6kHv">Agende consulta</a>
              </Button>

              <Button asChild variant="link" className="rounded-full bg-[#65d196] text-[#4D0000] font-bold px-8 py-3 min-h-13.5 shadow-[0_10px_24px_rgba(0,0,0,0.08)] 
            hover:!bg-[#1fc43a] hover:!text-white transition-colors duration-200 ease-in-out right-0">
                <a
                  href={`https://wa.me/5521991855891?text=Olá vim pelo site e gostaria de mais informações sobre consulta.`}
                  target="_blank" rel="noopener noreferrer">
                  <WhatsappLogoIcon className="size-7" /> Fale conosco
                </a>
              </Button>
            </div>

            <div className="trust-line flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Infantil, juvenil e adulto</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Sigilo profissional</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Cuidado individualizado</span>
            </div>
          </div>

          <div className="image-area flex flex-col items-center md:items-end order-first md:order-0">
            <div className="w-[min(420px,100%)] mb-4 md:mb-0 md:mt-4 font-serif text-center order-first md:order-last">
              <span className="inline-block text-[#4D0000] font-bold text-[clamp(2rem,4vw,2.8rem)] px-6 py-3 leading-snug">
                Você não precisa passar por isso sozinho
              </span>
            </div>
            <div className="portrait relative w-[min(420px,100%)] aspect-4/5 rounded-[40px] bg-transparent overflow-hidden shadow-none order-last md:order-first">
              <Image
                src={DrAlineHero}
                alt="Foto da Aline Hero"
                className="w-full h-full object-cover block"
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}