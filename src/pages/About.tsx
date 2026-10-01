"use client";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto flex justify-center items-center text-black px-6 py-18">
      <div className="max-w-6xl w-full text-start relative">

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-6 py-2 text-xs uppercase tracking-widest mb-6 bg-white/70 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>
          About Me
        </motion.h3>


        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight max-w-3xl"
        >
          Every great{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            design
          </span>{" "}
          begins with an even better story
        </motion.h1>

        {/* Decorative underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="w-28 h-1 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
        />

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Since beginning my journey as a freelance designer nearly 8 years ago, I’ve
          collaborated with agencies, startups, and amazing individuals to craft digital
          products that merge creativity with functionality. Curious by nature and
          confident in execution, I’m always sharpening my skills and tackling design
          challenges with fresh perspective.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
        >
          Let’s Work Together 🚀
        </motion.button>
      </div>
    </section>
  );
};

export default About;
