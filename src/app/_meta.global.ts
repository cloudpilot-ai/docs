export default {
  index: {
    title: 'Homepage',
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
    display: 'hidden',
    items: {
      'v0.1': {
        type: 'page',
        title: 'v0.1'
      },
      preview: {
        type: 'page',
        title: 'Preview'
      }
    }
  },
  '__karpeneter-alibabacloud__menu': {
    type: 'menu',
    title: 'Alibaba Cloud',
    items: {
      'v0.1': {
        title: 'v0.1',
        href: '/karpenter-alibabacloud/v0.1'
      },
      preview: {
        title: 'Preview',
        href: '/karpenter-alibabacloud/preview'
      }
    }
  }
};
