

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  artistBox: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .9,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  name: {
      fontSize: 20,
      marginTop: 10
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer:{
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
export default class ArtistBox extends Component {



  render() {
  const { image, name, comments, likes } = this.props.artist
    
    
    return (
        <View style={styles.artistBox}>
            <Image source={{uri: image}}  style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.row}>
                  <View style={styles.iconContainer}>
                    <Icon name="ios-heart-outline" size={30} color="gray"></Icon>
                    <Text style={styles.count}>{likes}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Icon name="ios-chatbubbles-outline" size={30} color="gray"></Icon>
                    <Text style={styles.count}>{comments}</Text>
                  </View>
                </View>
            </View>
        </View>
    );
  }
}



