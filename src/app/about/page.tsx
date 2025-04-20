'use client';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Hobbies from '@/components/Hobbies';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  return (
    <div className="min-h-auto flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      {/* Typewriter text aligned above Timeline */}
      <div className="w-full sm:px-4">
        <div className="max-w-xl mx-auto">
          <div className="w-1/4 pr-7 text-right">
            <h1 className="text-xl font-medium text-black dark:text-white">
              <Typewriter
                words={['About me...']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                delaySpeed={999999}
              />
            </h1>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full"
      >
        <Timeline />
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.25 }}
        className="w-full mb-10"
      >
        <Projects />
      </motion.div>

      {/* Hobbies */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-full mb-10"
      >
        <Hobbies />
      </motion.div>
    </div>
  );
}
