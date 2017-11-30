import React from 'react';
import DayView from './DayView';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class TweetsView extends React.Component {
  render() {
    const dayViews = this.createDayViews(this.props.tweets);

    return (
      <ScrollView id='tweets-view' style={styles.container}>
        {dayViews}
      </ScrollView>
    );
  }

  createDayViews(tweetsByDay) {
    const dayNames = this.createDayNames();
    const dayColorThemes = ['#4CAF50','#d14836', '#4285f4', '#ef6c00', '#4CAF50'];

    return tweetsByDay.map((tweets, index) => {
      return (
        <DayView
          tweets={tweets}
          dayName={dayNames[index]}
          dayColorTheme={dayColorThemes[index]}
          onTweetRead={() => this.props.onTweetRead()}
          onTweetSave={() => this.props.onTweetSave()}
        />
      );
    });
  }

  createDayNames() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateHandler = new Date();
    const currentDay = dateHandler.getDay();

    const remainingDays = daysOfWeek.map((item, index) => {
      const newItemIndex = 6 - ((index + currentDay + 4) % 7);
      return daysOfWeek[newItemIndex]; 
    }).slice(0, 4);

    return ['Today', 'Yesterday', ...remainingDays];
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  }
});
