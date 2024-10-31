import { FaLinkedin, FaDribbble, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-100">
      <div>
        <a href="mailto:yourblog@gmail.com" className="text-sm">
          yourblog@gmail.com
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="btn">Copy</button>
        <button className="btn">CV</button>
      </div>
      <div className="flex space-x-4">
        <FaLinkedin />
        <FaDribbble />
        <FaInstagram />
      </div>
    </header>
  );
}
