/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ProcessAndWhyUs } from './components/ProcessAndWhyUs';
import { HyderabadCoverage } from './components/HyderabadCoverage';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { FooterAndFloatingCTA } from './components/FooterAndFloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Header & Sticky Navigation with Official Logo */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Core Services Section */}
        <ServicesSection />

        {/* Fleet Showcase: Tata Ace, Eicher, Ashok Leyland */}
        <FleetSection />

        {/* Interactive Quote Calculator & WhatsApp Link Generator */}
        <QuoteCalculator />

        {/* Process (01, 02, 03) and Why Choose Us */}
        <ProcessAndWhyUs />

        {/* Hyderabad Localities */}
        <HyderabadCoverage />

        {/* Customer Reviews & Detailed FAQ Accordion */}
        <TestimonialsAndFaq />
      </main>

      {/* Contact Section, Footer & Floating Call/WhatsApp Buttons */}
      <FooterAndFloatingCTA />
    </div>
  );
}
