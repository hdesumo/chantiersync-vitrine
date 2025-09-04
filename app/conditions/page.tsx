export default function ConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 max-w-4xl mx-auto transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Conditions d’utilisation
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Les présentes conditions régissent l’utilisation de la plateforme{" "}
        <strong>ChantierSync</strong>, éditée par{" "}
        <strong>Apps 1 Global SA</strong>. En accédant à nos services, vous
        acceptez sans réserve ces conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        1. Objet
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        ChantierSync fournit une solution SaaS permettant la gestion et le suivi
        de projets de construction. L’application est destinée aux entreprises
        du BTP, aux bureaux d’ingénierie et aux promoteurs.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        2. Accès et inscription
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>L’accès à la plateforme nécessite une inscription validée par un SuperAdmin.</li>
        <li>Chaque entreprise (Tenant) est responsable des informations fournies lors de son inscription.</li>
        <li>Les identifiants sont strictement personnels et ne doivent pas être partagés.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        3. Responsabilités
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Chaque Tenant est responsable des données créées et partagées via la plateforme.</li>
        <li>Les administrateurs d’entreprise doivent garantir la bonne utilisation des comptes utilisateurs.</li>
        <li>Toute fraude, tentative de piratage ou utilisation abusive entraînera une suspension immédiate.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        4. Propriété intellectuelle
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        ChantierSync, son logo, son design et son code source sont la propriété
        exclusive d’Apps 1 Global SA. Toute reproduction ou utilisation non
        autorisée est strictement interdite.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        5. Protection des données
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Les données personnelles collectées sont traitées conformément à notre{" "}
        <a
          href="/confidentialite"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Politique de confidentialité
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        6. Disponibilité du service
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Nous nous efforçons d’assurer la disponibilité continue de nos services,
        mais ne garantissons pas l’absence d’interruptions temporaires dues à la
        maintenance, aux mises à jour ou à des causes extérieures.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        7. Limitation de responsabilité
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Apps 1 Global SA ne peut être tenue responsable en cas de pertes de
        données, d’interruptions de service ou de dommages liés à l’utilisation
        de la plateforme, sauf disposition légale impérative.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        8. Modification des conditions
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Apps 1 Global SA se réserve le droit de modifier les présentes
        conditions. Les utilisateurs seront notifiés via l’application ou par
        email.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 dark:text-white">
        9. Droit applicable
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Les présentes conditions sont régies par le droit sénégalais. Tout
        litige sera soumis à la compétence des juridictions de Dakar.
      </p>

      <footer className="mt-12 text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Apps 1 Global SA. Tous droits réservés. <br />
        Administrateur général : Honoré de Sumo
      </footer>
    </main>
  );
}
