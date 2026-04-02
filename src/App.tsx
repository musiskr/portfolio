/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import SelectedWork from './components/SelectedWork';
import Writing from './components/Writing';
import CharacterArchive from './components/CharacterArchive';
import HowIWork from './components/HowIWork';
import IndustryPerspective from './components/IndustryPerspective';
import Photography from './components/Photography';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import DecorativeLines from './components/DecorativeLines';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            exit={{ opacity: 0, filter: 'blur(10px)' }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[999999] bg-bg flex items-center justify-center cursor-pointer"
            onClick={() => setHasEntered(true)}
          >
            <div className="text-center flex flex-col items-center">
              <h1 className="gothic-text text-accent tracking-[0.3em] text-2xl md:text-4xl animate-pulse drop-shadow-lg cursor-pointer">CLICK TO ENTER</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <DecorativeLines />
      <Header />
      <div className="grain-overlay"></div>
      <Hero />
      <About />
      <WhatIDo />
      <HowIWork />
      <SelectedWork />
      <Writing />
      <CharacterArchive />
      <IndustryPerspective />
      <Photography />
      <Footer />
    </div>
  );
}
