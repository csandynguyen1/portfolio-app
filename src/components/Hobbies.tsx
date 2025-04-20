'use client';

import { motion } from 'framer-motion';

const hobbiesItems = [
  {
    title: 'Video Games',
    desc: 'Love playing variety of different games, my favorites are: TFT, CS2, and MMOS.',
  },
  {
    title: 'Powerlifting',
    desc: 'Goal is to take all the groceries in one trip.',
  },
  {
    title: 'Tech',
    desc: 'Keeping up with the tech industry and the advancements of technology.',
  },
];

export default function Timeline() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 px-4 sm:px-8">
      <div className="flex max-w-xl mx-auto">
        {/* Left: Timeline header */}
        <div className="w-1/4 pr-10 text-right">
          <h2 className="text-lg font-semibold mb-6 text-black dark:text-white transition-colors duration-100">
            Aside from coding...
          </h2>
        </div>

        {/* Middle: Invisible spacer to match Timeline */}
        <div className="relative w-px" />

        {/* Right: Timeline entries */}
        <div className="w-3/4 pl-6">
          {hobbiesItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-7 relative cursor-default"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-sm font-semibold text-black dark:text-white transition-colors duration-100">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-100">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
