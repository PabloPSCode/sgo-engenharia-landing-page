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
  title: string;
  description: string;
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

export type QualityItem = {
  title: string;
  points: string[];
};

export type ContactIconKey = "phone" | "whatsapp" | "email" | "location";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  iconKey: ContactIconKey;
};

export const navigationItems: NavigationItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#normas-tecnicas", label: "Nomas Técnicas" },
  { href: "#qualificacoes", label: "Qualidade SGO" },
];

export const imageUrls = {
  hero: "https://images.unsplash.com/photo-1730584474401-5a03c6d1b2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
  eyebrow: "Sobre",
  title: "Sobre a SGO Engenharia & Consultoria",
  paragraphs: [
    "Somos uma empresa formada por profissionais altamente qualificados, com sólida formação acadêmica e ampla experiência prática nas áreas de engenharia, qualidade e processos de soldagem. Nossa equipe conta com:",
  ],
  highlights: [
    "Graduação em Engenharia Mecânica e Gestão da Qualidade.",
    "Formação tecnológica em Soldagem pelo Centro Educacional Roberto Porto (CERP – MG).",
    "Pós-graduação em Tecnologia e Qualificação em Soldagem (IWE/IIW) pela UFMG.",
    "MBA em Coaching Aplicado à Gestão de Pessoas.",
    "Especialização em novas diretrizes, tecnologias e desafios em processos de soldagem, com capacitação pela Lincoln Electric do Brasil.",
    "Mais de 30 anos de experiência em construção e montagem industrial em projetos de grande porte.",
    "Especialização em processos de soldagem ao arco elétrico, com formação complementar em instituições de referência internacional, como: GULLCO (Newmarket, Ontario - Canadá), Hobart Brothers (Troy, Ohio - EUA), Lincoln Electric (Cleveland, Ohio - EUA), Miller Electric (Appleton, Wisconsin - EUA), ESAB (CONTAGEM-BRA), FRONIUS (AUSTRIA)",
  ],
  highlightEmphasis: [
    ["Engenharia Mecânica e Gestão da Qualidade"],
    ["Soldagem"],
    ["Tecnologia e Qualificação em Soldagem (IWE/IIW)"],
    ["Coaching Aplicado à Gestão de Pessoas"],
    ["novas diretrizes, tecnologias e desafios em processos de soldagem"],
    ["Mais de 30 anos de experiência"],
    ["processos de soldagem ao arco elétrico"],
  ],
  paragraphHighlights: [],
};

export const serviceItems: ServiceItem[] = [
  {
    iconKey: "gear",
    title: "Padronização e Otimização de Processos",
    text: "Desenvolver e implementar soluções tecnológicas que promovam padronização dos processos de soldagem, com foco na redução de custos e aumento da produtividade.",
  },
  {
    iconKey: "users",
    title: "Suporte Técnico em Soldagem nas Obras Eletromecânica Industrial",
    text: "Prestar suporte técnico direto e contínuo aos Supervisores de Soldagem nas obras, assegurando a correta aplicação dos processos de soldagem, a conformidade com os procedimentos qualificados (EPS/RQPS).",
  },
  {
    iconKey: "file",
    title:
      "Estudo de Produtividade / Controle de Equipamentos de Soldagem",
    text: "Realizar estudos dos parâmetros de soldagem visando à maximização da eficiência da mão de obra e dos equipamentos destinados ao projeto.",
  },
  {
    iconKey: "chart",
    title: "Suporte Técnico e Normativo",
    text: "Desenvolver e qualificar EPS /RQPS em conformidade com o Escopo das Obras, assegurando o cumprimento rigoroso dos requisitos normativos aplicáveis.",
  },
  {
    iconKey: "shield",
    title: "Dimensionamento e Gestão de Recursos",
    text: "Dimensionar adequadamente equipes de soldagem, equipamentos e consumíveis em cada obra, garantindo eficiência operacional, cumprimento de prazos e qualidade técnica.",
  },
  {
    iconKey: "buildings",
    title: "Capacitação Técnica",
    text: "Supervisionar de forma abrangente os processos de soldagem, realizando inspeções visuais e utilizando equipamentos especializados para garantir a qualidade do produto final, conforme normas e especificações.",
  },
];

