// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Audi-D2.com",
  tagline: "Everything about Audi A8/S8/A8L from 1994 to 2002",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://audi-d2.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "coldcue", // Usually your GitHub org/user name.
  projectName: "audi-d2-com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/coldcue/audi-d2-com/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/coldcue/audi-d2-com/tree/main/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "audi a8, audi s8, audi d2, service manual, technical manual, maintenance, help, forum, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 6.0, 4.2, 3.7, 3.3, 2.8, 2.5, AZC, AUW, AUX, AQH, AVP, BCS, AYS, ABZ, AKG, AHC, AKH, AQG, AKC, AKF, ACK, ALG, APR, AQD, AMX, AFB, AKN, AKE",
        },
      ],
      // Replace with your project's social card
      image: "img/logo200x200.png",
      navbar: {
        title: "Audi-D2.com",
        logo: {
          alt: "Audi-D2.com",
          src: "img/logo200x200.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "technicalMaintenanceSidebar",
            label: "Technical & Maintenance",
          },
          {
            type: "docSidebar",
            sidebarId: "upgradesSidebar",
            label: "Upgrades",
          },
          {
            to: 'useful_links',
            label: 'Useful Links',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            to: "https://forum.audi-d2.com/",
            label: "Forum",
          },
        ],
      },
      footer: {
        copyright: `This site earns no money, doesn't take donations, and provides information only for reference, with no guarantees. We are not legally responsible for any outcomes.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
      announcementBar: {
        content:
          'The content of this site is under development, and may be incomplete or inaccurate.',
        backgroundColor: '#2e8555',
        textColor: '#FFFFFF',
      },
    }),
  plugins: [
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').Options} */
      {
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
