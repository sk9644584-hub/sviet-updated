/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "utfs.io",
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sviet.org.in',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.sviet.ac.in',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '/**',
            },

            {
                protocol: 'https',
                hostname: '*.ufs.sh',
                pathname: '/f/**',
            },
            {
                protocol: 'http',
                hostname: 'static.shubhampf.cloud',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static.shubhampf.cloud',
                pathname: '/**',
            }

        ],
        
    }
};

export default nextConfig;
