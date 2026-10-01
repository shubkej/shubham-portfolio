// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Resume", path: "/resume" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const linkClasses = ({ isActive }:any) =>
//     `block px-4 py-2 text-lg font-medium transition-colors duration-300 ${
//       isActive ? "text-gray-800 font-semibold hover:text-gray-400" : "text-gray-400 hover:text-gray-800"
//     }`;

//   return (
//     <nav className="bg-transparent sticky top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
//         <div className="text-2xl font-bold text-gray-600 uppercase">
//           <NavLink to="/">Shubham kejriwal</NavLink>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-2 lg:gap-10 uppercase">
//           {navItems.map(({ name, path }) => (
//             <li key={name}>
//               <NavLink to={path} className={linkClasses}>
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <button
//           className="md:hidden text-3xl text-gray-800"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       <div
//         className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}
//       >
//         <ul className="flex flex-col items-center py-4 gap-4 uppercase">
//           {navItems.map(({ name, path }) => (
//             <li key={name}>
//               <NavLink
//                 to={path}
//                 className={linkClasses}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
// import { useState, useEffect } from "react";



// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "About", id: "about" },
//     { name: "Resume", id: "resume" },
//     { name: "Skills", id: "skills" },
//     { name: "Project", id: "project" },
//     { name: "Contact", id: "contact" },
//   ];

//   // Smooth scroll on click
//   const handleScroll = (id: any) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false);
//     }
//   };

//   // Track active section on scroll
//   useEffect(() => {
//     const observerOptions = { threshold: 0.5 };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, observerOptions);

//     navItems.forEach(({ id }) => {
//       const section = document.getElementById(id);
//       if (section) observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full  z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
//         {/* Logo */}
//         <div className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white uppercase">
//           Shubham Kejriwal
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 uppercase">
//           {navItems.map(({ name, id }) => (
//             <li key={id}>
//               <button
//                 onClick={() => handleScroll(id)}
//                 className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${activeSection === id
//                   ? "text-indigo-600 dark:text-indigo-400 font-bold"
//                   : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
//                   }`}
//               >
//                 {name}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl text-gray-800 dark:text-white"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           } overflow-hidden`}
//       >
//         <ul className="flex flex-col items-center py-4 gap-4 uppercase">
//           {navItems.map(({ name, id }) => (
//             <li key={id}>
//               <button
//                 onClick={() => handleScroll(id)}
//                 className={`text-lg font-medium transition-colors duration-300 ${activeSection === id
//                   ? "text-indigo-600 dark:text-indigo-400 font-bold"
//                   : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
//                   }`}
//               >
//                 {name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = 8;

function StairStepLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {[...Array(STEPS)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-black"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              style={{
                right: `${(i * 100) / STEPS}%`,
                top: 0,
                width: `${100 / STEPS}%`,
                height: `${(100 * STEPS) / STEPS}vh`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar({
  onNavClick,
  loaderVisible,
}: {
  onNavClick: (id: string) => void;
  loaderVisible: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
    { name: "Skills", id: "skills" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false); // Close mobile menu
    onNavClick(id);
  };

  return (
    <>
      <StairStepLoader show={loaderVisible} />
      <nav className="bg-white dark:bg-gray-900 sticky top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="text-md md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent uppercase">
            Shubham Kejriwal
          </div>

          <ul className="hidden md:flex gap-6 uppercase">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`text-lg font-medium transition-colors duration-300 cursor-pointer ${activeSection === id
                      ? "text-indigo-600 dark:text-indigo-400 font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                    }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-3xl text-gray-800 dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <ul className="flex flex-col items-center py-4 gap-4 uppercase">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`text-lg font-medium transition-colors duration-300 ${activeSection === id
                      ? "text-indigo-600 dark:text-indigo-400 font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                    }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
