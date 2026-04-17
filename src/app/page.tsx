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
import GoogleMapsRender from "@/components/miscellaneous/GoogleMapsRender";
import GenericModal from "@/components/modals/GenericModal";
import Carousel from "@/components/navigation/Swiper";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  aboutMock,
  contactItems,
  contactMock,
  faqItems,
  footerGroups,
  footerMock,
  heroMock,
  imageUrls,
  navigationItems,
  qualificationItems,
  serviceGalleryItems,
  serviceItems,
  videoUrls,
  type ContactIconKey,
  type GalleryItem,
  type ProofIconKey,
  type QualificationItem,
  type ServiceIconKey,
} from "@/mocks/sgoLanding";
import {
  BuildingsIcon,
  ChartLineUpIcon,
  EnvelopeSimpleIcon,
  FileTextIcon,
  GearSixIcon,
  GlobeHemisphereWestIcon,
  MapPinIcon,
  MedalIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
  WhatsappLogoIcon,
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

const contactIconMap: Record<ContactIconKey, ReactNode> = {
  phone: <PhoneIcon size={28} weight="fill" className="text-secondary-600" />,
  whatsapp: (
    <WhatsappLogoIcon
      size={28}
      weight="fill"
      className="text-secondary-600"
    />
  ),
  email: (
    <EnvelopeSimpleIcon
      size={28}
      weight="fill"
      className="text-secondary-600"
    />
  ),
  location: (
    <MapPinIcon size={28} weight="fill" className="text-secondary-600" />
  ),
};

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderTextWithHighlights(text: string, highlights: string[] = []) {
  if (!highlights.length) {
    return text;
  }

  const orderedHighlights = [...highlights].sort((left, right) => {
    return right.length - left.length;
  });
  const highlightSet = new Set(orderedHighlights);
  const matcher = new RegExp(
    `(${orderedHighlights.map(escapeRegExp).join("|")})`,
    "g",
  );

  return text.split(matcher).map((part, index) => {
    if (highlightSet.has(part)) {
      return (
        <span key={`${part}-${index}`} className="font-semibold text-black">
          {part}
        </span>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
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
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<GalleryItem | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <main className="overflow-x-hidden bg-white pt-20 text-black">
      <div className="fixed inset-x-0 top-0 z-[100]">
        <LandingHeader.Root
          sticky={false}
          bordered={false}
          className="bg-primary-900 py-4 shadow-none"
        >
          <LandingHeader.Left className="gap-3">
            <LandingHeader.Logo
              src={logoImage.src}
              alt="SGO Engenharia & Consultoria"
              className="w-[180px] rounded-md scale-125 ml-8 "
            />
          </LandingHeader.Left>

          <LandingHeader.Center>
            <LandingHeader.Nav className="justify-end gap-8 text-white lg:gap-10">
              {navigationItems.map((item) => (
                <LandingHeader.Nav.Item key={item.href} href={item.href}>
                  {item.label}
                </LandingHeader.Nav.Item>
              ))}
            </LandingHeader.Nav>
          </LandingHeader.Center>

          <LandingHeader.Right className="gap-3 text-white">
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
              className="border border-white/30 bg-white/5 text-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            />
          </LandingHeader.Right>
        </LandingHeader.Root>

        <LandingHeader.MobileMenuPanel
          open={mobileMenuOpen}
          className="border-b border-white/10 bg-primary-950/96 text-white shadow-[0_20px_48px_rgba(3,7,18,0.34)] backdrop-blur-xl"
          cta={
            <Button
              type="button"
              label="Contato"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("contato");
              }}
              className="mx-auto rounded-full bg-secondary-500 px-7 py-3 text-black shadow-[0_16px_40px_rgba(125,139,183,0.28)]"
            />
          }
        >
          {navigationItems.map((item) => (
            <LandingHeader.Nav.Item
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white opacity-100 hover:text-secondary-200"
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
          containerClassName="!min-h-[82vh] bg-transparent"
        />
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-gray-900 via-primary-800/50 to-primary-500/18 flex flex-col items-center justify-center" />

        <div className="absolute inset-0 z-30">
          <div className="mx-auto my-auto min-h-[95vh] flex w-full max-w-7xl items-center justify-center2 px-6 pb-16 lg:px-8">
            <RevealContainer
              once
              className="pointer-events-auto m-auto space-y-8"
            >
              <Title
                content={heroMock.title}
                element="h1"
                className="max-w-[70vw] sm:max-w-[50vw]  xl:max-w-[40vw] text-center !text-3xl leading-[0.96] tracking-[-0.05em] text-white sm:!text-5xl"
              />

              <Paragraph
                content={heroMock.description}
                className="max-w-[70vw] sm:max-w-[50vw] xl:max-w-[40vw] text-center !text-lg md:!text-xl leading-[1.55] text-white/80"
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

      <div id="sobre" className="scroll-mt-8">
        <Section size="middle" sectionClassName="bg-white py-24">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <SplitText
                text={aboutMock.title}
                tag="h2"
                splitType="chars"
                delay={20}
                textAlign="center"
                className="block text-4xl font-bold text-black sm:text-5xl"
              />

              {aboutMock.paragraphs.map((paragraph, index) => (
                <Paragraph
                  key={paragraph}
                  content={renderTextWithHighlights(
                    paragraph,
                    aboutMock.paragraphHighlights?.[index] ?? [],
                  )}
                  className="max-w-[640px] text-black/70"
                />
              ))}

              <div className="space-y-3 pt-2">
                {aboutMock.highlights.map((item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-500" />
                    <Paragraph
                      content={renderTextWithHighlights(
                        item,
                        aboutMock.highlightEmphasis?.[index] ?? [],
                      )}
                      className="text-black/70"
                    />
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Button
                  type="button"
                  label="Entrar em contato"
                  onClick={() => scrollToSection("contato")}
                  className="!mx-auto !rounded-full !bg-secondary-500 !px-8 !py-4 !text-black"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="space-y-4">
                <RevealContainer
                  key="profile-reveal"
                  once
                  className="overflow-hidden rounded-[1.75rem] bg-[#f3f3f3] p-3"
                >
                  <Image
                    src="./imgs/profile.png"
                    alt="Profile"
                    width={400}
                    height={400}
                    unoptimized
                    className="h-auto w-full rounded-[1.25rem] object-cover "
                  />
                </RevealContainer>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div id="servicos" className="scroll-mt-8">
        <Section size="full" sectionClassName="bg-[#f5f5f5] pt-24">
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

            <div className="mt-14 grid gap-8 md:grid-cols-2">
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

            <RevealContainer once delay={1} className="mt-14">
              <div className="overflow-hidden sm:p-6">
                <div className="h-[480px] w-full sm:h-[480px]">
                  <Carousel
                    loop
                    autoplay
                    breakpoints={{
                      "640": {
                        rows: 1,
                        slidesPerView: 2,
                        spaceBetween: 12,
                      },
                      "768": {
                        rows: 1,
                        slidesPerView: 3,
                        spaceBetween: 16,
                      },
                      "1024": {
                        rows: 1,
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                    }}
                    items={serviceGalleryItems}
                    onSlideChange={() => {}}
                    renderItem={(item) => (
                      <button
                        type="button"
                        onClick={() => setSelectedGalleryItem(item)}
                        className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-white text-left shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-secondary-500/60"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={640}
                          height={640}
                          unoptimized
                          className="h-[240px] w-full object-cover sm:h-[310px] lg:h-[360px]"
                        />
                        <Subtitle
                          content={item.title}
                          className="!text-xs leading-tight text-black m-4"
                        />
                      </button>
                    )}
                    rows={1}
                    showNavigation
                    slidesPerView={1}
                    spaceBetween={16}
                    title="Galeria de processos"
                  />
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>
      </div>

      <GenericModal
        open={selectedGalleryItem !== null}
        onClose={() => setSelectedGalleryItem(null)}
        title={selectedGalleryItem?.title ?? ""}
        size="xl"
        className="!max-w-5xl bg-white"
        containerClassName="!w-[min(92vw,72rem)]"
      >
        {selectedGalleryItem && (
          <div className="space-y-4">
              <Image
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                width={1600}
                height={1200}
                unoptimized
                className="h-auto max-h-[72vh] w-full object-contain"
              />
          </div>
        )}
      </GenericModal>

      <div id="qualificacoes" className="scroll-mt-8">
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

      <div id="duvidas" className="scroll-mt-8">
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

      <div id="contato" className="scroll-mt-8">
        <Section size="full" sectionClassName="bg-white py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <SplitText
                text={contactMock.title}
                tag="h2"
                splitType="chars"
                delay={20}
                textAlign="center"
                className="block text-4xl font-bold text-black sm:text-5xl"
              />
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <Subtitle
                  content={contactMock.contactHeading}
                  className="text-2xl text-black sm:text-[2rem]"
                />

                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <RevealContainer
                      key={item.label}
                      once
                      delay={index + 1}
                      className="h-full"
                    >
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 rounded-[1.2rem] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1rem] bg-secondary-500/15">
                          {contactIconMap[item.iconKey]}
                        </div>
                        <div className="min-w-0">
                          <Paragraph
                            content={item.label}
                            className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45"
                          />
                          <Paragraph
                            content={item.value}
                            className="mt-1 text-base text-black/80 sm:text-lg"
                          />
                        </div>
                      </a>
                    </RevealContainer>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Subtitle
                  content={contactMock.locationHeading}
                  className="text-2xl text-black sm:text-[2rem]"
                />

                <RevealContainer once delay={2}>
                  <div className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-[0_18px_38px_rgba(0,0,0,0.06)]">
                    <GoogleMapsRender
                      title="Localização da SGO Engenharia & Consultoria"
                      address={contactMock.mapAddress}
                      aspect="4:3"
                      borderRadius={18}
                      minHeight={360}
                      zoom={15}
                    />
                  </div>
                </RevealContainer>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div>
        <Footer.Root bordered={false} className="bg-primary-900 text-white">
          <Footer.Top
            columns={3}
            className="border-b border-white/10 py-14 m-auto !max-w-6xl"
          >
            <Footer.Column className="items-center text-center sm:items-start sm:text-left">
              <Image
                src={logoImage}
                alt="SGO Engenharia & Consultoria"
                width={150}
                height={62}
                className="mx-auto w-[140px] rounded-md sm:mx-0"
              />
              <Paragraph
                content={footerMock.summary}
                className="mt-5 !max-w-[200px] !text-center !text-xs text-white/70 sm:!text-left"
              />
            </Footer.Column>

            {footerGroups.map((group) => (
              <Footer.Column
                key={group.title}
                className="items-center text-center sm:items-start sm:text-left"
              >
                <Subtitle content={group.title} className="mb-4 text-white" />
                <div className="flex flex-col items-center space-y-3 sm:items-start">
                  {group.items.map((item) => (
                    <a key={item.label} href={item.href}>
                      <Paragraph
                        content={item.label}
                        className="text-center text-sm text-white/70 transition-opacity hover:opacity-100 sm:text-left"
                      />
                    </a>
                  ))}
                </div>
              </Footer.Column>
            ))}
          </Footer.Top>

          <Footer.Bottom className="bg-primary-900">
            <div className="flex w-full flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <Paragraph
                content={`© ${currentYear} ${footerMock.copyright}`}
                className="text-center !text-xs text-white/55 sm:text-left"
              />
              <div className="flex justify-center gap-2 text-white/70 sm:justify-end">
                <span className="flex items-center justify-center gap-[6px] text-center text-xs text-white/55 sm:justify-start sm:text-left">
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
                      className="h-[30px] w-[75px] rounded-md"
                    />
                  </a>
                </span>
              </div>
            </div>
          </Footer.Bottom>
        </Footer.Root>
      </div>

      <a
        href={contactMock.whatsappFloatingHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a SGO Engenharia pelo WhatsApp"
        className="fixed bottom-8 right-5 z-[120] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_22px_55px_rgba(37,211,102,0.42)]"
      >
        <WhatsappLogoIcon size={32} weight="light" />
      </a>
    </main>
  );
}
