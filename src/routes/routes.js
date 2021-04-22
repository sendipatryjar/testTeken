import React, {Component} from 'react';
import {
  createAppContainer,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingScreen from './../views/landing/landingScreen';
import LoginScreen from './../views/login/loginScreen';
import DetailScreen from './../views/detail/detailScreen';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import reducers from './../redux/reducers';
import ReduxThunk from 'redux-thunk';
import {ROUTE_CHANGES} from './type';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsynStorage from '@react-native-community/async-storage';
import SQLiteStorage from 'redux-persist-sqlite-storage';
import SQLite from 'react-native-sqlite-storage';

const storeEngine = SQLiteStorage(SQLite);
const persistConfig = {
  key: 'root',
  storage : storeEngine
};

const RootNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      headerShown: false,
    },
  }
});

const AppNavigator = createAppContainer(RootNavigator);
const persistReducer = persistCombineReducers(persistConfig, reducers)
const store = createStore(persistReducer, applyMiddleware(ReduxThunk))
const persistor = persistStore(store)
class Root extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <AppNavigator
          onNavigationStateChange={(prevState, newState) => {
            this._getCurrentRouteName(newState);
          }}
        />
        </PersistGate>
      </Provider>
    );
  }

  _getCurrentRouteName(navState) {
    if (navState.hasOwnProperty('index')) {
      this._getCurrentRouteName(navState.routes[navState.index]);
    } else {
      store.dispatch({type: ROUTE_CHANGES, payload: navState.routeName});
  }
  }
}
export default Root;
