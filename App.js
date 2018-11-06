import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { Header } from './src/components/common';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCm6h-4IVbkdazTnVoB5m_b_VvdmIBPP70",
      authDomain: "pwdk-employeemanagement.firebaseapp.com",
      databaseURL: "https://pwdk-employeemanagement.firebaseio.com",
      projectId: "pwdk-employeemanagement",
      storageBucket: "",
      messagingSenderId: "57211899631"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Please Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}