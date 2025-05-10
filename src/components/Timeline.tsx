'use client';

import { motion } from 'framer-motion';

const timelineItems = [
  {
    title: 'University of Central Florida',
    role: 'B.S. Computer Science',
    date: '2025',
    desc: 'Built passion building things and turning ideas into real code.',
  },
  {
    title: 'CompositionToday',
    role: 'Software Engineer',
    date: '2024 - 2025',
    desc: 'Worked with a team to build a resource hub for music composers.',
  },
  {
    title: 'Project A',
    role: 'Game Developer',
    date: '2023 - 2025',
    desc: 'Built random games for fun on the side.',
  },
];

export default function Timeline() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 py-8 px-4 sm:px-8">
      <div className="flex max-w-xl mx-auto">
        {/* Left: Timeline header */}
        <div className="w-1/4 pr-10 text-right">
          <h2 className="text-lg font-semibold mb-6 text-black dark:text-white transition-colors duration-100">
            Timeline
          </h2>
        </div>

        {/* Middle: Vertical line */}
        <div className="relative w-px bg-gray-700 dark:bg-gray-500" />

        {/* Right: Timeline entries */}
        <div className="w-3/4 pl-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-7 relative cursor-default"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-sm font-semibold text-black dark:text-white transition-colors duration-100">
                {item.title}
              </h3>
              <p className="italic text-sm text-gray-500 dark:text-white transition-colors duration-100">
                {item.role}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-100">
                {item.desc}
              </p>
              <span className="text-gray-400 dark:text-gray-300 text-sm mt-1 block transition-colors duration-100">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
