"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  navigateToImage: (direction: 'next' | 'prev', currentIndex: number) => void;
  currentIndex: number;
  totalItems: number;
  allCards: Card[];
}>({
  onCardClose: () => {},
  navigateToImage: () => {},
  currentIndex: 0,
  totalItems: 0,
  allCards: [],
});

export const Carousel = ({ items, initialScroll = 0, allCards }: CarouselProps & { allCards: Card[] }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const navigateToImage = (direction: 'next' | 'prev', index: number) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (index + 1) % totalItems;
    } else {
      newIndex = (index - 1 + totalItems) % totalItems;
    }
    
    // Update current index
    setCurrentIndex(newIndex);
    
    // Scroll the carousel
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * newIndex;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    
    return newIndex;
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ 
        onCardClose: handleCardClose, 
        navigateToImage,
        currentIndex,
        totalItems,
        allCards,
      }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState(index);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, navigateToImage, totalItems, allCards } = useContext(CarouselContext);
  // Get the current card to display based on viewIndex
  const currentCard = open && allCards ? allCards[viewIndex] : card;

  const [imageLoading, setImageLoading] = useState(true);
  

  // Handle navigation within expanded view
  const handleNavigate = (direction: 'next' | 'prev') => {
    const newIndex = navigateToImage(direction, viewIndex);
    setViewIndex(newIndex);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      } else if (open && event.key === "ArrowRight") {
        handleNavigate('next');
      } else if (open && event.key === "ArrowLeft") {
        handleNavigate('prev');
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, viewIndex]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
    setViewIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(viewIndex); // Use viewIndex to sync carousel position
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNavigate('next'),
    onSwipedRight: () => handleNavigate('prev'),
    trackMouse: true
  });

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
              swipehandlers="true"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-neutral-900 p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              { /* Close button */}
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 inset-x-4 sm:inset-x-8 flex justify-between items-center z-20 -translate-y-1/2 pointer-events-none">
                <button 
                  onClick={() => handleNavigate('prev')}
                  className="p-1 sm:p-2 rounded-full bg-neutral-700/40 hover:bg-neutral-900/50 hover:scale-110 transition-all pointer-events-auto shadow-lg shadow-black/80 sm:shadow-black/80"
                  aria-label="Previous image"
                >
                  <IconArrowNarrowLeft className="h-8 w-8 text-white" />
                </button>
                <button 
                  onClick={() => handleNavigate('next')}
                  className="p-1 sm:p-2 rounded-full bg-neutral-700/40 hover:bg-neutral-900/50 hover:scale-110 transition-all pointer-events-auto shadow-lg shadow-black/80 sm:shadow-black/80"
                  aria-label="Next image"
                >
                  <IconArrowNarrowRight className="h-8 w-8 text-white" />
                </button>
              </div>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="px-3 py-1 bg-black/40 rounded-full text-sm text-white">
                  {viewIndex + 1} / {totalItems}
                </span>
              </div>

              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-slate-500 text-white dark:text-white"
              >
                {currentCard.category}
              </motion.p>
              {/* UNCOMMENT THIS IF THE PICTURES REQUIRE TITLES 
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-slate-800 md:text-5xl dark:text-slate-100"
              >
                {card.title}
              </motion.p> */}
              <div className="py-6 flex justify-center">
                <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                  <Image
                    src={currentCard.src}
                    alt={currentCard.title}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 95vw, 80vw"
                    onLoadingComplete={() => setImageLoading(false)}
                  />
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-600 border-t-white"/>
                    </div>
                  )}
                </div>
              </div>
              {/* <div className="py-10">{currentCard.content}</div> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[20rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          {/* UNCOMMENT THIS IF THE PICTURES REQUIRE TITLES
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p> */}
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill="true"
          className="absolute inset-0 z-20 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <Image
    src={src}
    alt={alt}
    fill      
    sizes="(max-width: 768px) 460px, (max-width: 1200px) 768px, 1200px"
    className={cn(
      "transition duration-300 absolute inset-0 object-cover",
      className,
    )}
    placeholder="blur"   // you can drop this if you don’t want the blur effect
    blurDataURL={src}    // quick-and-dirty: use the same file as low-res placeholder
    loading="lazy"
  />
);
