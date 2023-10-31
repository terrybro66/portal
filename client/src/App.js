import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { useRoutes } from 'react-router';
import Menu from './components/menu/Menu';
import SectionContent from './SectionContent';

const sections = [
  { path: '/section1', component: <SectionContent title={"One"} /> },
  { path: '/section2', component: <SectionContent title={"Two"}/> },
  // Add more sections here
];

const App = () => {
  const routes = useRoutes([
    ...sections,
    { path: '/', element: <Menu sections={sections} /> }
  ]);

  return (
    <Router>
      {routes}
    </Router>
  );
};

export default App;
