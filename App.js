import React, {Component} from 'react';
import {View, Text} from 'react-native';
import  {Provider, store} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import {Header} from './src/components/common';
import Router from './src/Router';

class App extends Component{

  componentWillMount(){
    var config = {
      apiKey: 'AIzaSyC9TxGjHZC_c2YCmXogl9BFFzr4CwFThSw',
      authDomain: 'manager-7f7c5.firebaseapp.com',
      databaseURL: 'https://manager-7f7c5.firebaseio.com',
      projectId: 'manager-7f7c5',
      storageBucket: 'manager-7f7c5.appspot.com',
      messagingSenderId: '1020550055483'
    };

    firebase.initializeApp(config);
  };

  render(){

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
    <Provider store={store}>
      <View style={{flex: 1}}>
          <Router/>
        </View>
    </Provider>
    )};
}


const styles = {

  landing:{
    paddingTop: 40,
    paddingLeft: 20
  }

};

export default App;