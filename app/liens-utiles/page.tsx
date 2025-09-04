export default function LiensUtilesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Liens utiles</h1>

      <ul className="list-disc ml-6 space-y-3 text-gray-700 dark:text-gray-300">
        <li><a href="/confidentialite" className="text-blue-600 dark:text-blue-400 underline">Politique de confidentialité</a></li>
        <li><a href="/conditions" className="text-blue-600 dark:text-blue-400 underline">Conditions d’utilisation</a></li>
        <li><a href="/faq" className="text-blue-600 dark:text-blue-400 underline">FAQ</a></li>
        <li><a href="/signup" className="text-blue-600 dark:text-blue-400 underline">Inscription</a></li>
        <li><a href="https://app.chantiersync.com/login" className="text-blue-600 dark:text-blue-400 underline">Connexion</a></li>
        <li><a href="#contacts" className="text-blue-600 dark:text-blue-400 underline">Nous contacter</a></li>
      </ul>
    </main>
  );
}
