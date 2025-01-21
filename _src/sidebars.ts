import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/introduction' },
      items: [
        'getting-started/introduction',
        'getting-started/getting-started',
        'getting-started/permissions-required',
        'getting-started/installation-environment'
      ]
    },
    {
      type: 'category',
      label: 'Tips',
      items: [
        'tips/ecr_auto_create',
        'tips/monitor_availability',
        'tips/aws_alb_best_practice',
        'tips/aws_zone_id_name_query'
      ]
    }
  ],
  /**
   * For every product version, we create a new file in the "changelog" directory,
   * and add it to the "items" below
   */
  changelogSidebar: [
    {
      type: 'category',
      label: 'Product Changelog',
      items: [
        'changelog/1.9.0',
        'changelog/1.8.0',
        'changelog/1.7.0'
      ]
    }
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'API',
      link: { type: 'doc', id: 'api/index' },
      items: [
      ]
    }
  ],

  /**
   * For every version for each providers, we need to create a new sidebar definition.
   *
   * Also for every new version created, we need to update the "@docusaurus/plugin-client-redirects"
   * settings in the docusaurus.config.ts file.
   */
  // The collection of "Karpenter Alibaba Cloud - 0.1.0" documents.
  ['karpeneterAlicloud_preview_Sidebar']: [
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'karpenter/alibabacloud/preview/getting-started/index' },
      items: [
        'karpenter/alibabacloud/preview/getting-started/set-up-a-cluster-and-add-karpenter/index'
      ]
    }
  ],
  ['karpeneterAlicloud_v0.1_Sidebar']: [
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'karpenter/alibabacloud/v0.1/getting-started/index' },
      items: [
        'karpenter/alibabacloud/v0.1/getting-started/set-up-a-cluster-and-add-karpenter/index'
      ]
    }
  ]
};

export default sidebars;
