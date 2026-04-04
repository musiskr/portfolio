/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Writing from './components/Writing';
import CharacterArchive from './components/CharacterArchive';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import DecorativeLines from './components/DecorativeLines';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <CustomCursor />
      <DecorativeLines />
      <Header />
      <div className="grain-overlay"></div>
      <Hero />
      <About />
      <SelectedWork />
      <Writing />
      <CharacterArchive />
      <Footer />
    </div>
  );
}
