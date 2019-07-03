/* eslint-disable linebreak-style */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

const routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default routes;
