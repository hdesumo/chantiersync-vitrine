"use client";

import Link from "next/link";

export default function HeaderDark() {
  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          ChantierSync
        </Link>
      </h1>

      <nav className="space-x-4">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          Accueil
        </Link>
        <Link href="#solution" className="hover:text-blue-400 transition-colors">
          Solution
        </Link>
        <Link href="#about" className="hover:text-blue-400 transition-colors">
          À propos
        </Link>
        <Link href="#affiliation" className="hover:text-blue-400 transition-colors">
          Affiliation
        </Link>
        <Link href="#contacts" className="hover:text-blue-400 transition-colors">
          Contacts
        </Link>
      </nav>
    </header>
  );
}
