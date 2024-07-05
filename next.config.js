// /** @type {import('next').NextConfig} */

// const myDomain = "yingchaoooo.com";

// const nextConfig = {
//   basePath: "/docs",

//   //   async rewrites() {
//   //     return [
//   //       {
//   //         source: "/with-basePath", // automatically becomes /docs/with-basePath
//   //         destination: "/another", // automatically becomes /docs/another
//   //       },
//   //       {
//   //         // does not add /docs to /without-basePath since basePath: false is set
//   //         // Note: this can not be used for internal rewrites e.g. `destination: '/another'`
//   //         source: "/without-basePath",
//   //         destination: "https://example.com",
//   //         basePath: false,
//   //       },
//   //     ];
//   //   },

//   async redirects() {
//     return [
//       //   {
//       //     source: "/:path*",
//       //     destination: "/",
//       //     permanent: true,
//       //   },
//       {
//         source: "/redirects",
//         destination: `https://blog.${myDomain}`,
//         permanent: true,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
