'use client';
import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="flex-grow flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Hey, my name is Andy!</h1>
        </motion.div>
      </div>
    </main>
  );
}
