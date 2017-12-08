import React from 'react';

import { Button, Image, Navigator, Text, View } from 'react-native';
import { tweetDisplayDetails } from './display/display';

export default class Tweet extends React.Component {
  render() {
    const styles = tweetDisplayDetails.getStylingForView();
    const tweet = this.props.tweet;

    const title = this.createTitle(styles, tweet)
    const buttons = this.createButtons(styles, tweet);
    const image = this.createImage(styles, tweet);

    return (
      <View style={styles.container} class='tweet'>
        {title}
        {buttons}
        <Text style={styles.textContents}>
          {tweet.text}
        </Text>
        {image}
      </View>
    );
  }

  createTitle(styles, tweet) {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {'@ ' + tweet.title}
        </Text>
      </View>
    );
  }

  createButtons(styles, tweet) {
    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.onReadPress(tweet.source_url)}
            title="Read"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.onSavePress()}
            title="Save"
            color="#841584"
          />
        </View>
      </View>
    );
  }

  createImage(styles, tweet) {
    let imageDisplay;

    if (tweet.media_url != '') {
      imageDisplay = (
        <Image 
          source={{uri: tweet.media_url}} 
          style={styles.image}
        />
      );
    } else {
      imageDisplay = <Image/>;
    }

    return imageDisplay;
  }
}
