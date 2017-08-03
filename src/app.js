/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';

import ArtistList from './ArtistList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
});


export default class PlatziMusic extends Component {


  
  
  render() {
    const artist = {
      image:  "https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png",
      name: 'React native',
      likes: 200,
      comments: 140
    }

    const artists = Array(500).fill(artist)

    return (
      <View style={styles.container}>
        <ArtistList artists = {artists}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
