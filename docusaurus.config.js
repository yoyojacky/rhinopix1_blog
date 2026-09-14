// @ts-check
// rhinoPix1's personal blog — Docusaurus configuration

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "rhinoPix1's Blog",
  tagline: 'Cyberpunk-themed personal blog — notes, projects, and experiments',
  favicon: 'img/favicon.ico',

  url: 'https://yoyojacky.github.io',
  baseUrl: '/rhinopix1_blog/',

  organizationName: 'yoyojacky',
  projectName: 'rhinopix1_blog',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en',
        direction: 'ltr',
      },
      'zh-Hans': {
        label: '简体中文',
        htmlLang: 'zh-CN',
        direction: 'ltr',
        translate: true,
      },
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: {
          routeBasePath: '/blog',
          path: 'blog',
          authorsMapPath: 'authors.yml',
          blogTitle: "rhinoPix1's Blog",
          blogDescription: 'Notes, projects, and experiments',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            title: "rhinoPix1's Blog",
            description: 'Cyberpunk-themed personal blog',
            language: 'en',
          },
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 200 } }),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: false,
      },
      image: 'img/social-card.png',
      metadata: [
        { name: 'keywords', content: 'rhinoPix1, blog, cyberpunk, tech, notes' },
        { name: 'description', content: 'Cyberpunk-themed personal blog' },
      ],

      navbar: {
        title: 'rhinoPix1',
        logo: {
          alt: 'rhinoPix1 Logo',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          { to: '/blog/tags', label: 'Tags', position: 'left' },
          {
            href: 'https://github.com/yoyojacky/rhinopix1_blog',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} rhinoPix1. Built with Docusaurus.`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['bash', 'yaml', 'python', 'json', 'diff', 'rust'],
      },
    }),
};

module.exports = config;
