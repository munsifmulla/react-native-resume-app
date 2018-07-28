/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

/*Importing Components*/
import Header from './app/components/header/header';
import Bio from './app/components/bio/bio';
import Skills from './app/components/skills/skills';


export default class Resumeapp extends Component<{}> {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header></Header>
          <View style={styles.dcontainer}>
            <Bio></Bio>
            <Skills></Skills>
            <Skills></Skills>
            <Skills></Skills>
            <Skills></Skills>
            <Skills></Skills>
            <Skills></Skills>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  dcontainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    width: '100%',
    elevation: 1,
    marginTop: 250
  }
});
