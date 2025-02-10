import type { MDXComponents } from 'mdx/types';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // nextra-theme-blog or your custom theme
import { Cards } from './components/cards';

// Get the default MDX components
const themeComponents = getThemeComponents();

// eslint-disable-next-line @eslint-react/hooks-extra/no-useless-custom-hooks -- this is a special function, not react hooks
export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...themeComponents,
    ...components,
    Cards
  };
}
