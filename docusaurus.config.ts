import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SENTIO',
  tagline: 'Security, Auditing, and Monitoring in Arweave and AO Space',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sentio.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haard18', // Usually your GitHub org/user name.
  projectName: 'Sentio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sentioAO/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sentioAO/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://i.imgur.com/ReJXkJg.png',
    navbar: {
      title: 'SENTIO',
      logo: {
        alt: 'SENTIO',
        src: 'https://i.imgur.com/04uG8mf.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Team', position: 'left'},
        {
          href: 'https://github.com/sentioAO/Sentio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SENTIO',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
           
            {
              label: 'Discord',
              href: 'https://discord.gg/XZyU72DJ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Sentio_AR',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Team',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sentioAO/Sentio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}   `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
