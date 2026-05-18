import Image from "next/image";
import Link from "next/link";
import DrAlineHero from "../../../public/images/draline-hero.jpg";
import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";
// import { WhatsappLogo } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-gray-900 px-[7%] py-8 md:py-20 lg:py-24">
      <header className="flex items-center justify-between mb-20 md:mb-24">
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
            <Button asChild className="rounded-full bg-[#D1B5E8] text-[#4D0000] font-bold px-8 py-3 min-h-[54px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:!bg-[#7C3AED] hover:!text-white transition-colors duration-200 ease-in-out">
              <Link href="#contato">Agende consulta</Link>
            </Button>

            <Button asChild variant="link" className="text-teal-700 font-bold">
              <a href="https://wa.me/5500000000000">Fale conosco via WhatsApp</a>
            </Button>
          </div>

          <div className="trust-line flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-sm">
            <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Infantil, juvenil e adulto</span>
            <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Sigilo profissional</span>
            <span className="inline-flex items-center gap-2"><Check className="size-4 text-teal-700" />Cuidado individualizado</span>
          </div>
        </div>

        <div className="image-area relative flex justify-center md:justify-end order-first md:order-none">
          <div className="portrait relative w-[min(420px,100%)] aspect-[4/5] rounded-[40px] bg-transparent overflow-hidden shadow-none">
            {/* Preserve the original Image import and tag */}
            <Image
              src={DrAlineHero}
              alt="Foto da Aline Hero"
              className="w-full h-full object-cover block"
              priority
            />
          </div>

          <div className="quote-card hidden md:block absolute left-0 bottom-8 -translate-x-[18%] max-w-[260px] bg-psi-surface/90 backdrop-blur-md rounded-[24px] p-5 shadow-[0_18px_45px_rgba(45,69,70,0.13)] font-serif text-psi-main text-[1.05rem] leading-7">
            Você não precisa enfrentar tudo sozinho.
          </div>

          <div className="quote-card md:hidden mt-4 w-full max-w-[320px] text-center font-serif text-psi-main text-base leading-7">
            Você não precisa enfrentar tudo sozinho.
          </div>
        </div>
      </main>
    </section>
  );
}