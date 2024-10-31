// app/pages/poetry/SubNavbar.jsx

import Link from "next/link";

const SubNavbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <Link
        href="/poetry/ghazal"
        className="text-gray-800 mx-4 hover:underline"
      >
        Ghazal
      </Link>
      <Link href="/poetry/nazam" className="text-gray-800 mx-4 hover:underline">
        Nazam
      </Link>
    </nav>
  );
};

export default SubNavbar; // Make sure to export the component
