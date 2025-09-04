import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-20 bg-blue-700 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          ChantierSync – La plateforme qui digitalise vos chantiers
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Gérez vos projets de construction, suivez vos équipes et collaborez
          en toute simplicité grâce à une solution SaaS moderne et sécurisée.
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Inscription
          </Link>
          <a
            href="https://app.chantiersync.com/login"
            className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Connexion
          </a>
        </div>
      </section>

      {/* Section Illustration chantier (opératrice) */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative w-full h-96">
            <Image
              src="/agent_chantier.jpeg"
              alt="Opératrice supervisant un chantier digitalisé"
              fill
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Une solution pensée pour le terrain
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ChantierSync connecte le bureau et le terrain. Supervisez vos
              projets avec des tableaux de bord en temps réel, pour ne rien
              laisser au hasard.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Du manager au technicien, chacun dispose des bons outils pour
              travailler efficacement et en toute transparence.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section
        id="solution"
        className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Notre solution</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">
              Suivi des chantiers
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Visualisez l’avancement de vos projets en temps réel avec des
              rapports clairs et centralisés.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">
              Collaboration facile
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Impliquez vos équipes et agents sur le terrain avec une interface
              intuitive et mobile.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="font-semibold text-lg mb-2 dark:text-white">
              Multi-tenant sécurisé
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Chaque entreprise dispose de son espace isolé et sécurisé, géré
              par un administrateur.
            </p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section
        id="about"
        className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center transition-colors"
      >
        <h2 className="text-3xl font-bold mb-6 dark:text-white">À propos</h2>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          ChantierSync est une solution développée pour répondre aux besoins
          spécifiques du secteur du BTP en Afrique et ailleurs. Notre mission :
          rendre la gestion de chantiers plus simple, plus rapide et plus
          collaborative.
        </p>
      </section>

      {/* Section Collaboration chantier (équipe) */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Collaboration et transparence
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ChantierSync rassemble tous les acteurs du chantier sur une seule
              plateforme. Chaque rapport, photo et mise à jour est partagé en
              temps réel.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Cela garantit un suivi optimal et une communication fluide entre
              les différentes équipes, où qu’elles se trouvent.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-96">
            <Image
              src="/chantier_team.jpeg"
              alt="Équipe d’ingénieurs collaborant sur un chantier"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Programme d’affiliation */}
      <section
        id="affiliation"
        className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Programme d’affiliation
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300">
          Rejoignez notre réseau d’affiliés et bénéficiez de commissions en
          recommandant ChantierSync à vos partenaires et clients.
        </p>
        <Link
          href="/signup"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
        >
          Devenir affilié
        </Link>
      </section>

      {/* Contacts */}
      <section
        id="contacts"
        className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center transition-colors"
      >
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Nous contacter</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Email : contact@chantiersync.com
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Téléphone : +221 77 000 00 00
        </p>
        <p className="text-gray-700 dark:text-gray-300">Adresse : Dakar, Sénégal</p>
      </section>
    </>
  );
}
