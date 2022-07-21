import Link from 'next/link';
import { Button } from '../Button';
import Logo from '../Logo';

import MenuPopOver from './MenuPopOver';

const navMenu = [
  {title : "Beranda", href: "/"},
  {title : "Profil", href: "/profil"},
  {title : "Visi & Misi", href: "/visi-misi"},
  {title : "Struktur Kepengurusan", href: "/struktur-kepengurusan"},
  {title : "Kabar Bemfak", href: "/kabar-bemfak"},
  {title : "Lensa Kegiatan", href: "/lensa-kegiatan"},
]

export default function index() {
  return (
    <>
      <header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900/75 sm:py-3 sm:px-8'>
        <MenuPopOver
          className='grow-0 basis-1/3'
          display='md:hidden'
          navMenu={navMenu}
        />
        <div className='flex shrink-0 grow-0 basis-1/3 justify-center md:justify-start'>
          <Link href='/'>
            <a className='my-auto flex w-[200px] md:ml-0'>
              <Logo />
            </a>
          </Link>
        </div>
        <div className='relative flex basis-2/3 justify-end gap-2'>
          <div className='hidden gap-2 md:ml-2 md:flex'>
            {navMenu.map((item) => {
              return (
                <Link href={item.href}>
                  <Button variant='ghost' as='a' className='cursor-pointer'>
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
