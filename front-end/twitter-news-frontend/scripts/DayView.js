import React from 'react';
import Tweet from './Tweet';
import { StyleSheet, Text, View } from 'react-native';

export default class DayView extends React.Component {
  render() {
    const tweetViews = this.createTweetList(this.props.tweets);

    return (
      <View class='day-view' style={styles.container}>
        <View class='left-border' style={styles.sideBar}/>
        <View class='tweets' style={styles.tweets}>
          <View class='day-header' style={styles.header}><Text style={styles.headingText}>{this.props.dayName}</Text></View>
          {tweetViews}
        </View>
      </View>
    );
  }

  createTweetList(tweets) {
    return tweets.map(tweet => {
      return (
        <Tweet
          tweet={tweet}
        />
      );
    });
  }
}

const styles = StyleSheet.create({
  container: {
    width: '99%',
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#808080',
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  sideBar: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#4CAF50',
    height: '100%',
  },
  tweets: {
    width: '97.5%',
  },
  header: {
    width: '100%',
    height:40,
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#808080',
    margin: 2.5,
    paddingLeft: 10
  },
  headingText: {
    fontFamily: 'Georgia', 
    color: 'white',
    fontSize: 25,
    marginBottom: 0,
  }
});
