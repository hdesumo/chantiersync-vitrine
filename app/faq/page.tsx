export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Foire aux questions (FAQ)</h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-xl mb-2 dark:text-white">1. Comment m’inscrire à ChantierSync ?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Rendez-vous sur la page <a href="/signup" className="text-blue-600 dark:text-blue-400 underline">Inscription</a> et remplissez le formulaire.
            Votre demande sera validée par un SuperAdmin avant activation.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2 dark:text-white">2. Qui peut utiliser ChantierSync ?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            ChantierSync est destiné aux entreprises du BTP, bureaux d’ingénierie, promoteurs et cabinets de suivi
            souhaitant digitaliser leurs chantiers et améliorer la collaboration.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2 dark:text-white">3. Comment fonctionne le programme d’affiliation ?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Chaque affilié reçoit un code unique. Lorsqu’une entreprise s’inscrit via ce code, elle est rattachée à
            l’affilié qui perçoit une commission.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2 dark:text-white">4. Mes données sont-elles sécurisées ?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Oui. Nous utilisons des protocoles sécurisés (HTTPS, chiffrement, rôles d’accès) et stockons vos données sur
            des serveurs conformes aux standards internationaux.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2 dark:text-white">5. Où est basée Apps 1 Global SA ?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Siège social : Jaxxay 1, Unité 23, V 243, Région de Dakar (Sénégal).<br />
            WhatsApp : <a href="tel:+221771573623" className="text-blue-600 dark:text-blue-400 underline">+221 77 157 36 23</a><br />
            Administrateur général : Honoré de Sumo.
          </p>
        </div>
      </div>
    </main>
  );
}
