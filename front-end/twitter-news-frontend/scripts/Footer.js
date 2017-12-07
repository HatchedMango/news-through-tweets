import React from 'react';

import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { footerDisplayDetails } from './display/display';

export default class Footer extends React.Component {
  render() {
    const fdd = footerDisplayDetails;
    const styles = fdd.getStylingForView();
    const currentView = this.props.currentView;

    return (
      <View id='footer' style={styles.container}>
      {this.createIconDisplays(currentView, fdd, styles)}
      </View>
    );
  }

  createIconDisplays(currentView, fdd, styles) {
    const viewIconsList = fdd.getFooterViewIcons(currentView);
    const viewList = fdd.getListOfViews();

    return viewIconsList.map((icon, index) => {
      return (
        <TouchableWithoutFeedback 
          key={index} 
          onPress={() => this.props.onViewSelect(viewList[index])}
        >
          <Image 
            style={styles.image} 
            source={icon}
          />
        </TouchableWithoutFeedback>
      );
    });
  }
}