export const serviceGalleryItems: GalleryItem[] = [
  {
    image: "/imgs/welding1.png",
    title: "Processo FCAW-G em tubulação industrial.",
    description:
      "Registro visual de processos organizados para garantir repetibilidade, controle técnico e redução de desvios em campo.",
  },
  {
    image: "/imgs/welding2.png",
    title:
      "Bizeladeira mecanizada em confecção da geometria do bizel mecanizado.",
    description:
      "Acompanhamento próximo da execução para orientar equipes, validar parâmetros e manter conformidade com os procedimentos.",
  },
  {
    image: "/imgs/welding3.png",
    title: "Processo FCAW-G mecanizado em tubulação industrial e pipeline.",
    description:
      "Desenvolvimento e validação de EPS/RQPS com foco em segurança operacional, desempenho do processo e rastreabilidade.",
  },
  {
    image: "/imgs/welding4.png",
    title: "GTAW Tig orbital para soldagem de tubução industrial.",
    description:
      "Avaliação das condições de soldagem e da operação para melhorar rendimento, reduzir retrabalho e otimizar recursos.",
  },
  {
    image: "/imgs/welding5.png",
    title:
      "Solda em virador de tubo com dispositivo auxiliar utilizando processos FCAW e GMAW.",
    description:
      "Inspeções, auditorias e acompanhamento técnico para sustentar padrões de qualidade ao longo de toda a execução.",
  },
  {
    image: "/imgs/welding6.png",
    title: "Processo de soldagem Mecaniado para Caldeiraria industrial.",
    description:
      "Registro visual de processos organizados para garantir repetibilidade, controle técnico e redução de desvios em campo.",
  },
  {
    image: "/imgs/welding7.png",
    title:
      "Processo de soldagem Semiautomatico GMAW-CCC / FCAW-G e FCAW-S em tubulação industrial e duto terrestre.",
    description:
      "Registro visual de processos organizados para garantir repetibilidade, controle técnico e redução de desvios em campo.",
  },
  {
    image: "/imgs/welding8.png",
    title: "Processo de soldagem Mecanizado em Tubulação e Dutos.",
    description:
      "Registro visual de processos organizados para garantir repetibilidade, controle técnico e redução de desvios em campo.",
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
    text: "Norma de qualificação para procedimentos de soldagem, brasagem e fusão, para soldadores, brasadores e operadores de soldagem, brasagem e fusão.",
  },
  {
    category: "Tubulação de Processos",
    title: "ASME B31.1",
    text: "Power Piping para sistemas de tubulação aplicados a processos industriais e utilidades.",
  },
  {
    category: "Tubulação de Processos",
    title: "ASME B31.3 / B31.8",
    text: "Process Piping e Gas Transmission and Distribution Piping Systems para linhas de processo e dutos.",
  },
  {
    category: "Soldagem de Tanques",
    title: "API 650",
    text: "Welded Tanks for Oil Storage aplicável à fabricação e montagem de tanques soldados para armazenamento.",
  },
  {
    category: "Soldagem de Tanques",
    title: "ABNT NBR 7821",
    text: "Tanques soldados para armazenamento de petróleo e derivados, conforme requisitos aplicáveis ao contexto nacional.",
  },
  {
    category: "Caldeiras e Vasos de Pressão",
    title: "ASME I / ASME VIII Div. 1 e 2",
    text: "Rules for Construction of Power Boilers e Rules for Construction of Pressure Vessels aplicáveis a filtros de processos, caldeiras, vasos de pressão e fornos.",
  },
];

