import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';
import KabarBemfak from '@/components/KabarBemfak';
import LensaKegiatan from '@/components/LensaKegiatan';

export default function Home() {
  return (
    <>
      <SEO title="BEMFAK SAINTEK" description='Website Resmi Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Muhammadiyah Gorontalo'/>
      <Hero />
      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
          <KabarBemfak />
          <LensaKegiatan />
        </div>
      </main>
      <Footer />
    </>
  );
}
