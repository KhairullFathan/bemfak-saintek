import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FreeMode, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Bidang } from "./bidang";

const pengurusInti = {
  title : "Pengurus Inti Bemfak Saintek",
  slug : "pengurus_inti",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusKemahasiswaan = {
  title : "Pengurus Bidang Kemahasiswaan",
  slug : "pengurus_kemahasiswaan",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusKerohanian = {
  title : "Pengurus Bidang Kerohanian",
  slug : "pengurus_Kerohanian",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusAdvokasiHam = {
  title : "Pengurus Bidang Advokasi & Ham",
  slug : "pengurus_AdvokasiHam",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusOlahragaSeni = {
  title : "Pengurus Bidang Olahraga & Seni",
  slug : "pengurus_OlahragaSeni",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusHubunganMasyarakat = {
  title : "Pengurus Bidang Hubungan Masyarakat",
  slug : "pengurus_HubunganMasyarakat",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};
const pengurusPenalaranKeilmuan = {
  title : "Pengurus Bidang Penalaran & Keilmuan",
  slug : "pengurus_PenalaranKeilmuan",
  member : [
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
    {
      nama: "Widya Rizki A.H. Mantau",
      jabatan: "Ketua BEMFAK SAINTEK",
      image: "/img/10.jpg",
      intagramLink: "https://instagram.com/",
      facebookLink: "https://facebook.com/",
    },
  ],
};

export const Pengurus = () => {
  return (
    <section id="top-companies">
      <Bidang title={pengurusInti.title} slug={pengurusInti.slug} member={pengurusInti.member} />
      <Bidang title={pengurusKemahasiswaan.title} slug={pengurusKemahasiswaan.slug} member={pengurusKemahasiswaan.member} />
      <Bidang title={pengurusKerohanian.title} slug={pengurusKerohanian.slug} member={pengurusKerohanian.member} />
      <Bidang title={pengurusAdvokasiHam.title} slug={pengurusAdvokasiHam.slug} member={pengurusAdvokasiHam.member} />
      <Bidang title={pengurusOlahragaSeni.title} slug={pengurusOlahragaSeni.slug} member={pengurusOlahragaSeni.member} />
      <Bidang title={pengurusHubunganMasyarakat.title} slug={pengurusHubunganMasyarakat.slug} member={pengurusHubunganMasyarakat.member} />
      <Bidang title={pengurusPenalaranKeilmuan.title} slug={pengurusPenalaranKeilmuan.slug} member={pengurusPenalaranKeilmuan.member} />
    </section>
  );
};
