'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <div className="w-full max-w-3xl px-4">
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative h-50 w-50 overflow-hidden rounded-full border-2 border-gray-700 dark:border-gray-300 shadow-lg transition-all duration-150">
                <Image
                  src="/assets/profile-picture.jpg"
                  alt="Andy's profile picture"
                  width={195}
                  height={195}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="flex flex-col ml-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h1 className="text-4xl font-bold mb-4 text-black dark:text-white transition-all duration-150">
                  <Typewriter
                    words={['Hey, my name is Andy!']}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={75}
                    delaySpeed={999999}
                  />
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <div className="max-w-md">
                  <h2 className="text-lg font-medium text-black dark:text-white transition-all duration-150">
                    I am a recent graduate from the University of Central Florida with a B.S. in
                    Computer Science. I have always been interested in taking ideas and building
                    them into reality. Looking to make an impact in the world and build products
                    that people can use.
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="flex justify-center mt-8"
          >
            <a
              href="/assets/resume.pdf"
              download
              className="px-6 py-2.5 bg-black text-white dark:text-black dark:bg-gray-300 font-medium text-sm rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 transition-all duration-150 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Project Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-16"
          >
            <h2 className="text-black dark:text-white text-2xl font-bold mb-6 text-center transition-all duration-150">
              Here Are Some of My Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Card 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-black border border-gray-700 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 bg-white relative transition-all duration-150">
                  <Image
                    src="/assets/project1.png"
                    alt="Project 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white transition-all duration-150">
                    CompositionToday
                  </h3>
                  <p className="text-black dark:text-gray-300 mb-4 transition-all duration-100">
                    CompositionToday is my latest project that I worked on. It is a platform that
                    shares infomration such as news, jobs, festivals for music composers.
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
                    UCF Clubs is a website that I worked on for the UCF Clubs and Organizations
                    website. It is a website that allows students to find and join clubs and
                    organizations on campus.
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
        </div>
      </div>
    </main>
  );
}
