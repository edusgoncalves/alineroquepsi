import Image from "next/image";
import Link from "next/link";
import DrAlineHero from "../../../public/images/draline-hero.jpg";
import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export default function Hero() {
  return (
    <section
      className="h-auto md:h-screen text-[#352A2F] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #FFFCFD 0%, #F7F0FB 45%, #E8D8F3 100%)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-0 flex flex-col justify-center h-full">
        <header className="flex items-center justify-between mb-8 md:mb-10">
          <div className="brand">
            <strong className="block text-base text-[#352A2F]">Dra. Aline Roque Batista</strong>
            <span className="text-sm text-[#6F5F66]">Psiquiatria • CRM 520108027-0/RJ</span>
          </div>
        </header>

        {/* Destaque fixo no topo — sempre visível acima do grid */}
        <div className="mb-6 md:mb-8 text-center">
          <span className="font-serif text-[#7A2030] font-bold text-[clamp(2.4rem,4vw,4rem)] leading-tight tracking-tight">
            Atendimento psiquiátrico humanizado
          </span>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-y-10 md:gap-[72px] items-center">
          <div className="hero-copy">
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.4rem)] leading-[1.02] tracking-tighter text-[#5A0012] max-w-[760px] mb-7">
              Saúde mental com escuta, cuidado e direção.
            </h1>
            <p className="subtitle text-[#6F5F66] text-base md:text-lg leading-7 max-w-[580px] mb-9">
              Atendimento psiquiátrico para crianças, adolescentes e adultos, com olhar integral,
              acolhimento real e acompanhamento individualizado para cada fase da vida.
            </p>

            <div className="actions flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              {/* CTA primário — Deep Wine */}
              <Button
                asChild
                className="rounded-full bg-[#5A0012] text-white font-semibold px-8 py-3 min-h-[54px] shadow-[0_10px_28px_rgba(90,0,18,0.18)]
                  hover:bg-[#7A2030]! hover:text-white! transition-colors duration-200 ease-in-out"
              >
                <a href="https://www.doctoralia.com.br/z/pi6kHv">Agende consulta</a>
              </Button>

              {/* CTA secundário — editorial, borda lavanda */}
              <Button
                asChild
                variant="link"
                className="rounded-full bg-white/80 text-[#5A0012] font-semibold px-8 py-3 min-h-[54px]
                  border border-[#D1B5E8] shadow-none
                  hover:!bg-[#F7F0FB] hover:!text-[#5A0012] transition-colors duration-200 ease-in-out"
              >
                <a
                  href={`https://wa.me/5521991855891?text=Olá vim pelo site e gostaria de mais informações sobre consulta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogoIcon className="size-7" /> Fale conosco
                </a>
              </Button>
            </div>

            <div className="trust-line flex flex-wrap gap-x-4 gap-y-2 text-[#6F5F66] text-sm">
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#A97DCC]" />Infantil, juvenil e adulto
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#A97DCC]" />Sigilo profissional
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-[#A97DCC]" />Cuidado individualizado
              </span>
            </div>
          </div>

          <div className="image-area flex flex-col items-center md:items-end order-first md:order-0">
            <div className="portrait relative w-[min(420px,100%)] aspect-4/5 rounded-[40px] bg-transparent overflow-hidden shadow-none">
              <Image
                src={DrAlineHero}
                alt="Foto da Dra. Aline Roque"
                className="w-full h-full object-cover block"
                priority
              />
            </div>
            {/* Quote secundária abaixo da imagem */}
            <div className="w-[min(420px,100%)] mt-4 font-serif text-center md:text-right">
              <span className="inline-block text-[#6F5F66] italic text-base md:text-lg px-4 py-2 leading-snug">
                "Cada história merece ser compreendida com profundidade, cuidado e responsabilidade clínica."
              </span>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}