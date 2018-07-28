/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Bio extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          Munsif Mulla
        </Text>
        <Text style={styles.details}>
          Front End Lead at Licious
        </Text>
        <Text style={styles.details}>
          Email: munsifmulla@gmail.com
        </Text>
        <Text style={styles.details}>
          Cell: 0091 (953) 893 3391
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name:{
    fontSize: 16,
    fontFamily: 'Source Sans Pro',
    color: '#222',
    width: '100%',
    textAlign: 'center'
  },
  details:{
    fontSize: 12,
    fontFamily: 'Source Sans Pro',
    color: '#514e4f',
    width: '100%',
    textAlign: 'center'
  }
});
