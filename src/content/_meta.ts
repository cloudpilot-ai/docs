export default {
  index: {
    type: 'page',
    display: 'hidden',
    title: 'Homepage'
  },
  'getting-started': {
    type: 'page',
    title: 'Getting Started'
  },
  // api: {
  //   type: 'page',
  //   title: 'API'
  // },
  changelog: {
    type: 'page',
    title: 'Changelog'
  },
  'karpenter-alibabacloud': {
    type: 'menu',
    title: 'Alibaba Cloud',
    items: {
      'v0.1': {
        title: 'v0.1',
        href: '/karpenter-alibabacloud/v0.1'
      },
      pewview: {
        title: 'Preview',
        href: '/karpenter-alibabacloud/preview'
      }
    }
  }
  // changelog: {
  //   type: 'page',
  //   title: 'Documentation',
  //   items: {
  //     // index: '',
  //     // advanced: {},
  //     _: {
  //       type: 'separator',
  //       title: 'Themes'
  //     },
  //     __: {
  //       type: 'separator',
  //       title: 'More'
  //     }
  //     // 'about-link': {
  //     //   title: 'About Nextra',
  //     //   href: '/about'
  //     // },
  //     // 'next.js-link': {
  //     //   title: 'Next.js Docs',
  //     //   href: 'https://nextjs.org?utm_source=nextra.site&utm_medium=referral&utm_campaign=sidebar'
  //     // },
  //     // 'migration-from-v3': {
  //     //   title: 'Migration from Nextra v3',
  //     //   href: 'https://the-guild.dev/blog/nextra-4?utm_source=nextra.site&utm_campaign=sidebar&utm_content=sidebar_link#nextra-theme-docs-changes'
  //     // }
  //   }
  // },
  // versions: {
  //   type: 'menu',
  //   title: 'Versions',
  //   items: {
  //     // _3: {
  //     //   title: 'Nextra v3 Docs',
  //     //   href: 'https://nextra-v2-7hslbun8z-shud.vercel.app'
  //     // },
  //     // _2: {
  //     //   title: 'Nextra v2 Docs',
  //     //   href: 'https://nextra-v2-oe0zrpzjp-shud.vercel.app'
  //     // }
  //   }
  // }
  // about: {
  //   type: 'page',
  //   theme: {
  //     typesetting: 'article'
  //   }
  // },
  // showcase: {
  //   type: 'page',
  //   theme: {
  //     typesetting: 'article',
  //     layout: 'full',
  //     timestamp: false
  //   }
  // },
};
