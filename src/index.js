import React from 'react';
import createNavigator from './routes';
import './config/ReactotronConfig';
import './config/DevTools';

const App = () => {
  const Routes = createNavigator();
  return <Routes />;
};

export default App;
