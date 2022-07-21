import Image from "next/image";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

const Category = [
  "Universitas",
  "Fakultas",
  "Mahasiswa",
];

const Item = [
  {
    title: "BEMFAK Saintek",
    category: "Universitas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Fakultas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Mahasiswa",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Universitas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Fakultas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Mahasiswa",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Universitas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Fakultas",
    image: "/img/bg.jpeg",
  },
  {
    title: "BEMFAK Saintek",
    category: "Mahasiswa",
    image: "/img/bg.jpeg",
  },
];

export default function KabarBemfak() {
  return (
    <section id="kabar-bemfak">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase">Kabar Bemfak</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Lihat Semua
        </Button>
      </div>
      <div id="kabar-bemfak__categories" className="mb-4">
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel]}
          direction="horizontal"
          freeMode={true}
          mousewheel={true}
          scrollbar={{ draggable: true, hide: true }}
          slidesPerView="auto"
          spaceBetween={8}
          id="kabar-bemfak__categories__slider"
          className="!py-4"
        >
          <SwiperSlide className="!w-auto">
            <Chip label="Semua" active />
          </SwiperSlide>
          {Category.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chip label={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id="kabar-bemfak__items" className="!-m-4">
        <Swiper
          className="!p-4" // !p-4 to fix box-shadow cropping due to overflow:hidden
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            "475": {
              slidesPerView: 2,
            },
            "640": {
              slidesPerView: 3,
            },
            "1024": {
              slidesPerView: 4,
            },
          }}
        >
          {Item.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="/#">
                <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
                  <div className="relative block overflow-hidden  pt-[70%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-200 group-hover:scale-[102%]"
                    />
                  </div>

                  <div className="flex flex-col border-t p-4 dark:border-slate-600">
                    <h5 className="block truncate text-xl font-semibold capitalize">
                      {item.title}
                    </h5>
                    <span className="block truncate text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
