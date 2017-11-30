import React from 'react';
import { Button, Image, Navigator, StyleSheet, Text, View } from 'react-native';

export default class Tweet extends React.Component {
  render() {
    const tweet = this.props.tweet;
    let imageDisplay = (
      <Image 
        source={{uri: tweet.media_url}} 
        style={{ borderRadius: 3, width: 350, height: 350}}
      />
    );

    imageDisplay = (tweet.media_url != '') ? imageDisplay : <Image/>

    return (
      <View style={styles.container} class='tweet'>
        <View style={{ overflow: 'hidden', borderRadius: 3, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '49.7%', backgroundColor: '#f5f9fa' }}>
            <Button
              onPress={() => this.props.onReadPress()}
              title="Read"
            />
          </View>
          <View style={{ width: '49.7%', backgroundColor: '#f5f9fa' }}>
            <Button
              onPress={() => this.props.onSavePress()}
              title="Save"
              color="#841584"
            />
          </View>
        </View>
        <Text style={{ width: '97%', marginTop: 8, marginBottom: 8, fontFamily: 'Helvetica-Light', fontSize: 15 }}>
          {tweet.text}
        </Text>
        {imageDisplay}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    margin: 2.5,
    shadowOffset:{  width: 1,  height: -1,  },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    padding: 2,
  }
});
