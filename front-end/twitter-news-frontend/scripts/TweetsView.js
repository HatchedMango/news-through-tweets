import React from 'react';
import DayView from './DayView';

import { Text, ScrollView } from 'react-native';
import { tweetsViewDisplayDetails } from './display/display';

export default class TweetsView extends React.Component {
  render() {
    const styles = tweetsViewDisplayDetails.getStylingForView();
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
          key={index}
          tweets={tweets}
          dayName={dayNames[index]}
          dayColorTheme={dayColorThemes[index]}
          onTweetRead={(storyUrl) => this.props.onTweetRead(storyUrl)}
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
