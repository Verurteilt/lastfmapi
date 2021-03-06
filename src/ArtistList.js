/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';

import ArtistBox from './ArtistBox'

export default class Artistlist extends Component {

  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    }
  }
  
  render() {
    
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <ArtistBox artist={rowData} />} />
    );
  }
}

