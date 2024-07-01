/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ucarecdn.com',
        },
        {
          protocol: 'https',
          hostname: 'wordpress-1274573-4606161.cloudwaysapps.com',
        },
      ],
    },
  }
  
  export default nextConfig