//Import a library to help create a Component

import React from 'react';

import {AppRegistry} from 'react-native';

import Header from './src/components/header'
//create a Component

const App = () => <Header headerText = { 'albums' } />;


//Render it on the device


AppRegistry.registerComponent('albums',()=> App);
