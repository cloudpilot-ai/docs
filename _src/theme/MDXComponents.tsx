// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';

import Card from '../components/Card';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';
import CardHeader from '../components/Card/CardHeader';
import CardImage from '../components/Card/CardImage';

import Columns from '../components/Columns';
import Column from '../components/Column';

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  Columns,
  Column
};
