import React from 'react';
import Hero from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { TopCompanies } from '@/components/TopCompanies';
import SEO from '@/components/SEO';

export default function Profil() {
  return (
    <>
      <SEO title="Profil BEMFAK-SAINTEK" description='Website Resmi Badan Eksekutif Mahasiswa Fakultas Sains dan Teknologi Universitas Muhammadiyah Gorontalo'/>
      <Hero title='Visi & Misi'/>
      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
          
        </div>
      </main>
      <Footer />
    </>
  );
}