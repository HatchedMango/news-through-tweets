import React from 'react';
import Tweet from './Tweet';

import { Text, View } from 'react-native';
import { dayViewDisplayDetails } from './display/display';

export default class DayView extends React.Component {
  render() {
    const styles = dayViewDisplayDetails.getStylingForView(this.props.dayColorTheme);
    const tweetViews = this.createTweetList(this.props.tweets);
    
    return (
      <View class='day-view' style={styles.container}>
        <View class='left-border' style={styles.sideBar}/>
        <View class='tweets' style={styles.tweets}>
          <View class='day-header' style={styles.header}>
            <Text style={styles.headingText}>
              {this.props.dayName}
            </Text>
          </View>
          {tweetViews}
        </View>
      </View>
    );
  }

  createTweetList(tweets) {
    return tweets.map((tweet, index) => {
      return (
        <Tweet
          key={index}
          tweet={tweet}
          onReadPress={(storyUrl) => this.props.onTweetRead(storyUrl)}
          onSavePress={() => this.props.onTweetSave()}
        />
      );
    });
  }
}
