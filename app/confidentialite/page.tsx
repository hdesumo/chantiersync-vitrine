export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 max-w-4xl mx-auto transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Politique de confidentialité</h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        La présente politique de confidentialité explique comment
        <strong> ChantierSync </strong> (édité par <strong>Apps 1 Global SA</strong>)
        collecte, utilise et protège vos données personnelles.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">1. Données collectées</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Informations d’inscription : nom de l’entreprise, nom du contact, email, téléphone.</li>
        <li>Données d’utilisation : activité dans l’application, rapports de chantier, fichiers partagés.</li>
        <li>Données techniques : adresse IP, type de navigateur, logs de sécurité.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">2. Utilisation des données</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Les données collectées sont utilisées pour :</p>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Fournir et améliorer nos services de gestion de chantiers.</li>
        <li>Créer et administrer les comptes utilisateurs (Tenants, Admins, Agents).</li>
        <li>Communiquer avec les clients (support, notifications, mises à jour).</li>
        <li>Assurer la sécurité et prévenir les fraudes.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">3. Partage des données</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec :
      </p>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Nos prestataires techniques (hébergement, support).</li>
        <li>Les autorités légales si la loi l’exige.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">4. Sécurité</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Nous utilisons des protocoles sécurisés (HTTPS, chiffrement des mots de passe, contrôle d’accès par rôles)
        afin de protéger vos informations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">5. Vos droits</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Conformément à la réglementation en vigueur, vous disposez de droits d’accès, de rectification et de suppression
        de vos données personnelles. Pour exercer ces droits, contactez :
      </p>
      <p className="font-medium text-gray-800 dark:text-gray-200">
        Apps 1 Global SA – ChantierSync <br />
        Jaxxay 1, Unité 23, V 243, Région de Dakar (Sénégal) <br />
        Téléphone/WhatsApp : +221 77 157 36 23 <br />
        Email : contact@chantiersync.com
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">6. Conservation des données</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Vos données sont conservées aussi longtemps que nécessaire pour fournir nos services ou répondre à nos
        obligations légales. Elles sont ensuite supprimées ou anonymisées.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">7. Cookies</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Notre site peut utiliser des cookies pour améliorer l’expérience utilisateur et mesurer l’audience. Vous pouvez
        configurer votre navigateur pour refuser les cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">8. Modifications</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Apps 1 Global SA se réserve le droit de modifier cette politique de confidentialité. Les utilisateurs seront
        informés par notification sur le site ou par email.
      </p>

      <footer className="mt-12 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Apps 1 Global SA. Tous droits réservés.
      </footer>
    </main>
  );
}
