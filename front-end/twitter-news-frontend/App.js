import React from 'react';
import Header from './scripts/Header';
import Footer from './scripts/Footer';
import TweetsView from './scripts/TweetsView';

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentView: 'world_news'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          currentView={this.state.currentView}
        />
        <View style={styles.scrollableView}>
        <TweetsView/>
        </View>
        <Footer
          currentView={this.state.currentView}
          onViewSelect={(newView) => this.changeView(newView)}
        />
      </View>
    );
  }

  changeView(newView) {
    if (newView != this.state.currentView) {
      this.setState({ currentView: newView });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollableView: {
    flex: 10,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
