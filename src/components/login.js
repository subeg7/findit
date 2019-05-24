/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';

export default class Login extends React.Component {

  render() {
    console.log("here is the console..................>");
    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.text} >
          Univ App
        </Text>

        <TouchableHighlight
          onPress={this.openCamera}
        >

            <View style={styles.pressed_out}>
              <Image
              style={styles.camPic}
              source={require('./cam.png')}
                />
            </View>

        </TouchableHighlight>
        </View>

      </View>
    );
  }

  openCamera = ()=>{
    console.log("open camera");
  }
}


const styles = StyleSheet.create({
  container: {
    height:130,
    justifyContent: 'center',
    flex: 1,
     alignItems: "center",
     paddingTop: 30
  },

  text: {
        // fontFamily: "CircularStd-Book",
        fontSize: 20,
        color: '#2f354b',
        textAlign: 'center'
    },

 pressed_out: {
   borderRadius: 1000,
   height: 100,
   width: 100,
   backgroundColor:'yellow',
   justifyContent: "center"

  },

 pressed_in: {
   backgroundColor: "#8C0000",
   borderRadius: 10,
   height: 100,
   width: 100,
   justifyContent: "center"
 },

 camPic:{
   width:100,
   height:100
 }
});
