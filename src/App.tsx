import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Services from './components/Services';
import WellnessTools from './components/WellnessTools';
import HowItWorks from './components/HowItWorks';
import HighlightStories from './components/HighlightStories';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Video from './components/Video';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} jaipur-bg min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* 1. Hook — Who we are & what we promise */}
      <Hero />

      {/* 2. Instant trust — numbers speak before words */}
      <Statistics />

      {/* 3. Build trust — who we are & who guides you */}
      <About />

      {/* 4. What we offer */}
      <Services />

      {/* Wellness Hub — Interactive Calculators & WhatsApp Community */}
      <WellnessTools />

      {/* 5. Remove skepticism — show the simple path */}
      <HowItWorks />

      {/* 6. Proof — real people, dramatic results */}
      <HighlightStories />

      {/* 7. More social proof — community voices */}
      <Testimonials />

      {/* 8. Visual evidence — gallery & video */}
      <Gallery />
      <Video />

      {/* 9. Final conversion — contact form */}
      <Contact />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
