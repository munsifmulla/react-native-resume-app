/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./img/profile.png')}
        />
        <Text style={styles.text}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a3b3d',
    paddingLeft: 10,
    width: '100%',
    height: 250,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  image:{
    width: 180,
    height: 180,
    borderRadius: 180,
    resizeMode: 'contain',
    marginTop: 35,
  },
  text:{

  }
});
