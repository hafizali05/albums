//Import libs for making a Component


import React from 'react';

import { Text, View } from 'react-native';

//Make a Component


const Header =(prop)=>{
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style = { textStyle }>{prop.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle : {
    shadowColor:'#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    height:60,
    paddingTop:15,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20,

  }
}
//make the Component available to other parts of the applications

export default Header
