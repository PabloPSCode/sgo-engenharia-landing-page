import type { QuestionItem } from "@/components/miscellaneous/Accordeon";

export type NavigationItem = {
  href: string;
  label: string;
};

export type ContentItem = {
  title: string;
  text: string;
};

export type ServiceIconKey =
  | "gear"
  | "users"
  | "file"
  | "chart"
  | "shield"
  | "buildings";

export type ProofIconKey = "medal" | "globe" | "shield";

export type ServiceItem = ContentItem & {
  iconKey: ServiceIconKey;
};

export type GalleryItem = {
  image: string;
  text: string;
};

export type ProofItem = ContentItem & {
  iconKey: ProofIconKey;
};

export type FooterGroup = {
  title: string;
  items: NavigationItem[];
};

export type QualificationItem = {
  category: string;
  title: string;
  text: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#qualificacoes", label: "Qualificações" },
];

export const imageUrls = {
  hero:
    "https://images.unsplash.com/photo-1730584474401-5a03c6d1b2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  aboutPrimary:
    "https://images.unsplash.com/photo-1683470156393-8c9d91eb5e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  aboutSecondary:
    "https://images.unsplash.com/photo-1587407500768-d079e2abc0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  aboutTertiary:
    "https://images.unsplash.com/photo-1569950044239-51ead24e2c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
};

export const videoUrls = {
  hero: "/videos/welding.mp4",
};

export const heroMock = {
  title: "Excelência em soldagem e gestão da qualidade",
  description:
    "Consultoria, gerenciamento de qualidade e desenvolvimento de processos de soldagem.",
};

export const aboutMock = {
  eyebrow: "Quem somos",
  title: "Quem Somos",
  paragraphs: [
    "Somos uma empresa formada por profissionais altamente qualificados, com sólida formação acadêmica e ampla experiência prática nas áreas de engenharia, qualidade e processos de soldagem.",
  ],
  highlights: [
    "Graduação em Engenharia Mecânica e Gestão da Qualidade.",
    "Pós-graduação em Tecnologia e Qualificação em Soldagem (IWE/IIW) pela UFMG.",
    "MBA em Coaching Aplicado à Gestão de Pessoas.",
    "Mais de 30 anos de experiência em construção e montagem industrial.",
  ],
};

export const serviceItems: ServiceItem[] = [
  {
    iconKey: "gear",
    title: "Padronização de Processos",
    text: "Desenvolvimento e implementação de soluções tecnológicas para padronização dos processos de soldagem com foco na redução de custos.",
  },
  {
    iconKey: "users",
    title: "Suporte Técnico em Obra",
    text: "Suporte técnico direto aos Supervisores de Soldagem, assegurando conformidade com procedimentos qualificados (EPS/RQPS).",
  },
  {
    iconKey: "file",
    title: "Qualificação de Procedimentos",
    text: "Desenvolver e qualificar EPS/RQPS em conformidade com requisitos normativos aplicáveis (ASME, API, AWS).",
  },
  {
    iconKey: "chart",
    title: "Estudos de Produtividade",
    text: "Análise dos parâmetros de soldagem visando maximização da eficiência da mão de obra e equipamentos.",
  },
  {
    iconKey: "shield",
    title: "Gestão da Qualidade",
    text: "Desenvolvimento do Plano da Qualidade (PCQ) conforme ISO 9001, ISO 14001 e ISO 45001.",
  },
  {
    iconKey: "buildings",
    title: "Auditorias e Inspeções",
    text: "Realização de auditorias internas e externas, inspeções visuais e acompanhamento de ensaios não destrutivos (ENDs).",
  },
];

export const serviceGalleryItems: GalleryItem[] = [
  {
    image: "/imgs/welding1.png",
    text: "Padronizacao",
  },
  {
    image: "/imgs/welding2.png",
    text: "Suporte tecnico",
  },
  {
    image: "/imgs/welding3.png",
    text: "Procedimentos",
  },
  {
    image: "/imgs/welding4.png",
    text: "Produtividade",
  },
  {
    image: "/imgs/welding.5png.png",
    text: "Qualidade",
  },
];

