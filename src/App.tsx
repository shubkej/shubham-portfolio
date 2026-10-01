// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // import Resume from './pages/Resume';
// // import Service from './pages/Service';
// // import Portfolio from './pages/Porfolio';
// // import Skills from './pages/Skills';
// // import Testimonial from './pages/Testimonial';
// // import Contact from './pages/Contact';
// import HeroSection from './components/HeroSection';
// import Layout from './components/Layout';
// import About from './pages/About';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HeroSection />} />
//           <Route path="about" element={<About />} />
//           {/*<Route path="resume" element={<Resume />} />
//           <Route path="services" element={<Service />} />
//           <Route path="porfolio" element={<Portfolio />} />
//           <Route path="skills" element={<Skills />} />
//           <Route path="testimonial" element={<Testimonial />} />
//           <Route path="contact" element={<Contact />} /> */}
//         </Route>
//       </Routes>
//     </Router>

//   );
// }

// export default App;

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Portfolio from './pages/Porfolio';
import Contact from './pages/Contact';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);

  const handleScroll = (sectionId: string) => {
    setLoaderVisible(true);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setLoaderVisible(false);
    }, 800); // adjust to match your StairStepLoader duration
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavClick={handleScroll} loaderVisible={loaderVisible} />
      <main className="w-full">
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="resume" className="min-h-screen">
          <Resume />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="project" className="min-h-screen">
          <Portfolio />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
