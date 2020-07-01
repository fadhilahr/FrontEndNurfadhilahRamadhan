import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { store } from './src/redux/store';
import LoginScreen from './src/views/login/index';
import HomeScreen from './src/views/home/index';
import CustomDrawer from './src/components/CustomDrawer';


const HomeNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Contact: { screen: Contact },
  Login: { screen: LoginScreen }

}, {
  initialRouteName: 'Home',
  drawerType: 'slide',
  contentComponent: props => <CustomDrawer {...props} />
});

const Navigator = createStackNavigator({
  HomeNavigator,
  ContactDetails: { screen: ContactDetailsScreen },
  ContactForm: { screen: ContactForm }
}, {
  initialRouteName: 'HomeNavigator',
  headerMode: 'none'
});

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}