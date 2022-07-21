import React from "react";
import Image from "next/image";
import Link from "next/link";

const footerNav = {
  "Navigasi Cepat": [
    { title: "Profil", href: "/#" },
    { title: "Visi Misi", href: "/#" },
    { title: "Struktur Kepengurusan", href: "/#" },
    { title: "Kabar Bemfak", href: "/#" },
    { title: "Lensa Kegiatan", href: "/#" },
  ],
};

const SocialLinks = [
  {
    title: "Instagram",
    link: "https://instagram.com/",
    Icon: <InstagramIcon height={30} width={30} />,
  },
  {
    title: "Facebook",
    link: "https://facebook.com/",
    Icon: <FacebookIcon height={30} width={30} />,
  },
];

export const Footer = () => {
  return (
    <footer className="mt-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-6 md:!grid-cols-6 md:gap-8 xs:grid-cols-2">
          <div className="mb-4 flex flex-col xs:col-span-2">
            <span className="text-xl font-bold capitalize">BEMFAK SAINTEK</span>
            <p className="mt-4 max-w-screen-xs text-sm">
              Official website Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Muhammadiyah Gorontalo Periode 2021-2022.
            </p>
            <ul
              id="social-media-links"
              className="mt-4 flex items-center space-x-4"
            >
              {SocialLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    aria-label={`${item.title} profile`}
                    className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                  >
                    {item.Icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {Object.entries(footerNav).map(([title, items]) => {
            return (
              <div key={title}>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href}>
                        <a className="transition-all duration-150 hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white">
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          
          <div className="mb-4 flex xs:col-span-3 xs:justify-end gap-4">
            <Image src="/img/Logo.png" width={100} height={100} layout="fixed" />
            <Image src="/img/Logouniv.png" width={100} height={100} layout="fixed" />
          </div>

        </div>

        <div
          id="footer-copyright"
          className="mt-8 border-t border-slate-200 py-4 dark:border-slate-600"
        >
          <p className="text-center text-sm dark:text-gray-300">
            Copyright © 2022{" "}
            <Link href="/">
              <a
                className="font-semibold hover:text-indigo-800 hover:underline dark:hover:text-white"
              >
                BEMFAK - SAINTEK
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
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
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height, width, ...otherProps } = props;

  return (
    <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
      <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
    </svg>
  );
}
