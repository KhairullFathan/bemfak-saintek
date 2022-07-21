import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const topCompaniesItems = [
  {
    companyName: "Rempel and Sons",
    category: "Media & Marketing",
    image: "/img/08.jpg",
    logo: "/img/logo.jpg",
  },
  {
    companyName: "Dietrich, Beahan and Connelly",
    category: "Tourism",
    image: "/img/09.jpg",
    logo: "/img/logo.jpg",
  },
  {
    companyName: "Gutmann LLC",
    category: "Oil & Gas",
    image: "/img/10.jpg",
    logo: "/img/logo.jpg",
  },
  {
    companyName: "Kerluke Group",
    category: "Accounting",
    image: "/img/11.jpg",
    logo: "/img/logo.jpg",
  },
  {
    companyName: "Hahn LLC",
    category: "Food & Beverage",
    image: "/img/12.jpg",
    logo: "/img/logo.jpg",
  },
  {
    companyName: "Ziemann, Nicolas and Grady",
    category: "Construction",
    image: "/img/04.jpg",
    logo: "/img/logo.jpg",
  },
];

interface propsBidang {
  title : string,
  slug : string,
  member : object
}

export const Bidang = (props : Partial<propsBidang>) => {
  const {title, slug, member} = props;
  return (
    <>
      <div className="mb-8 flex items-center justify-between mt-10">
        <h2 className="text-2xl font-bold uppercase">{title}</h2>
      </div>
      <div id={`struktur-bemfak__${slug}`} className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "475": {
              slidesPerView: 1,
            },
            "640": {
              slidesPerView: 2,
            },
            "1024": {
              slidesPerView: 3,
            },
          }}
        >
          {member.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={`struktur-kepengurusan#struktur-bemfak__${slug}`} key={i}>
                <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden pt-[70%] md:h-[300px] lg:h-[500px]">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="relative flex flex-col border-t p-4 dark:border-slate-600 text-center">
                    <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg shadow-sm">
                      <div className="relative block overflow-hidden  bg-transparent pt-[100%]">
                        <Image
                          src="/img/Logo.png"
                          alt="Logo Bemfak Saintek"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </span>

                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.nama}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.jabatan}
                    </span>
                    <span className="flex justify-center my-4">
                      <a
                        href='https://instagram.com/'
                        aria-label={`ig profile`}
                        className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                        >
                        <InstagramIcon height={40} width={40} />
                      </a>
                      <a
                        href='https://instagram.com/'
                        aria-label={`ig profile`}
                        className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                        >
                        <FacebookIcon height={40} width={40} />
                      </a>
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
          {/* {topCompaniesItems.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="#" key={i}>
                <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden pt-[70%] md:h-[300px] lg:h-[500px]">
                    <Image
                      src={item.image}
                      alt={item.companyName}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
                    <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg shadow-sm">
                      <div className="relative block overflow-hidden  bg-transparent pt-[100%]">
                        <Image
                          src="/img/Logo.png"
                          alt={item.companyName}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </span>

                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.companyName}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                    <span className="flex justify-center my-4">
                      <a
                        href='https://instagram.com/'
                        aria-label={`ig profile`}
                        className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                        >
                        <InstagramIcon height={40} width={40} />
                      </a>
                      <a
                        href='https://instagram.com/'
                        aria-label={`ig profile`}
                        className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                        >
                        <FacebookIcon height={40} width={40} />
                      </a>
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </>
  );
};


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
      <circle cx="11.994" cy="11.979" r="3.003"></circle>
    </svg>
  );
}
