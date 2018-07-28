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


export default class Skills extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Skills
        </Text>
        <View style = {styles.skillsList}>
          <Text style = {styles.skills}>HTML5</Text>
          <Text style = {styles.skills}>CSS3</Text>
          <Text style = {styles.skills}>Javascript</Text>
          <Text style = {styles.skills}>jQuery</Text>
          <Text style = {styles.skills}>jQuery UI</Text>
          <Text style = {styles.skills}>React JS</Text>
          <Text style = {styles.skills}>React Native</Text>
          <Text style = {styles.skills}>Node JS</Text>
          <Text style = {styles.skills}>npm</Text>
          <Text style = {styles.skills}>GIT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15
  },
  heading:{
    fontSize: 16,
    fontFamily: 'Source Sans Pro',
    color: '#222',
    width: '100%',
    textAlign: 'center'
  },
  skillsList:{
    width: '100%',
    flex:0,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  skills:{
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
    marginVertical: 3,
    marginHorizontal: 3
  }
});
