import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, IconButton } from "./Button";
import { Transition } from "@headlessui/react";

interface propsHero {
  title ?: string
}

const Hero = (props: Partial<propsHero>) => {
  const {title} = props;
  const [showBanner, setShowBanner] = useState(true);
  if(title){
    return (
      <>
        <div className="relative h-[640px] w-full bg-red-500/20 sm:h-[55vh] md:h-[640px]">
          <Image
            src="/img/bg.jpeg"
            alt="background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-neutral-900/70 flex flex-col justify-end">
            <div className="mx-auto max-w-screen-lg mb-10">
              <div className="flex flex-col items-center mb-40">
                <h1 className="text-xl font-bold uppercase tracking-wide text-white sm:text-3xl md:text-4xl lg:text-6xl">{title}</h1>
              </div>
            </div>
          </div>
        </div>
        <HeroBottomCard />
      </>
    );
  }
  return (
    <>
      <div className="relative h-[640px] w-full bg-red-500/20 sm:h-[55vh] md:h-[640px]">
        <Image
          src="/img/bg.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70 flex flex-col justify-end">
          <div className="mx-auto max-w-screen-lg mb-10">
            <div className="mb-1 min-h-[60px]">
              <HeroInnerBanner
                show={showBanner}
                onClose={() => setShowBanner(false)}
              />
            </div>
            <div className="mx-4 mt-5 flex flex-col items-center text-center gap-2">
              <h1 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Badan Eksekutif Mahasiswa
              </h1>
              <h1 className="text-xl font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl lg:text-4xl">
                Fakultas Sains dan Teknologi
              </h1>
            </div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  );
};

export default Hero;

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-center text-white shadow-lg md:rounded-full">
        <p>
          Selamat Datang di Official Website <span className="font-bold">BEMFAK SAINTEK</span> .
        </p>
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
      </div>
    </Transition>
  );
};


function HeroBottomCard() {
  return (
    <div className="bg-neutral-900 p-4">
      <span className="block text-center text-lg text-white uppercase">
        Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Muhammadiyah Gorontalo Periode 2021 / 2022
      </span>
    </div>
  );
}
