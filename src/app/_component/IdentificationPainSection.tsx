"use client";

import { useEffect, useRef, useState } from "react";

const painItems = [
  {
    icon: "◌",
    label: "Ansiedade constante",
    description:
      "Preocupação excessiva, mente acelerada e dificuldade de desacelerar mesmo nos momentos de descanso.",
  },
  {
    icon: "◌",
    label: "Exaustão emocional",
    description:
      "Cansaço que vai além do físico — a sensação de estar sempre tentando dar conta de tudo sozinho.",
  },
  {
    icon: "◌",
    label: "Alterações de humor",
    description:
      "Irritabilidade, oscilações emocionais e reações que parecem desproporcionais à situação.",
  },
  {
    icon: "◌",
    label: "Dificuldades na infância e adolescência",
    description:
      "Mudanças de comportamento, insegurança, crises emocionais ou sofrimento silencioso em fases de desenvolvimento.",
  },
  {
    icon: "◌",
    label: "Sono e descanso prejudicados",
    description:
      "Dificuldade para adormecer, despertar frequente ou sensação de nunca ter descansado de verdade.",
  },
  {
    icon: "◌",
    label: "Sofrimento silencioso",
    description:
      "A dor que não se nomeia facilmente, mas que está presente e merece ser acolhida com cuidado.",
  },
];

function PainCard({
  label,
  description,
  delay,
}: {
  label: string;
  description: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-3 px-7 py-6 rounded-2xl border transition-all duration-700 ease-out"
      style={{
        borderColor: "#D1B5E8",
        backgroundColor: "#FFFCFD",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionProperty: "opacity, transform",
      }}
    >
      {/* Accent line */}
      <span
        className="block w-6 h-[2px] rounded-full mb-1 transition-all duration-300 group-hover:w-10"
        style={{ backgroundColor: "#A97DCC" }}
      />
      <h3
        className="font-serif font-semibold text-base leading-snug"
        style={{ color: "#5A0012" }}
      >
        {label}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6F5F66" }}>
        {description}
      </p>
    </div>
  );
}

export default function IdentificationPainSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadlineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full py-24 md:py-32"
      style={{
        background:
          "linear-gradient(175deg, #F7F0FB 0%, #FFFCFD 55%, #F7F0FB 100%)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        {/* Header block */}
        <div
          ref={headlineRef}
          className="max-w-2xl mb-16 md:mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Eyebrow */}
          <span
            className="block text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#A97DCC" }}
          >
            Identificação e Acolhimento
          </span>

          <h2
            className="font-serif font-bold leading-tight tracking-tight mb-7"
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
              color: "#352A2F",
            }}
          >
            Nem sempre o sofrimento emocional aparece da mesma forma.
          </h2>

          <div
            className="w-10 h-[2px] rounded-full mb-7"
            style={{ backgroundColor: "#D1B5E8" }}
          />

          <p
            className="text-base md:text-lg leading-[1.85] mb-5"
            style={{ color: "#6F5F66" }}
          >
            Às vezes, ele se manifesta no cansaço constante, na dificuldade de
            desacelerar a mente, na irritabilidade, no excesso de preocupação ou
            na sensação de estar tentando dar conta de tudo sozinho.
          </p>
          <p
            className="text-base md:text-lg leading-[1.85]"
            style={{ color: "#6F5F66" }}
          >
            Em outras fases da vida, pode surgir em mudanças de comportamento,
            dificuldades emocionais, insegurança, crises ou sofrimento
            silencioso.
          </p>
        </div>

        {/* Pain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-16 md:mb-20">
          {painItems.map((item, i) => (
            <PainCard
              key={item.label}
              label={item.label}
              description={item.description}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="flex flex-col items-start gap-4 max-w-xl"
          style={{
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease-out 0.5s, transform 0.7s ease-out 0.5s",
          }}
        >
          <span
            className="block w-8 h-[2px] rounded-full"
            style={{ backgroundColor: "#A97DCC" }}
          />
          <p
            className="font-serif italic text-lg md:text-xl leading-relaxed"
            style={{ color: "#7A2030" }}
          >
            "Buscar ajuda no momento certo pode transformar a forma como o
            sofrimento é compreendido e cuidado."
          </p>
        </div>
      </div>
    </section>
  );
}
