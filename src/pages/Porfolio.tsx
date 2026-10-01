import { motion } from "motion/react";


import { Blocks, File, Signature, TrendingUp } from "lucide-react";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio1.jpg",
    icon: File,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio2.jpg",
    icon: File,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio3.jpg",
    icon: Signature,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg",
    icon: Blocks,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: "https://wpriverthemes.com/drake/wp-content/uploads/2023/03/portfolio5.jpg",
    icon: TrendingUp,
  },
];

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto px-6 py-18 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h3 className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 rounded-2xl px-5 py-2 text-xs w-fit uppercase tracking-widest bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm text-black dark:text-white">
            <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></span>

            PORTFOLIO
          </h3>
          <h1 className="text-3xl md:text-5xl mt-6 font-extrabold text-black dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                key={idx}
                className="group bg-white/5 dark:bg-gray-800/30 backdrop-blur-lg border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <IconComp className="text-indigo-500 w-6 h-6" />
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
