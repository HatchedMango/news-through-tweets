import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { getViewIcon, getViewHeader } from './util.js';

export default class Header extends React.Component {
  render() {
    const currentView = this.props.currentView;
    let imageHTML;
    
    if (currentView == 'search_news') 
      imageHTML = <Image style={styles.searchImage} source={getViewIcon(currentView, 'white')} />
    else 
      imageHTML = <Image style={styles.image} source={getViewIcon(currentView, 'white')} />

    return (
      <View id='header' style={styles.container}>
        {imageHTML}
        <Text style={styles.heading}>{getViewHeader(currentView)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.1,
    backgroundColor: '#213E4A',
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: -15,
  },
  searchImage: {
    width: 38,
    height: 38,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: -5,
  },
  heading: {
    fontFamily: 'Georgia', 
    color: 'white',
    fontSize: 35,
    marginBottom: 0,
  }
});
