import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;

// Loadable is a tool for component-level code splitting
const Page1 = Loadable({
  loader: () => import('./Page1/Page1'),
  loading,
});
const Page2 = Loadable({
  loader: () => import('./Page2/Page2'),
  loading,
});
const NoMatch = Loadable({
  loader: () => import('./NoMatch/NoMatch'),
  loading,
});

export { Page1, Page2, NoMatch };
