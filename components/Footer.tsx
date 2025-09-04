import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-gray-300 dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Bloc 1 : Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/signup" className="hover:underline">
                Inscription
              </Link>
            </li>
            <li>
              <a
                href="https://app.chantiersync.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Connexion
              </a>
            </li>
            <li>
              <Link href="#solution" className="hover:underline">
                Solution
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="#affiliation" className="hover:underline">
                Programme d’affiliation
              </Link>
            </li>
            <li>
              <Link href="#contacts" className="hover:underline">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 2 : Support & Ressources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Support & Ressources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/conditions" className="hover:underline">
                Conditions d’utilisation
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/liens-utiles" className="hover:underline">
                Liens utiles
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <p className="text-sm">
            <strong>Apps 1 Global SA</strong> – ChantierSync <br />
            Jaxxay 1, Unité 23, V 243 <br />
            Région de Dakar (Sénégal) <br />
            Téléphone/WhatsApp :{" "}
            <a
              href="tel:+221771573623"
              className="text-blue-400 hover:underline"
            >
              +221 77 157 36 23
            </a>
            <br />
            Email :{" "}
            <a
              href="mailto:contact@chantiersync.com"
              className="text-blue-400 hover:underline"
            >
              contact@chantiersync.com
            </a>
          </p>
        </div>
      </div>

      {/* Ligne de copyright */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Apps 1 Global SA. Tous droits réservés.{" "}
        <br />
        Administrateur général : Honoré de Sumo
      </div>
    </footer>
  );
}
