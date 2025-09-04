export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 max-w-4xl mx-auto transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Mentions légales</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        1. Éditeur du site
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Le site <strong>chantiersync.com</strong> est édité par :
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Apps 1 Global SA</strong> <br />
        Jaxxay 1, Unité 23, V 243 <br />
        Région de Dakar (Sénégal) <br />
        Téléphone/WhatsApp :{" "}
        <a href="tel:+221771573623" className="text-blue-600 dark:text-blue-400 underline">
          +221 77 157 36 23
        </a>{" "}
        <br />
        Email :{" "}
        <a href="mailto:contact@chantiersync.com" className="text-blue-600 dark:text-blue-400 underline">
          contact@chantiersync.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        2. Responsable de la publication
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Administrateur général : <strong>Honoré de Sumo</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        3. Hébergement
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Le site est hébergé par : <br />
        <strong>Vercel Inc.</strong> <br />
        340 S Lemon Ave #4133 <br />
        Walnut, CA 91789, États-Unis <br />
        Site :{" "}
        <a href="https://vercel.com" className="text-blue-600 dark:text-blue-400 underline">
          https://vercel.com
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        4. Propriété intellectuelle
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Le contenu du site (textes, images, graphismes, logo, vidéos, code)
        est la propriété exclusive de <strong>Apps 1 Global SA</strong>, sauf
        mention contraire. Toute reproduction, distribution ou exploitation est
        strictement interdite sans autorisation écrite.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        5. Responsabilité
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Apps 1 Global SA s’efforce de maintenir le site accessible et à jour,
        mais ne saurait être tenue responsable des erreurs, omissions,
        interruptions ou indisponibilités temporaires du service.
      </p>

      <footer className="mt-12 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Apps 1 Global SA. Tous droits réservés.
      </footer>
    </main>
  );
}
