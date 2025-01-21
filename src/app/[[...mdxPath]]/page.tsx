import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: { params: Promise<any> }) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

// eslint-disable-next-line react-hooks/rules-of-hooks -- this is not a react hooks, this is a special function
const Wrapper = useMDXComponents().wrapper!;

export default async function Page({ params, ...rest }: { params: Promise<any> }) {
  const result = await importPage((await params).mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...rest} params={params} />
    </Wrapper>
  );
}
