"use client";

import React, { useState, useEffect } from 'react';
import Features from '@/components/landingpage/features';
import Header from '@/components/landingpage/header';
import Hero from '@/components/landingpage/hero';
import Body from '@/components/landingpage/body';
import CTA from '@/components/landingpage/cta';
import Footer from '@/components/landingpage/footer';

const FieldServiceLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Header */}
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} scrollY={scrollY}/>

      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>

      {/* Body */}
      <Body/>
      
      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default FieldServiceLanding;