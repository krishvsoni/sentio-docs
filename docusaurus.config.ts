import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sentio',
  tagline: 'Security, Auditing, and Monitoring in Arweave and AO Space',
  favicon: 'https://imgur.com/VORqgTq.png.ico',

  // Set the production url of your site here
  url: 'https://sentio-ao.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'https://github.com/sentioao', // Usually your GitHub org/user name.
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
      title: 'Sentio',
      logo: {
        alt: 'logo',
        src: 'https://imgur.com/VORqgTq.png',
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
              label: 'Introduction',
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
