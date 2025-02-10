export default {
  index: {
    title: 'Homepage',
    display: 'hidden'
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
    display: 'hidden',
    items: {
      v0_1: {
        type: 'page',
        title: 'v0.1',
        display: 'children',
        items: {
          index: {},
          'set-up-a-cluster-and-add-karpenter': {}
        }
      },
      preview: {
        type: 'page',
        title: 'Preview',
        display: 'children',
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
