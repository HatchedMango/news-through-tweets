import React from 'react';
import DayView from './DayView';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class TweetsView extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    }
  }

  render() {
    this.fetchTweetsDummy();
    const dayViews = this.createDayViews(this.state.tweets);

    return (
      <ScrollView id='tweets-view' style={styles.container}>
        {dayViews}
      </ScrollView>
    );
  }

  createDayViews(tweetsByDay) {
    const dayNames = ['Today', 'Yesterday'];

    return tweetsByDay.map((tweets, index) => {
      return (
        <DayView
          tweets={tweets}
          dayName={dayNames[index]}
        />
      );
    });
  }

  fetchTweetsDummy() {
    const twitter_data = "[[{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}], [{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}]]";
    this.state.tweets = JSON.parse(twitter_data);
  }

  fetchTweets() {
    fetch('http://192.168.1.16:5000/news_data')
    .then((response) => response.json())
    .then((responseJson) => {
      this.state.tweets = responseJson;
    }) 
    .catch(error => {
      console.error(error);
      this.state.tweets = 'error';
    });
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  }
});
