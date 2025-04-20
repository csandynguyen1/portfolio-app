'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from './themetoggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="relative flex items-center justify-center py-6 max-w-4xl mx-auto">
        {/* Centered Nav Links */}
        <ul className="relative flex space-x-6 text-md font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative z-10 px-4 py-1 transition-colors ${
                    isActive
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm"
                    transition={{ type: 'spring', stiffness: 220, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
        <div className="absolute left-full top-1/2 -translate-y-1/2">
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </nav>
  );
}
