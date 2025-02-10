export default {
  index: {
    title: 'Homepage',
    display: 'hidden',
    theme: {
      breadcrumb: false,
      footer: true,
      sidebar: false,
      toc: false,
      pagination: false
    }
  },
  guide: {
    type: 'page',
    title: 'Guide',
    items: {
      'getting-started': {},
      tips: {
        items: {}
      }
    }
  },
  changelog: {
    type: 'page',
    title: 'Changelog',
    items: {
    }
  },
  'karpenter-alibabacloud': {
    type: 'page',
    items: {
      v0_1: {
        type: 'page',
        title: 'v0.1',
        items: {
          index: {},
          'set-up-a-cluster-and-add-karpenter': {}
        }
      },
      preview: {
        type: 'page',
        title: 'Preview',
        items: {
          index: {},
          'set-up-a-cluster-and-add-karpenter': {}
        }
      }
    }
  },
  '__karpeneter-alibabacloud__menu': {
    type: 'menu',
    title: 'Alibaba Cloud',
    items: {
      'v0.1': {
        title: 'v0.1',
        href: '/karpenter-alibabacloud/v0_1/'
      },
      preview: {
        title: 'Preview',
        href: '/karpenter-alibabacloud/preview'
      }
    }
  }
};
