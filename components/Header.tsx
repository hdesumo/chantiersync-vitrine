"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
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
            <span className="text-xl font-bold text-blue-700 dark:text-white">
              ChantierSync
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
              Digitalisez vos chantiers
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="/" className="hover:text-blue-700 dark:hover:text-white">
            Accueil
          </a>
          <a href="#solution" className="hover:text-blue-700 dark:hover:text-white">
            Solution
          </a>
          <a href="#about" className="hover:text-blue-700 dark:hover:text-white">
            À propos
          </a>
          <a href="#affiliation" className="hover:text-blue-700 dark:hover:text-white">
            Programme d’affiliation
          </a>
          <Link href="/faq" className="hover:text-blue-700 dark:hover:text-white">
            FAQ
          </Link>
          <a href="#contacts" className="hover:text-blue-700 dark:hover:text-white">
            Contacts
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* Toggle Dark Mode */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
          >
            Inscription
          </Link>
          <a
            href="https://app.chantiersync.com/login"
            className="border border-blue-600 text-blue-600 dark:border-white dark:text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Connexion
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-3 text-sm">
          <a href="/" className="block hover:text-blue-700 dark:hover:text-white">Accueil</a>
          <a href="#solution" className="block hover:text-blue-700 dark:hover:text-white">Solution</a>
          <a href="#about" className="block hover:text-blue-700 dark:hover:text-white">À propos</a>
          <a href="#affiliation" className="block hover:text-blue-700 dark:hover:text-white">Programme d’affiliation</a>
          <Link href="/faq" className="block hover:text-blue-700 dark:hover:text-white">FAQ</Link>
          <a href="#contacts" className="block hover:text-blue-700 dark:hover:text-white">Contacts</a>

          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? "🌙 Mode sombre" : "☀️ Mode clair"}
          </button>
          <Link
            href="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 mt-2"
          >
            Inscription
          </Link>
          <a
            href="https://app.chantiersync.com/login"
            className="block border border-blue-600 dark:border-white text-blue-600 dark:text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 mt-2"
          >
            Connexion
          </a>
        </div>
      )}
    </header>
  );
}
