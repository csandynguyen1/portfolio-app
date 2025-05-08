'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function Greeting() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        <Image
          src="/assets/profile-picture.jpg"
          alt="Andy Nguyen"
          fill
          className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white transition-all duration-150">
          <TypewriterComponent
            options={{
              strings: ['Hey, my name is Andy!'],
              autoStart: true,
              loop: false,
              delay: 75,
              deleteSpeed: 999999,
              cursor: '|',
            }}
          />
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-all duration-150">
          I am a recent graduate from the University of Central Florida with a B.S. in Computer
          Science. I have always been interested in taking ideas and building them into reality.
          Looking to make an impact in the world and build products that people can use. If you want
          to get in touch, don't hesitate to reach out! Links below.
        </p>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-black text-white dark:bg-gray-300 dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-150"
          onClick={() => window.open('/assets/resume.pdf', '_blank')}
        >
          <Download className="w-4 h-4" />
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
}
