"use client";
import { motion } from "motion/react";

const timeline = [
  {
    date: "June 2025 - Present",
    title: "BlurBee soultions",
    description: "MERN Stack Developer",
  },
  {
    date: "Dec 2024 - May 2025",
    title: "Webashlar Pvt Ltd",
    description: "Software Developer",
  },
  {
    date: "2023 - 2025",
    title: "Parul University, Vadodara",
    description: "Master of Computer Application | CGPA: 8.75",
  },
  {
    date: "2020 - 2023",
    title: "SAGE University, Bhopal",
    description: "Bachelor of Computer Application | CGPA: 9.00",
  },
];

const Resume = () => {
  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto flex flex-col px-6 py-18 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        {/* Tag */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-full px-5 py-2 text-xs sm:text-sm uppercase tracking-widest mb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-pulse"></span>
          Resume
        </motion.h3>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 text-black dark:text-white"
        >
          Education &{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h1>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 border-l-2 border-gray-300 dark:border-gray-700">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* Glowing Dot */}
              <span className="absolute -left-[16px] md:-left-[18px] top-1.5 w-6 h-6 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ring-4 ring-white dark:ring-gray-900 animate-pulse" />
              </span>

              {/* Timeline Data */}
              <div className="flex flex-col gap-1 ml-5">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {item.date}
                </p>
                <h2 className="text-lg sm:text-xl font-semibold leading-snug text-black dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
