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
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-gray-700 dark:border-gray-300 shadow-lg transition-all duration-150">
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
            className="flex justify-center mt-6"
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
        </div>
      </div>
    </main>
  );
}
