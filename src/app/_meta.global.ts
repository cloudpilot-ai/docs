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
      getting_started: {
        items: {
          getting_started: {},
          installation_environment: {},
          deploying_with_existing_user: {},
          uninstall_cloudpilot: {}
        }
      },
      nodes_optimization: {
        items: {
          keep_part_nodes: {}
        }
      },
      rebalance_configuration: {
        items: {
          workload_config: {}
        }
      },
      security: {
        items: {
          permissions_required: {},
          data_collection: {}
        }
      },
      tips: {
        items: {
          ecr_auto_create: {},
          monitor_availability: {},
          aws_alb_best_practice: {},
          aws_zone_id_name_query: {}
        }
      }
    }
  },
  changelog: {
    type: 'page',
    title: 'Changelog',
    items: {
      '1.9.2': {},
      '1.9.1': {},
      '1.9.0': {},
      '1.8.0': {},
      '1.7.0': {}
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
          getting_started: {
            items: {
              'set-up-a-cluster-and-add-karpenter': {}
            }
          }
        }
      },
      preview: {
        type: 'page',
        title: 'Preview',
        items: {
          index: {},
          getting_started: {
            items: {
              'set-up-a-cluster-and-add-karpenter': {}
            }
          }
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
