const routes = [
  {
    path: '/',
    label: 'AP',
    // component: lazy(() => import('../pages/Index')),
    index: true,
    showInNav: true,
  },
  {
    path: '/about',
    label: 'About',
    // component: lazy(() => import('../pages/About')),
    showInNav: true,
  },
  {
    path: '/resume',
    label: 'CV',
    // component: lazy(() => import('../pages/Resume')),
    showInNav: true,
  },
  {
    path: '/projects',
    label: 'Projects',
    // component: lazy(() => import('../pages/Projects')),
    showInNav: true,
  },
  {
    path: '/stats',
    label: 'Stats',
    // component: lazy(() => import('../pages/Stats')),
    showInNav: true,
  },
  {
    path: '*',
    // component: lazy(() => import('../pages/NotFound')),
    showInNav: false,
  },
  {
    label: 'JSON Resume',
    path: '/api/resume',
    showInNav: false,
  },
];

export default routes;
