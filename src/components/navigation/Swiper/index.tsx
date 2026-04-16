'use client';

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import React, { useMemo, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper/bundle";
import { A11y, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export type CarouselBreakpoint = {
  /** Quantos slides por “linha” em cada breakpoint. */
  slidesPerView: number;
  /** Quantas linhas (grid) nesse breakpoint (padrão: 1). */
  rows?: number;
  /** Espaçamento em px (padrão: herda `spaceBetween`). */
  spaceBetween?: number;
};

export interface CarouselProps<T = unknown> {
  /** Itens genéricos para renderização. */
  items: T[];
  /** Renderizador de item. */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Título opcional acima do carrossel. */
  title?: string;
  /** Quantos slides por view no “base” (mobile). */
  slidesPerView?: number;
  /** Quantas linhas (grid) no “base” (mobile). */
  rows?: number;
  /** Espaçamento entre slides. */
  spaceBetween?: number;
  /** Loop infinito. */
  loop?: boolean;
  /** Exibir botões de navegação. */
  showNavigation?: boolean;
  /** Breakpoints do Swiper (xs→xl). Use chaves em px. */
  breakpoints?: Record<number, CarouselBreakpoint>;
  /** Classe aplicada ao container externo. */
  className?: string;
  /** Callback no slide change. */
  onSlideChange?: (swiper: SwiperType) => void;
}

/**
 * # Carousel (Swiper)
 *
 * Carrossel genérico e **flexível** baseado em `swiper`.
 * - **Responsivo** com `breakpoints` e **suporte a grid** (linhas);
 * - **Dark mode** via utilitários (`bg-background`, `text-foreground`);
 * - **Acessível**: usa módulo `A11y` e botões com `aria-label`;
 * - Navegação externa (botões) opcional.
 *
 * Exemplo simples:
 * ```tsx
 * <Carousel
 *   items={dados}
 *   renderItem={(it) => <Card {...it} />}
 *   breakpoints={{
 *     320: { slidesPerView: 1, rows: 1 },
 *     768: { slidesPerView: 2, rows: 1 },
 *     1024: { slidesPerView: 3, rows: 1 },
 *   }}
 * />
 * ```
 */
export default function Carousel<T>({
  items,
  renderItem,
  title,
  slidesPerView = 1,
  rows = 1,
  spaceBetween = 24,
  loop = false,
  showNavigation = true,
  breakpoints,
  className,
  onSlideChange,
}: CarouselProps<T>) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const computedBreakpoints = useMemo(() => {
    if (!breakpoints) return undefined;
    const map: Record<number, unknown> = {};
    Object.entries(breakpoints).forEach(([px, cfg]) => {
      map[Number(px)] = {
        slidesPerView: cfg.slidesPerView,
        grid: { rows: cfg.rows ?? 1, fill: "row" as const },
        spaceBetween: cfg.spaceBetween,
      };
    });
    return map;
  }, [breakpoints]);

  return (
    <>
      <div className={clsx("w-full", className)}>
        {(title || showNavigation) && (
          <div className="mb-4 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {title ? (
              <h3 className="text-base font-semibold text-foreground sm:text-lg md:text-xl">
                {title}
              </h3>
            ) : (
              <div />
            )}

            {showNavigation && (
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  ref={prevRef}
                  type="button"
                  aria-label="Anterior"
                  className={clsx(
                    "inline-flex items-center justify-center rounded-md border px-2.5 py-2",
                    "bg-background text-foreground border-foreground/20",
                    "hover:bg-foreground/5 transition",
                    isBeginning && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ArrowLeftIcon weight="bold" size={16} />
                </button>
                <button
                  ref={nextRef}
                  type="button"
                  aria-label="Próximo"
                  className={clsx(
                    "inline-flex items-center justify-center rounded-md border px-2.5 py-2",
                    "bg-background text-foreground border-foreground/20",
                    "hover:bg-foreground/5 transition",
                    isEnd && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ArrowRightIcon weight="bold" size={16} />
                </button>
              </div>
            )}
          </div>
        )}

        <Swiper
          modules={[Grid, Navigation, A11y]}
          // grid/base
          grid={{ rows, fill: "row" }}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={loop}
          // navigation via refs
          onBeforeInit={(swiper) => {
            // @ts-expect-error internal Swiper types
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error internal Swiper types
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
            onSlideChange?.(s);
          }}
          // @ts-expect-error internal Swiper types
          breakpoints={computedBreakpoints}
          className="w-full"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              {/* Card wrapper para manter padrão visual */}
              <div className="rounded-lg  h-full">{renderItem(item, idx)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
