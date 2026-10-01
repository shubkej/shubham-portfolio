"use client";
import { motion } from "motion/react";

const myskills = [
  {
    id: 1,
    title: "Node JS",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 2,
    title: "MongoDB",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 3,
    title: "React JS",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-3627237-3029645.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 4,
    title: "HTML",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-html-58-225994.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Tailwind",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 6,
    title: "Express JS",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=256",
    isFeatured: true,
  },
  {
    id: 7,
    title: "CSS",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226095.png?f=webp&w=512",
    isFeatured: true,
  },
  {
    id: 8,
    title: "Docker",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-docker-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226091.png?f=webp&w=512",
    isFeatured: true,
  },
  {
    id: 9,
    title: "Python",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-python-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175115.png?f=webp&w=512",
    isFeatured: true,
  },
  {
    id: 10,
    title: "My SQL",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png?f=webp&w=512",
    isFeatured: true,
  },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto flex justify-center px-6 py-18 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-full px-5 py-2 text-xs sm:text-sm uppercase tracking-widest mb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>

          Skills
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 text-black dark:text-white"
        >
          My{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Advantages
          </span>
        </motion.h1>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {myskills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative group p-[2px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/40 w-full max-w-[160px]">
                <div className="bg-gray-100 dark:bg-gray-800 flex flex-col rounded-3xl h-full w-full p-4 text-center transition duration-300 ease-in-out">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Text */}
                  <div className="p-2 flex flex-col items-center">
                    <p className="font-semibold text-sm sm:text-base text-black dark:text-white">
                      {skill.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
