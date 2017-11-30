import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { getViewIcon, getViewHeader, getStylingForView } from './display.js';

export default class Header extends React.Component {
  render() {
    const currentView = this.props.currentView;
    let imageHTML;
    
    styling = getStylingForView(currentView);

    return (
      <View id='header' style={styling.container}>
        <Image style={styling.image} source={getViewIcon(currentView, 'white')} />
        <Text style={styling.heading}>{getViewHeader(currentView)}</Text>
      </View>
    );
  }
}
