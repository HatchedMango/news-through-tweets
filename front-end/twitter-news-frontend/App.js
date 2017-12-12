import React from 'react';
import Header from './scripts/Header';
import Footer from './scripts/Footer';
import TweetsView from './scripts/TweetsView';

import { Text, View, WebView, ActivityIndicator, AsyncStorage } from 'react-native';
import { appDisplayDetails } from './scripts/display/display';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRender: 'main',
      currentView: 'world_news',
      tweetsForView: [],
      urlForRead: '',
      savedTweets: [],
      isLoadingTweets: true,
    }

    this.fetchTweets('world_news');
    this.loadSavedTweets();
  }

  render() {
    styles = appDisplayDetails.getStylingForView(this.state.isLoadingTweets);

    return (
      <View> 
        { this.state.currentRender === 'main' && this.getMainRender(styles) }
        { this.state.currentRender === 'read' && this.getReadRender(styles) }
      </View>
    );
  }

  getMainRender(styles) {
    return (
      <View style={styles.container}>
        <Header
          currentView={this.state.currentView}
          hasIconFunction={false}
        />
        <View style={styles.scrollableView}>
          <ActivityIndicator 
            style={styles.loadContainer} 
            animating={this.state.isLoadingTweets} 
            size={'large'}
          />
          <TweetsView
            tweets={this.state.tweetsForView}
            currentView={this.state.currentView}
            onTweetRead={(storyUrl) => this.launchReadView(storyUrl)}
            onTweetSave={(tweet) => this.saveTweetData(tweet)}
          />
        </View>
        <Footer
          currentView={this.state.currentView}
          onViewSelect={(newView) => this.changeView(newView)}
        />
      </View>
    );
  }

  getReadRender(styles) {
    return (
      <View style={styles.container}>
        <Header
          currentView={'read_story'}
          hasIconFunction={true}
          iconFunction={() => this.returnToMain()}
        />
        <View style={styles.webViewContainer}>
          <WebView
            source={{uri: this.state.urlForRead}}
            style={styles.webView}
            startInLoadingState={true}
          >
          </WebView>
        </View>
      </View>
    );
  }

  changeView(newView) {
    if (newView != this.state.currentView) {
      this.setState({ currentView: newView });
      this.fetchTweets(newView);
    }
  }

  returnToMain() {
    this.setState({ currentRender: 'main', urlForRead: '' });
  }

  launchReadView(storyUrl) {
    this.setState({ currentRender: 'read', urlForRead: storyUrl });
  }

  saveTweetData(tweet) {
    const currentSaved = this.state.savedTweets;
    this.setState({ savedTweets: [tweet, ...currentSaved] });
    
    AsyncStorage.setItem(`@TwitterNewsStore:${tweet.id}`, JSON.stringify(tweet));
  }

  loadSavedTweets() {
    this.getAllSavedTweets()
      .then(tweets => {
        this.setState({ savedTweets: tweets });
      });
  }

  getAllSavedTweets() {
    return Promise.all(AsyncStorage.getAllKeys()
      .then(keys => {
        return keys.map(key => {
          return JSON.parse(AsyncStorage.getItem(key));
        });
      }));
  }

  fetchTweetsDummy(newView) {
    const twitter_data = "[[{\"id\": \"1684684216846\", \"title\": \"The Weather Channel\", \"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"id\": \"168468421116\", \"title\": \"USA Today\", \"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"id\": \"168987897216846\", \"title\": \"hello fred\", \"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"id\": \"16846816846\", \"title\": \"The Weather Channel\", \"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}], [{\"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}]]";
    
    if (newView === 'saved_news')
      this.setState({ tweetsForView: [this.state.savedTweets] });
    else
      this.setState({ tweetsForView: JSON.parse(twitter_data) });
  }

  fetchTweets(newView) {
    this.setState({ tweetsForView: [[]], isLoadingTweets: true });

    if (newView === 'saved_news') {
      this.setState({ tweetsForView: [this.state.savedTweets], isLoadingTweets: false });
    } else if (newView === 'search_news') {
      this.setState({ isLoadingTweets: false });
    } else {
      fetch(`https://calm-mesa-88788.herokuapp.com/news_data?news_type=${newView}`)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({ tweetsForView: JSON.parse(responseJson), isLoadingTweets: false });
      }) 
      .catch(error => {
        console.error(error);
        this.state.tweetsForView = 'error';
      });
    }
  }
}
