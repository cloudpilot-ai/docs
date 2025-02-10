import Image from 'next/image';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import { CurrentYear } from 'foxact/current-year';
import type { Metadata } from 'next';

import '../styles/layout.css';

export const metadata: Metadata = {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://docs.cloudpilot.ai'),
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './' // note this is ./, not / !!!
  },
  title: {
    default: 'CloudPilot AI – Intelligent Kubernetes Cost Optimization Platform on Karpenter',
    template: '%s | CloudPilot AI Docs'
  },
  description: '',
  keywords: [],
  creator: 'CloudPilot AI',
  icons: {
    icon: [
      {
        url: 'https://assets.cloudpilot.ai/favicon/favicon.svg',
        type: 'image/svg+xml',
        rel: 'icon'
      },
      {
        url: 'https://assets.cloudpilot.ai/favicon/web-app-manifest-192x192.png',
        type: 'image/png',
        sizes: '192x192',
        rel: 'icon'
      },
      {
        url: 'https://assets.cloudpilot.ai/favicon/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
        rel: 'icon'
      }
    ],
    shortcut: {
      url: 'https://assets.cloudpilot.ai/favicon/favicon.ico',
      rel: 'shortcut icon'
    },
    apple: {
      url: 'https://assets.cloudpilot.ai/favicon/apple-touch-icon.png',
      sizes: '180x180'
    }
  }
};

// const banner = <Banner storageKey="some-key">Banner Content</Banner>;
const navbar = (
  <Navbar
    logo={
      <Image alt="CloudPilot AI Logo" src="https://assets.cloudpilot.ai/logo/logo-wordmark-horizontal.svg" width={173} height={32} />
    }
  />
);
const footer = (
  <Footer>
    Copyright &copy; 2024 -
    {' '}
    <CurrentYear defaultYear={2025} />
    {' '}
    CloudPilot AI, Inc. | Made with Nextra
  </Footer>
);

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        // ... additional head options
      >
        {/* additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/cloudpilot-ai/docs/tree/main/"
          footer={footer}
          // ... additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
