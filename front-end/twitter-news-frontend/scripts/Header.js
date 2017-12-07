import React from 'react';

import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { headerDisplayDetails } from './display/display';

export default class Header extends React.Component {
  render() {
    const hdd = headerDisplayDetails;
    const currentView = this.props.currentView;
    const styles = hdd.getStylingForView(currentView);
    const iconFunction = this.getIconFunction();

    return (
      <View id='header' style={styles.container}>
        <TouchableWithoutFeedback onPress={iconFunction}>
          <Image style={styles.image} source={hdd.getViewIcon(currentView, 'white')} />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>{hdd.getViewHeader(currentView)}</Text>
      </View>
    );
  }

  getIconFunction() {
    let iconFunction;

    if (this.props.hasIconFunction) {
      iconFunction = this.props.iconFunction;
    } else {
      iconFunction = () => {};
    }

    return iconFunction;
  }
}
