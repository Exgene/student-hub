/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js')

/** @type {import("next").NextConfig} */
const config = {
  images: {
    // domains: [
    //   'nitte.edu.in,nmamit.nitte.edu.in,https://nmamit.nitte.edu.in',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nitte.edu.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nmamit.nitte.edu.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default config
