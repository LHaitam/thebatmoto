/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Désactive l'optimisation des images pour l'exportation statique
  },
};

module.exports = nextConfig;
