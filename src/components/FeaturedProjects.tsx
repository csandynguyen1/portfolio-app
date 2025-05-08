'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      className="mt-16"
    >
      <h2 className="text-black dark:text-white text-2xl font-bold mb-6 text-center transition-all duration-150">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card 1 */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-black border border-gray-700 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="h-64 bg-white relative transition-all duration-150">
            <Image src="/assets/project1.png" alt="Project 1" fill className="object-contain" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white transition-all duration-150">
              CompositionToday
            </h3>
            <p className="text-black dark:text-gray-300 mb-4 transition-all duration-100">
              CompositionToday is my latest project that I worked on. It is a platform that shares
              information such as news, jobs, festivals for music composers. Essentially, it is a
              resource hub for music composers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                React
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                Python
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                AWS
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                Dart
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                MySQL
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                TypeScript
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://compositiontoday.net/"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-150"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-black border border-gray-700 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="h-64 bg-gray-200 dark:bg-gray-900 relative transition-all duration-150">
            <Image src="/assets/project2.jpg" alt="Project 2" fill className="object-fill" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white transition-all duration-150">
              UCF Clubs
            </h3>
            <p className="text-black dark:text-gray-300 mb-4 transition-all duration-100">
              UCF Clubs is a website that I worked on for the UCF Clubs and Organizations website.
              It is a website that allows students to find and join clubs and organizations on
              campus.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                React
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                Tailwind
              </span>
              <span className="px-2 py-1 bg-gray-800 text-white rounded-md text-xs transition-all duration-150">
                JavaScript
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/csandynguyen1/ucfclubsevents"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-150"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
