"use client";
import { motion } from "motion/react";
import { TextScroll } from "./ui/text-scroll";
import WrapButton from "./ui/wrap-button";
import { FileUser } from "lucide-react";

const HeroSection = () => {

  const handleDownload = () => {
    const pdfUrl = '/Shubhamkejriwalresume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Shubhamkejriwal.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white">

      {/* Intro Text */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400"
        >
          👋 Hi There! I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white"
        >
          Shubham, a{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MERN Stack Developer
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Designer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
        >
          I create beautiful, functional, and user-friendly websites and applications.
        </motion.p>
      </div>

      {/* Scrolling Text Animation */}

      <TextScroll
        className="mb-2 font-display text-center text-3xl md:text-6xl font-bold tracking-tighter text-black dark:text-white"
        text="shubham  •  developer  •  designer  •  shubham  •  developer  •  designer  • shubham  •  developer  •  designer  • "
        default_velocity={1}
      />


      {/* Call-to-Action Buttons */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.8 },
          },
        }}
        className="mt-8 flex gap-4"
      >
        <motion.a
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
        >
          <WrapButton icon={<FileUser />} onClick={() => handleDownload()}>
            Resume
          </WrapButton>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
