import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{ hostname: 'p.qlogo.cn' }, { hostname: 'avatars.githubusercontent.com' }]
  }
};

const withMDX = createMDX({})

export default withMDX(nextConfig);
