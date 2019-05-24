import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';
import Login from "./src/components/login";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
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
 }
});
