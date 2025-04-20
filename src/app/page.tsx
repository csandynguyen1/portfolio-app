'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-auto flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full"
      >
        <div className="text-2xl font-bold mb-78 mt-78 text-center transition-all duration-25">
          <h1>Welcome! </h1>
        </div>
      </motion.div>
    </div>
  );
}
