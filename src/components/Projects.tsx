'use client';

import { motion } from 'framer-motion';

const projectItems = [
  {
    title: 'CompositionToday',
    desc: 'CompositionToday is a resource hub for music composers to find relevant information inside the industry.',
    tags: ['React', 'TypeScript', 'MySQL', 'AWS', 'Android', 'iOS'],
    link: 'https://compositiontoday.net/',
  },
  {
    title: 'UCF Clubs',
    desc: 'A place where UCF can register clubs, and update upcoming events, news, members.',
    tags: ['React', 'JavaScript', 'MongoDB'],
    link: 'https://github.com/csandynguyen1/ucfclubsevents',
  },
  {
    title: 'Astral Explorer',
    desc: '2-D Top-Down roguelike game, filled with puzzle, monsters, and bosses main objective is to complete all planets!',
    tags: ['Unity', 'C#'],
    link: 'https://csandynguyen.itch.io/astral-explorer',
  },
  {
    title: 'Personal Website',
    desc: 'Personal website to display relevant information about me.',
    tags: ['Next.js', 'TypeScript', 'Tailwindcss'],
  },
];

const colorMap: { [key: string]: string } = {
  React: 'bg-cyan-400 text-black',
  'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
  TypeScript: 'bg-blue-600 text-white',
  JavaScript: 'bg-yellow-300 text-black',
  Unity: 'bg-black text-white dark:bg-white dark:text-black',
  'C#': 'bg-violet-500 text-black',
  AWS: 'bg-gray-800 text-white',
  Android: 'bg-green-500 text-black',
  iOS: 'bg-black text-white dark:bg-white dark:text-black',
  MySQL: 'bg-sky-700 text-white',
  MongoDB: 'bg-green-800 text-white',
  Tailwindcss: 'bg-sky-400 text-black',
};

export default function Projects() {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-300 py-1 px-4 sm:px-8">
      <div className="flex max-w-xl mx-auto">
        {/* Left: Projects header */}
        <div className="w-1/4 pr-10 text-right">
          <h2 className="text-lg font-semibold mb-6 text-black dark:text-white transition-colors duration-100">
            Projects
          </h2>
        </div>

        {/* Middle: Invisible spacer to match Timeline */}
        <div className="relative w-px" />

        {/* Right: Project entries */}
        <div className="w-3/4 pl-2">
          {projectItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="mb-2 relative rounded-lg p-4 transition-transform"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-sm font-semibold text-black dark:text-white transition-colors duration-100">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-100 mb-2">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag, tagIndex) => {
                    const colorClasses = colorMap[tag] || 'bg-gray-200 text-black';
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs px-2 py-1 rounded-full ${colorClasses}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
