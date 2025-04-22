import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="dark:bg-black bg-white text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center space-y-2 transition-all duration-300 mt-7">
      <div className="flex space-x-6">
        <a href="https://github.com/csandynguyen1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://discord.com/users/ahz." target="_blank" rel="noopener noreferrer">
          <FaDiscord className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://linkedin.com/in/csandynguyen" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://instagram.com/andynguyenr" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="https://open.spotify.com/user/asian-" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
        <a href="mailto:andyn7897@gmail.com">
          <FaEnvelope className="h-5 w-5 hover:text-black dark:hover:text-white transition" />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Andy Nguyen. All rights reserved.</p>
    </footer>
  );
}
