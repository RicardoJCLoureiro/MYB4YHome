const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode to catch potential issues
  reactStrictMode: true,

  // Disable 'X-Powered-By' header for security reasons
  poweredByHeader: false,

  // Optional: Asset prefix for CDN (remove or comment this out if you aren't using a CDN)
  //assetPrefix: isProd ? 'https://cdn.yourdomain.com' : '',

  // Image handling (using remotePatterns for external images)
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.yourdomain.com', // Update this to match your CDN domain or remove if not using a CDN
    //     pathname: '/_next/static/media/**', // Adjust this path based on where your images are served from
    //   },
    // ],
  },

  // Environment variables (set API URLs or any other variables you need)
  env: {
    API_URL: isProd ? 'https://api.yourdomain.com' : 'http://localhost:3000/api', // Adjust based on your needs
  },

  // Custom Webpack configuration (for handling SVG imports)
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // Push new rules for handling SVGs with url query and React components
    config.module.rules.push(
      // Reapply the existing rule for *.svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // Exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we now handle it
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Optional: Trailing slash (set to true if you want URLs to end with a slash)
  trailingSlash: false,

  // Optional: If you plan to export static pages in the future, configure exportPathMap
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //   };
  // },
};

export default nextConfig;
