import React from 'react';
import Tweet from './Tweet';
import { StyleSheet, Text, View } from 'react-native';

export default class DayView extends React.Component {
  constructor(props) {
    super(props);
    this.styles = getStyling(this.props.dayColorTheme); 
  }

  render() {
    const tweetViews = this.createTweetList(this.props.tweets);
    
    return (
      <View class='day-view' style={this.styles.container}>
        <View class='left-border' style={this.styles.sideBar}/>
        <View class='tweets' style={this.styles.tweets}>
          <View class='day-header' style={this.styles.header}><Text style={this.styles.headingText}>{this.props.dayName}</Text></View>
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

function getStyling(colorTheme) {
  return StyleSheet.create({
    container: {
      width: '99.3%',
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
      borderWidth: 1,
      borderRadius: 1,
      borderColor: colorTheme,
      height: '100%',
    },
    tweets: {
      width: '97.9%',
    },
    header: {
      width: '100%',
      height:40,
      justifyContent: 'center',
      backgroundColor: colorTheme,
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
}
