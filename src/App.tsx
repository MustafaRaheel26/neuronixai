/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CourseOverview } from './components/CourseOverview';
import { WhyChoose } from './components/WhyChoose';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <CourseOverview />
        <WhyChoose />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

