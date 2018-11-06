import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { Header } from './src/components/common';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Please Login" />
        </View>
      </Provider>
    );
  }
}