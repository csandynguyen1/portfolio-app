'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterText() {
  return (
    <div className="text-center text-xl sm:text-2xl font-semibold mb-8">
      <Typewriter
        words={['My Journey', 'Where I’ve Been', 'The Road So Far...']}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
