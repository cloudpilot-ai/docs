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
    projectLink="https://github.com/cloudpilot-ai"
    chatIcon={
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="220" viewBox="0 0 16 16"><path fill="currentColor" d="M5.913 0a1.739 1.739 0 1 0 0 3.478h1.74V1.74A1.743 1.743 0 0 0 5.912 0zm4.174 0c-.96 0-1.74.778-1.74 1.74v4.173a1.739 1.739 0 1 0 3.48 0V1.739c0-.96-.78-1.739-1.74-1.739M1.739 4.174a1.739 1.739 0 1 0 0 3.478h4.174a1.739 1.739 0 1 0 0-3.478zm12.522 0c-.96 0-1.74.778-1.74 1.739v1.74h1.74a1.739 1.739 0 1 0 0-3.48zM1.739 8.348a1.739 1.739 0 1 0 1.74 1.739v-1.74zm4.174 0c-.96 0-1.74.778-1.74 1.739v4.174a1.739 1.739 0 1 0 3.48 0v-4.174c0-.96-.78-1.74-1.74-1.74zm4.174 0a1.739 1.739 0 1 0 0 3.478h4.174a1.739 1.739 0 1 0 0-3.478zm-1.74 4.174v1.739a1.739 1.739 0 1 0 1.74-1.74z" /></svg>
    }
    chatLink="https://app.slack.com/client/T073TAAS5FW/C073J7ECB9C"
  />
);
const footer = (
  <Footer>
    Copyright &copy; 2024 -
    {' '}
    <CurrentYear style={{ display: 'contents' }} defaultYear={2025} />
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
          nextThemes={{
            defaultTheme: 'light'
          }}
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
