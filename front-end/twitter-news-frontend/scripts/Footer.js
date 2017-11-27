import React from 'react';

import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { getFooterViewIcons, getListOfViews } from './util.js';

export default class Footer extends React.Component {
  render() {
    const currentView = this.props.currentView;

    return (
      <View id='footer' style={styles.container}>
      {this.createIconDisplays(currentView)}
      </View>
    );
  }

  createIconDisplays(currentView) {
    const viewIconsList = getFooterViewIcons(currentView);
    const viewList = getListOfViews();

    return viewIconsList.map((icon, index) => {
      return (
        <TouchableWithoutFeedback onPress={() => this.props.onViewSelect(viewList[index])}>
          <Image 
            style={styles.image} 
            source={icon}
            onPress={() => this.props.onViewSelect(viewList[index])}
          />
        </TouchableWithoutFeedback>
      );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#808080',
    borderTopWidth: 0.5,
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 15,
    marginRight: 15,
  }
});