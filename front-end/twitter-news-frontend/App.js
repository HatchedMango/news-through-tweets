import React from 'react';
import Header from './scripts/Header';
import Footer from './scripts/Footer';
import TweetsView from './scripts/TweetsView';

import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRender: 'main',
      currentView: 'world_news',
      tweetsForView: [],
    }

    this.fetchTweetsDummy('world_news');
  }

  render() {
    return (
      <View> 
        { this.state.currentRender === 'main' && 
          <View style={styles.container}>
            <Header
              currentView={this.state.currentView}
            />
            <View style={styles.scrollableView}>
              <TweetsView
                tweets={this.state.tweetsForView}
                onTweetRead={() => this.launchReadView()}
                onTweetSave={() => this.saveTweetData()}
              />
            </View>
            <Footer
              currentView={this.state.currentView}
              onViewSelect={(newView) => this.changeView(newView)}
            />
          </View>
        }
        { this.state.currentRender === 'read' && 
          <View style={styles.container}>
            <WebView
              url={''}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        }
      </View>
    );
  }

  launchReadView() {
    this.setState({ currentRender: 'read' });
  }

  saveTweetData() {
    
  }

  changeView(newView) {
    if (newView != this.state.currentView) {
      this.setState({ currentView: newView });
      this.fetchTweetsDummy(newView);
    }
  }

  fetchTweetsDummy(newView) {
    const twitter_data = "[[{\"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}], [{\"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"text\": \"Much of the country will experience good weather conditions for post-Thanksgiving travel today, but there will be s\\u2026 https://t.co/BGCdfXKu0G\", \"source_url\": \"https://t.co/BGCdfXKu0G\", \"media_url\": \"\"}, {\"text\": \"WATCH: Abubakar Atiku\\u2019s political journey from 1999 to date\\nhttps://t.co/WvBROkjnlc\", \"source_url\": \"https://t.co/WvBROkjnlc\", \"media_url\": \"\"}, {\"text\": \"Support organisation for Indigenous LGBTI people launches suicide prevention initiative\\nhttps://t.co/IFr0sR6PAQ https://t.co/jOaebKLSQW\", \"source_url\": \"https://t.co/IFr0sR6PAQ\", \"media_url\": \"http://pbs.twimg.com/media/DPnc6KDVQAAzmmO.jpg\"}, {\"text\": \"National News Highlights https://t.co/ysQSaxf1zT\", \"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DPpie_DW4AAtMVB.jpg\"}, {\"text\": \"More than 180 women have accused Massage Envy massage therapists of assault. https://t.co/2rSTZivlyT https://t.co/ltjTDDqp1f\", \"source_url\": \"https://t.co/2rSTZivlyT\", \"media_url\": \"http://pbs.twimg.com/media/DPpfoZMV4AA7l8Z.jpg\"}], [{\"source_url\": \"https://t.co/jTTgMM6vVN\", \"media_url\": \"\", \"text\": \"Every day it becomes clearer and clearer. The reason @realDonaldTrump labeled legit news #FakeNews early on was bec\\u2026 https://t.co/jTTgMM6vVN\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/media/DOp9ltlW0AE5Gop.jpg\", \"text\": \"Subtle indication there may be a coup: your news anchor is suddenly this guy, telling you it\\u2019s totally not a coup. https://t.co/lKOX5uQGnW\"}, {\"source_url\": \"\", \"media_url\": \"http://pbs.twimg.com/amplify_video_thumb/930550230545612800/img/9qGkz-byFaA8T2ko.jpg\", \"text\": \"Fox's Shep Smith takes apart the Uranium One conspiracy his Fox News colleagues have been relentlessly hyping https://t.co/HZBlBtFvo4\"}, {\"source_url\": \"https://t.co/cNfCDYYbEK\", \"media_url\": \"\", \"text\": \"The news just broke \\u2013 Senate Republicans want to rip health insurance away from 13 million Americans... through the\\u2026 https://t.co/cNfCDYYbEK\"}, {\"source_url\": \"\", \"media_url\": \"\", \"text\": \"A gunman just shot up an elementary school in CA. Kids are dead. News isn't showing it.\\n\\nThis is a public health crisis of epic proportion.\"}]]";
    this.state.tweetsForView = JSON.parse(twitter_data);
  }

  fetchTweets(newView) {
    fetch('http://192.168.1.16:5000/news_data', {
      body: JSON.stringify({
        news_type: newView,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.state.tweetsForView = responseJson;
    }) 
    .catch(error => {
      console.error(error);
      this.state.tweetsForView = 'error';
    });
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