export const proofItems: ProofItem[] = [
  {
    iconKey: "medal",
    title: "Mais de 30 anos em construção e montagem industrial",
    text: "Experiência consolidada em projetos de grande porte, com atuação técnica voltada para qualidade, segurança e produtividade.",
  },
  {
    iconKey: "globe",
    title: "Formação apoiada por referências nacionais e internacionais",
    text: "Capacitação complementar em instituições como GULLCO, Hobart Brothers, Lincoln Electric, Miller Electric, ESAB e Fronius.",
  },
  {
    iconKey: "shield",
    title: "Conformidade com normas e sistemas integrados",
    text: "Atuação técnica alinhada às exigências ASME, API, ABNT e aos requisitos ISO 9001, ISO 14001 e ISO 45001.",
  },
];

export const qualificationItems: QualificationItem[] = [
  {
    category: "Qualificação",
    title: "ASME IX",
    text: "Qualification Standard For Welding, Brazing, and Fusing Procedures.",
  },
  {
    category: "Tubulação",
    title: "ASME B31.1 / B31.3 / B31.8",
    text: "Power Piping, Process Piping e Gas Transmission.",
  },
  {
    category: "Tanques",
    title: "API 650 / NBR 7821",
    text: "Welded Tanks for Oil Storage e armazenamento de petróleo.",
  },
  {
    category: "Vasos de Pressão",
    title: "ASME I / VIII Div. 1 & 2",
    text: "Power Boilers e Pressure Vessels.",
  },
  {
    category: "Sistema de Gestão",
    title: "ISO 9001 / 14001 / 45001",
    text: "Qualidade, Meio Ambiente e Segurança do Trabalho.",
  },
  {
    category: "Formação Internacional",
    title: "IWE/IIW - UFMG",
    text: "International Welding Engineer certificado.",
  },
];

export const faqItems: QuestionItem[] = [
  {
    question: "Quais normas técnicas vocês trabalham?",
    answer:
      "Trabalhamos com as principais normas nacionais e internacionais: ASME IX, ASME B31 (séries), API 650, ABNT NBR 7821, ASME I e VIII, além de atender aos requisitos das normas ISO 9001, ISO 14001 e ISO 45001.",
  },
  {
    question: "Qual é a experiência da equipe?",
    answer:
      "Nossa equipe possui mais de 30 anos de experiência em construção e montagem industrial, com formação em Engenharia Mecânica, pós-graduação IWE/IIW pela UFMG e especializações internacionais em processos de soldagem.",
  },
  {
    question: "Quais serviços são oferecidos?",
    answer:
      "Oferecemos coordenação e consultoria em soldagem, qualificação de procedimentos (EPS/RQPS), gestão da qualidade, auditorias internas e externas, desenvolvimento de processos, estudos de produtividade e elaboração de documentação técnica.",
  },
  {
    question: "Atendem projetos em todo o Brasil?",
    answer:
      "Sim! Atuamos em projetos de grande porte em todo o território nacional, oferecendo suporte técnico in loco e soluções customizadas para cada obra.",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Serviços",
    items: [
      { href: "#servicos", label: "Consultoria" },
      { href: "#servicos", label: "Qualificação" },
      { href: "#servicos", label: "Auditorias" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { href: "#sobre", label: "Quem somos" },
      { href: "#qualificacoes", label: "Qualificações" },
      { href: "#qualificacoes", label: "Projetos" },
    ],
  },
];

export const footerMock = {
  summary: "Excelência em soldagem e gestão da qualidade industrial",
  copyright:
    "SGO - Soldagem e Gestão da Qualidade. Todos os direitos reservados.",
  note: "Certificações IWE/IIW - ISO 9001/14001/45001",
};
