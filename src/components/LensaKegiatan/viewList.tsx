import Image from "next/image";
import Link from "next/link";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";

const Category = [
  "Kemahasiswaan",
  "Olahraga & Seni",
  "Pendukung",
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

export default function ViewList() {
  return (
    <section id="lensa-kegiatan">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold uppercase">Lensa Kegiatan</h2>
      </div>
      {/* !-m-4 to fix box-shadow cropping due to overflow:hidden */}
      <div id="lensa-kegiatan__items" className="grid grid-cols-4 gap-10">
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
      </div>
    </section>
  );
}
