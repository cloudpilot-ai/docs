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
    theme: {
      collapsed: true
    },
    items: {
      getting_started: {
        theme: {
          collapsed: true
        },
        items: {
          getting_started: {},
          terraform: {},
          installation_environment: {},
          deploying_with_existing_user: {}
        }
      },
      rebalance_configuration: {
        theme: {
          collapsed: true
        },
        items: {
          workload_config: {},
          workload_diversity: {},
          gradual_optimization: {},
          node_configuration: {},
          node_configuration_nodepool: {},
          spot_instance_diversity: {},
          disable_workload_uploading: {}
        }
      },
      workload_autoscaler: {
        theme: {
          collapsed: true
        },
        items: {
          overview: {},
          installation: {},
          autoscaling_policy: {},
          recommendation_policy: {},
          inplace_update_mode_best_practices_and_limitations: {}
        }
      },
      security: {
        theme: {
          collapsed: true
        },
        items: {
          permissions_required: {},
          data_collection: {}
        }
      },
      administration: {
        theme: {
          collapsed: true
        },
        items: {
          aws_marketplace_subscription: {},
          upgrade_guide: {},
          uninstall: {},
          poc_process: {},
          get_apikeys: {},
          karpenter_events: {}
        }
      },
      concepts: {
        theme: {
          collapsed: true
        },
        items: {
          node_pod_evictor: {},
          tseries_instance_type: {}
        }
      },
      troubleshooting: {
        theme: {
          collapsed: true
        },
        items: {
          log_collection_for_troubleshooting: {}
        }
      },
      tips: {
        theme: {
          collapsed: true
        },
        items: {
          ecr_auto_create: {},
          monitor_availability: {},
          aws_alb_best_practice: {},
          aws_zone_id_name_query: {}
        }
      },
      roadmap: {}
    }
  },
  changelog: {
    type: 'page',
    title: 'Changelog',
    items: {
      '1.14.0': {},
      '1.13.0': {},
      '1.12.0': {},
      '1.11.0': {},
      '1.10.0': {},
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
