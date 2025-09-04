"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HeaderDark() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + nom + slogan */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo ChantierSync"
            width={50}
            height={50}
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-white">ChantierSync</span>
            <span className="text-xs text-gray-400 -mt-1">
              Digitalisez vos chantiers
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <a href="/" className="hover:text-white">Accueil</a>
          <a href="#solution" className="hover:text-white">Solution</a>
          <a href="#about" className="hover:text-white">À propos</a>
          <a href="#affiliation" className="hover:text-white">Programme d’affiliation</a>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <a href="#contacts" className="hover:text-white">Contacts</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/signup"
            className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
          >
            Inscription
          </Link>
          <a
            href="https://app.chantiersync.com/login"
            className="border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
          >
            Connexion
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-3 text-sm text-gray-300">
          <a href="/" className="block hover:text-white">Accueil</a>
          <a href="#solution" className="block hover:text-white">Solution</a>
          <a href="#about" className="block hover:text-white">À propos</a>
          <a href="#affiliation" className="block hover:text-white">Programme d’affiliation</a>
          <Link href="/faq" className="block hover:text-white">FAQ</Link>
          <a href="#contacts" className="block hover:text-white">Contacts</a>

          <hr className="my-2 border-gray-600" />
          <Link
            href="/signup"
            className="block bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200"
          >
            Inscription
          </Link>
          <a
            href="https://app.chantiersync.com/login"
            className="block border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 mt-2"
          >
            Connexion
          </a>
        </div>
      )}
    </header>
  );
}
