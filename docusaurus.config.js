module.exports = {
  title: 'Forward Alone',
  tagline: 'Stay Hungry Stay Foolish',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'hunxiran', // Usually your GitHub org/user name.
  projectName: 'ForwardAlone', // Usually your repo name.
  // themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'Forward Alone',
      logo: {
        alt: 'Forward Alone Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/html/Concepts', label: 'Interview', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} hunxiran, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image']
};
