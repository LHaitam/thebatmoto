import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta
          name="keywords"
          content="location motos Marrakech, agence location motos, The Bat Moto, exploration Marrakech, motos fiables, aventures urbaines, liberté de déplacement, tourisme Marrakech, motos puissantes, ruelles de la Médina, paysages Atlas, mobilité Marrakech, location moto économique, location moto flexible, service professionnel moto, sécurité moto Marrakech, aventure sur deux roues, service client personnalisé, motos bien entretenues"
        />
        <meta
          name="description"
          content="Découvrez The Bat Moto, votre agence de location de motos à Marrakech. Explorez la ville rouge et ses environs avec style et puissance grâce à nos motos fiables, stylées et parfaitement entretenues. Une expérience unique pour les aventuriers urbains et les explorateurs de la nature."
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
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
