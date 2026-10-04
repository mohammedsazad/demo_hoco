/** @type {import('next').NextConfig} */
const nextConfig = { images: { remotePatterns: [{ protocol: 'images', hostname: '**' }, { protocol: 'https', hostname: '**' }] } };
export default nextConfig;
