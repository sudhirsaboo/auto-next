/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: "/rest-api/:path*",
                destination: "http://localhost:9090/artulous-api-server/:path*", // Proxy to Backend
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "avatar.vercel.sh",
            },
        ],
    },
    webpack: (config, options) => {
        /**
         * Force scss source maps for debugging. If there are performance issues or you don't need debug css, use the value "eval-source-map" instead.
         */
        if (options.dev) {
            Object.defineProperty(config, "devtool", {
                get() {
                    return "source-map";
                },
                set() {},
            });
        }
        //config.resolve.fallback = { ...config.resolve.fallback, fs: false };
        if (!options.isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    fs: false,
                    //request: false,
                    //path: false,
                    //debug: false,
                },
            };
        }
        return config;
    },
};

module.exports = nextConfig;
