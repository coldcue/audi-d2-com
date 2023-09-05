// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Audi-D2.com',
  tagline: 'Everything about Audi A8/S8/A8L from 1994 to 2002',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://audi-d2.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coldcue', // Usually your GitHub org/user name.
  projectName: 'audi-d2-com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/coldcue/audi-d2-com/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/coldcue/audi-d2-com/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'cars, forum, blog, audi, a8, s8, a8l, d2, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, technical, maintenance'}],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Audi-D2.com',
        logo: {
          alt: 'Audi-D2.com',
          src: 'img/logo200x200.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'technicalAndMaintenanceSidebar',
            position: 'left',
            label: 'Technical & Maintenance',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          {to: 'https://forum.audi-d2.com/', label: 'Forum', position: 'left'},
        ],
      },
      footer: {
         copyright: `This site doesn't make any income and doesn't accept donations. All information is provided as-is and without warranty and is intended for informational purposes only.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
