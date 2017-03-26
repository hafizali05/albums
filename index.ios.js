//Import a library to help create a Component

import React from 'react';

import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';

import AlbumList from './src/components/albumList';


//create a Component

const App = () => (

        <View>
            <Header headerText = { 'albums' } />
            <AlbumList />
        </View>
)


//Render it on the device


AppRegistry.registerComponent('albums',()=> App);
