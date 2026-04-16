"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import SplitText from "@/components/animations-and-loading/SplittedText";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import VideoSection from "@/components/elements/VideoSection";
import { Accordeon } from "@/components/miscellaneous/Accordeon";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  aboutMock,
  faqItems,
  footerGroups,
  footerMock,
  heroMock,
  imageUrls,
  navigationItems,
  qualificationItems,
  serviceItems,
  videoUrls,
  type ProofIconKey,
  type QualificationItem,
  type ServiceIconKey,
} from "@/mocks/sgoLanding";
import {
  BuildingsIcon,
  ChartLineUpIcon,
  FileTextIcon,
  GearSixIcon,
  GlobeHemisphereWestIcon,
  MedalIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import logoImage from "../../public/imgs/logo.png";
import logoPLS from "../../public/imgs/logo_pls.png";

const serviceIcons: Record<ServiceIconKey, ReactNode> = {
  gear: (
    <GearSixIcon size={28} weight="duotone" className="text-secondary-600" />
  ),
  users: (
    <UsersThreeIcon size={28} weight="duotone" className="text-secondary-600" />
  ),
  file: (
    <FileTextIcon size={28} weight="duotone" className="text-secondary-600" />
  ),
  chart: (
    <ChartLineUpIcon
      size={28}
      weight="duotone"
      className="text-secondary-600"
    />
  ),
  shield: (
    <ShieldCheckIcon
      size={28}
      weight="duotone"
      className="text-secondary-600"
    />
  ),
  buildings: (
    <BuildingsIcon size={28} weight="duotone" className="text-secondary-600" />
  ),
};

const qualificationIconMap: Record<ProofIconKey, ReactNode> = {
  medal: (
    <MedalIcon size={24} weight="duotone" className="text-secondary-600" />
  ),
  globe: (
    <GlobeHemisphereWestIcon
      size={24}
      weight="duotone"
      className="text-secondary-500"
    />
  ),
  shield: (
    <ShieldCheckIcon
      size={24}
      weight="duotone"
      className="text-secondary-500"
    />
  ),
};

const qualificationIconOrder: ProofIconKey[] = [
  "medal",
  "shield",
  "globe",
  "medal",
  "shield",
  "globe",
];

const aboutImageCards = [
  {
    src: imageUrls.aboutPrimary,
    alt: "Soldagem industrial",
    width: 600,
    height: 600,
    wrapperClassName: "overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] p-3",
    imageClassName: "aspect-square w-full rounded-[1.25rem] object-cover",
  },
  {
    src: imageUrls.aboutSecondary,
    alt: "Profissional de soldagem",
    width: 600,
    height: 760,
    wrapperClassName: "overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] p-3",
    imageClassName:
      "h-[260px] w-full rounded-[1.25rem] object-cover sm:h-[320px]",
  },
  {
    src: imageUrls.aboutTertiary,
    alt: "Soldagem em processo",
    width: 600,
    height: 900,
    wrapperClassName: "overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] p-3",
    imageClassName:
      "h-[360px] w-full rounded-[1.25rem] object-cover sm:h-[500px]",
  },
] as const;

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function renderQualificationCard(
  item: QualificationItem,
  index: number,
): ReactNode {
  return (
    <div className="h-full rounded-[1.5rem] bg-[#ffffff] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-500/15">
          {qualificationIconMap[qualificationIconOrder[index]]}
        </div>
      </div>
      <Subtitle
        content={item.title}
        className="mt-5 text-xl leading-snug text-black"
      />
      <Paragraph content={item.text} className="mt-3 text-black/60" />
    </div>
  );
}

export default function SgoLandingHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <main className="overflow-x-hidden bg-white pt-20 text-black sm:pt-28">
      <div className="fixed inset-x-0 top-0 z-[100]">
        <LandingHeader.Root
          sticky={false}
          size="lg"
          bordered={false}
          className="bg-primary-900 py-4 shadow-none"
        >
          <LandingHeader.Left className="gap-3">
            <LandingHeader.Logo
              src={logoImage.src}
              alt="SGO Engenharia & Consultoria"
              className="w-[140px] rounded-md scale-125 ml-8 "
            />
          </LandingHeader.Left>

          <LandingHeader.Center>
            <LandingHeader.Nav className="justify-end gap-8 lg:gap-10">
              {navigationItems.map((item) => (
                <LandingHeader.Nav.Item key={item.href} href={item.href}>
                  {item.label}
                </LandingHeader.Nav.Item>
              ))}
            </LandingHeader.Nav>
          </LandingHeader.Center>

          <LandingHeader.Right className="gap-3">
            <div className="hidden md:block">
              <Button
                type="button"
                label="Contato"
                onClick={() => scrollToSection("contato")}
                className="!rounded-full !bg-secondary-500 !px-8 !py-3.5 !text-black"
              />
            </div>
            <LandingHeader.MobileMenuToggle
              open={mobileMenuOpen}
              onToggle={(nextOpen) =>
                setMobileMenuOpen(
                  (typeof nextOpen === "boolean"
                    ? nextOpen
                    : !mobileMenuOpen) as never,
                )
              }
            />
          </LandingHeader.Right>
        </LandingHeader.Root>

        <LandingHeader.MobileMenuPanel
          open={mobileMenuOpen}
          cta={
            <Button
              type="button"
              label="Contato"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("contato");
              }}
              className="mx-auto rounded-full bg-black px-7 py-3 text-white"
            />
          }
        >
          {navigationItems.map((item) => (
            <LandingHeader.Nav.Item
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </LandingHeader.Nav.Item>
          ))}
        </LandingHeader.MobileMenuPanel>
      </div>

      <section className="relative overflow-hidden ">
        <VideoSection
          size="full"
          videoUrl={videoUrls.hero}
          posterUrl={imageUrls.hero}
          backgroundOnly
          showOverlay={false}
          showPlayPauseButton={false}
          containerClassName="!min-h-[80vh] bg-transparent"
        />
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-gray-900 via-primary-800/50 to-primary-500/18" />

        <div className="absolute inset-0 z-30">
          <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center justify-center px-6 pb-16 lg:px-8">
            <RevealContainer
              once
              className="pointer-events-auto m-auto space-y-8"
            >
              <Title
                content={heroMock.title}
                element="h1"
                className="max-w-[70vw] sm:max-w-[60vw]  text-center text-[3.4rem] leading-[0.96] tracking-[-0.05em] text-white sm:text-[4.35rem] lg:text-[5.45rem]"
              />

              <Paragraph
                content={heroMock.description}
                className="max-w-[70vw] sm:max-w-[60vw] text-center  text-lg leading-[1.55] text-white/80 lg:text-[1.06rem]"
              />

              <FadeContainer
                once
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <Button
                  type="button"
                  label="Entre em contato"
                  onClick={() => scrollToSection("contato")}
                  className="!rounded-full !bg-secondary-500 !px-8 !py-4 !text-black !shadow-none"
                />
                <Button
                  type="button"
                  label="Nossos serviços"
                  variant="outlined"
                  onClick={() => scrollToSection("servicos")}
                  className="!rounded-full !border-2 !border-white !bg-transparent !px-8 !py-4 !text-white"
                />
              </FadeContainer>
            </RevealContainer>
          </div>
        </div>
      </section>

      <div id="sobre">
        <Section size="middle" sectionClassName="bg-white py-24">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <SplitText
                text={aboutMock.title}
                tag="h2"
                splitType="chars"
                delay={20}
                textAlign="left"
                className="block text-4xl font-bold text-black sm:text-5xl"
              />

              {aboutMock.paragraphs.map((paragraph) => (
                <Paragraph
                  key={paragraph}
                  content={paragraph}
                  className="max-w-[640px] text-black/70"
                />
              ))}

              <div className="space-y-3 pt-2">
                {aboutMock.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-500" />
                    <Paragraph content={item} className="text-black/70" />
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button
                  type="button"
                  label="Saiba mais"
                  onClick={() => scrollToSection("qualificacoes")}
                  className="!rounded-full !bg-secondary-500 !px-8 !py-4 !text-black"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {aboutImageCards.slice(0, 2).map((card, index) => (
                    <RevealContainer
                      key={card.alt}
                      once
                      delay={index + 1}
                      className={card.wrapperClassName}
                    >
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={card.width}
                        height={card.height}
                        unoptimized
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className={card.imageClassName}
                      />
                    </RevealContainer>
                  ))}
                </div>

                <div className="pt-8">
                  <RevealContainer
                    once
                    delay={3}
                    className={aboutImageCards[2].wrapperClassName}
                  >
                    <Image
                      src={aboutImageCards[2].src}
                      alt={aboutImageCards[2].alt}
                      width={aboutImageCards[2].width}
                      height={aboutImageCards[2].height}
                      unoptimized
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className={aboutImageCards[2].imageClassName}
                    />
                  </RevealContainer>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div id="servicos">
        <Section size="full" sectionClassName="bg-[#f5f5f5] py-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <SplitText
                text="Nossos Serviços"
                tag="h2"
                splitType="chars"
                delay={20}
                textAlign="center"
                className="block text-4xl font-bold text-black sm:text-5xl"
              />
              <Paragraph
                content="Soluções completas para coordenação e gestão de qualidade em soldagem"
                className="mx-auto mt-4 max-w-2xl text-black/65"
              />
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((item, index) => (
                <RevealContainer
                  key={item.title}
                  once
                  delay={index + 1}
                  className="h-full"
                >
                  <div className="h-full rounded-[1.5rem] bg-white p-8 shadow-[0_14px_35px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-500/15">
                      {serviceIcons[item.iconKey]}
                    </div>
                    <Subtitle
                      content={item.title}
                      className="mt-6 text-xl leading-snug text-black"
                    />
                    <Paragraph
                      content={item.text}
                      className="mt-3 text-black/60"
                    />
                  </div>
                </RevealContainer>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <div id="qualificacoes">
        <Section size="middle" sectionClassName="bg-white py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SplitText
              text="Qualificações e Normas"
              tag="h2"
              splitType="chars"
              delay={20}
              textAlign="center"
              className="block text-4xl font-bold text-black sm:text-5xl"
            />
            <Paragraph
              content="Atendemos às principais normas técnicas nacionais e internacionais"
              className="mx-auto mt-4 max-w-2xl text-black/65"
            />
          </div>

          <div className="mt-14 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualificationItems.map((item, index) => (
              <RevealContainer
                key={item.title}
                once
                delay={index + 1}
                className="h-full"
              >
                {renderQualificationCard(item, index)}
              </RevealContainer>
            ))}
          </div>
        </Section>
      </div>

      <div id="duvidas">
        <Section size="full" sectionClassName="bg-[#f7f7f7] py-24">
          <div className="mx-auto w-full max-w-4xl">
            <div className="mx-auto max-w-3xl text-center">
              <SplitText
                text="Ficou com alguma dúvida?"
                tag="h2"
                splitType="chars"
                delay={20}
                textAlign="center"
                className="block text-4xl font-bold text-black sm:text-5xl"
              />
              <Paragraph
                content="Veja abaixo as perguntas mais comuns."
                className="mx-auto mt-4 max-w-2xl text-black/65"
              />
            </div>

            <div className="mt-12">
              <Accordeon
                questions={faqItems}
                allowMultiple={false}
                defaultOpen={[]}
                maxWidthClassName="max-w-3xl"
                className="!border-none bg-transparent p-0 !shadow-none"
                itemClassName="mb-4 rounded-[1.35rem] bg-white px-7 py-1 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
                showDividers={false}
                animateItems
              />
            </div>
          </div>
        </Section>
      </div>

      <div id="contato">
        <Footer.Root bordered={false} className="bg-primary-900 text-white">
          <Footer.Top
            columns={3}
            className="border-b border-white/10 py-14 m-auto !max-w-6xl"
          >
            <Footer.Column className="items-start">
              <Image
                src={logoImage}
                alt="SGO Engenharia & Consultoria"
                width={150}
                height={62}
                className="w-[140px] rounded-md"
              />
              <Paragraph
                content={footerMock.summary}
                className="mt-5 !max-w-[280px] !text-xs text-white/70"
              />
            </Footer.Column>

            {footerGroups.map((group) => (
              <Footer.Column key={group.title} className="items-start">
                <Subtitle content={group.title} className="mb-4 text-white" />
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <a key={item.label} href={item.href}>
                      <Paragraph
                        content={item.label}
                        className="text-sm text-white/70 transition-opacity hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </Footer.Column>
            ))}
          </Footer.Top>

          <Footer.Bottom className="bg-primary-900">
            <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
              <Paragraph
                content={`© ${currentYear} ${footerMock.copyright}`}
                className="text-sm text-white/55"
              />
              <div className="flex  gap-2 text-white/70">
                <span className="text-xs text-white/55 flex items-center gap-[6px]">
                  Desenvolvido por{" "}
                  <a
                    href="https://www.plssistemas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/80 inline-flex items-center gap-1 transition-opacity hover:opacity-100"
                  >
                    <Image
                      src={logoPLS}
                      alt="PLS Sistemas"
                      width={75}
                      height={30}
                      className="w-[75px] h-[30px] rounded-md"
                    />
                  </a>
                </span>
              </div>
            </div>
          </Footer.Bottom>
        </Footer.Root>
      </div>
    </main>
  );
}
