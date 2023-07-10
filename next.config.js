/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img1.freepng.fr",
      "thumbs.dreamstime.com",
      "static-00.iconduck.com",
      "encrypted-tbn0.gstatic.com",
      "static.vecteezy.com",
      "pbs.twimg.com",
    ],
  },
  env: {
    GOOGLE_ID:
      "611437447222-j0e5fms7kodc8pb952ivs65diof2a0av.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    GITHUB_ID: "c0d04479c7c24314f7ae",
    GITHUB_SECRET: "f2e6c927319ba907e1b1340bb0469621bd9a4f19",
    FACEBOOK_CLIENT_ID: "1983856738633940",
    FACEBOOK_CLIENT_SECRET: "2689e11941701712a58784f9c3b740f1",
    // APPLE_ID: "",
    // APPLE_SECRET: "",
  },
};

module.exports = nextConfig;
