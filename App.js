import React from'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'
import CreateScreen from './src/screens/CreateScreen'
import { Provider } from './src/context/BlogContext'
const navigator = createStackNavigator({
  Home : IndexScreen,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit : EditScreen,
},{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title: 'Blogs',
  }
});
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

