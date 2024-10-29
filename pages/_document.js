import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta
          name="keywords"
          content="auriculothérapie, obésité morbide, laser, laserthérapie, laser anti-tabac, tabagiste, sevrage tabac, tabagisme passif, arrêt cigarette, tarif auriculothérapie, sans effets secondaires, sans douleurs, sans prise de poids, garantie, médecine alternative, acupuncture auriculaire, bien-être, santé, soulagement douleur, traitement addiction, médecine chinoise, équilibre énergétique, médecine traditionnelle chinoise, médecine douce, acupuncture, traitement naturel, médecine préventive, gestion du stress, relaxation, acupuncture sans aiguilles, santé naturelle, bien-être physique, bien-être mental, thérapie alternative, acupuncture auriculotherapie, médecine complémentaire, santé globale, médecine intégrative, traitement non invasif, harmonisation énergétique, médecine holistique, soulagement du stress, amélioration de la circulation sanguine, relaxation profonde, réduction de l'anxiété, amélioration du sommeil, gestion de la douleur, renforcement du système immunitaire, amélioration de la digestion, réduction de l'inflammation."
        />
        <meta
          name="description"
          content="Découvrez les bienfaits de l'auriculothérapie pour traiter l'obésité morbide, les problèmes de sommeil, arrêter le tabac, les drogues et toute autre dépendances ou addiction ainsi que pour soulager les douleurs, sans effets secondaires ni prise de poids. Profitez d'un service professionnel et d'une garantie de résultats avec notre cabinet spécialisé."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Polices Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5GCBDD8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Fin Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