export const qualityItems: QualityItem[] = [
  {
    title: "Planejamento da Qualidade na Obra",
    points: [
      "Desenvolver o Plano da Qualidade da Obra (PCQ) conforme exigências contratuais e normativas, incluindo ISO 9001, ISO 14001 e ISO 45001.",
      "Definir critérios de aceitação, métodos de inspeção e controles aplicáveis aos processos construtivos.",
      "Identificar riscos e oportunidades relacionados à qualidade, propondo ações preventivas.",
    ],
  },
  {
    title: "Controle da Qualidade dos Processos e Produtos",
    points: [
      "Monitorar e controlar etapas críticas da obra, como recebimento de materiais, montagem, soldagem, testes e ensaios.",
      "Garantir a rastreabilidade de materiais, componentes e processos produtivos.",
      "Acompanhar e validar inspeções visuais, dimensionais, ENDs e registros de conformidade.",
    ],
  },
  {
    title: "Gestão de Não Conformidades e Ações Corretivas",
    points: [
      "Identificar, registrar e tratar não conformidades internas e externas.",
      "Conduzir análises de causa raiz e implementar ações corretivas e preventivas.",
      "Elaborar relatórios técnicos e indicadores de desempenho da qualidade.",
    ],
  },
  {
    title: "Apoio à Qualificação Técnica",
    points: [
      "Participar da qualificação de procedimentos (EPS e RQPS) e de profissionais, como soldadores, inspetores e operadores.",
      "Validar documentos técnicos relacionados à execução dos serviços, incluindo ITs, PIT, fichas de verificação e checklists.",
      "Fazer interface com Inspetores Nível 2 de soldagem, Inspetores Nível 3 END e laboratórios para ensaios e estudos de caso.",
    ],
  },
  {
    title: "Treinamento e Conscientização",
    points: [
      "Promover treinamentos e diálogos de qualidade com as equipes de obra.",
      "Disseminar a cultura da qualidade e o compromisso com o SGI entre colaboradores, terceiros e fornecedores.",
    ],
  },
  {
    title: "Implantação e Manutenção do SGI na Obra",
    points: [
      "Apoiar na adequação e implementação dos requisitos das normas ISO 9001, ISO 14001 e ISO 45001.",
      "Integrar processos e procedimentos das áreas de Qualidade, Segurança e Meio Ambiente.",
      "Assegurar a conformidade documental e operacional do SGI junto ao corporativo e auditorias.",
    ],
  },
  {
    title: "Auditorias e Melhoria Contínua",
    points: [
      "Participar de auditorias internas e externas, acompanhando planos de ação corretiva.",
      "Conduzir reuniões de análise crítica da qualidade com a equipe de obra.",
      "Sugerir melhorias nos processos e promover a padronização de boas práticas.",
    ],
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

export const contactMock = {
  title: "Contato",
  contactHeading: "Informações de contato",
  locationHeading: "Onde estamos",
  companyName: "SGO Engenharia & Consultoria",
  companyDescription:
    "Atendimento especializado em soldagem, engenharia mecânica e gestão da qualidade para projetos industriais.",
  addressSummary: "Av. Isaac Cassimiro Gomes, nº 1463",
  serviceArea:
    "Atendimento consultivo para Minas Gerais e demais regiões do Brasil.",
  mapAddress: "Av. Isac Casemiro Gomes, 1463 - Loanda, João Monlevade - MG, 35930-357",
  whatsappFloatingHref:
    "https://wa.me/5531975454901?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20SGO%20Engenharia",
};

export const contactItems: ContactItem[] = [
  {
    label: "Telefone",
    value: "(31) 97545-4901",
    href: "tel:+5531975454901",
    iconKey: "phone",
  },
  {
    label: "WhatsApp",
    value: "(31) 97364-4140",
    href: "https://wa.me/5531973644140",
    iconKey: "whatsapp",
  },
  {
    label: "E-mail",
    value: "sgoengenharialtda@gmail.com",
    href: "mailto:sgoengenharialtda@gmail.com",
    iconKey: "email",
  },
  {
    label: "Endereço",
    value: "Av. Isaac Cassimiro Gomes, nº 1463",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Isaac+Cassimiro+Gomes,+1463",
    iconKey: "location",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Serviços",
    items: [
      { href: "#servicos", label: "Consultoria" },
      { href: "#servicos", label: "Auditorias" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { href: "#sobre", label: "Sobre" },
      { href: "#normas-tecnicas", label: "Nomas Técnicas" },
      { href: "#qualificacoes", label: "Qualidade SGO" },
    ],
  },
];

export const footerMock = {
  summary: "Excelência em soldagem e gestão da qualidade industrial",
  copyright: "SGO - Soldagem e Gestão da Qualidade.",
  note: "Certificações IWE/IIW - ISO 9001/14001/45001",
};
