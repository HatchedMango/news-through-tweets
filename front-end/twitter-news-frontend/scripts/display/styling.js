import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  scrollableView: {
    flex: 10,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  webView: {
    height: '100%',
    width: '100%',
  },
  webViewContainer: {
    flex: 11,
  },
});

export const headerStyles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1.1,
      backgroundColor: '#213E4A',
      flexDirection: 'row',
      alignItems: 'flex-end',
      borderBottomColor: '#808080',
      borderBottomWidth: 0.5,
    },
    readContainer: {
      width: '100%',
      flex: 1.1,
      backgroundColor: '#2c5566',
      flexDirection: 'row',
      alignItems: 'flex-end',
      borderBottomColor: '#808080',
      borderBottomWidth: 0.5,
    },
    image: {
      width: 50,
      height: 50,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: -15,
    },
    searchImage: {
      width: 38,
      height: 38,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: -5,
    },
    returnImage: {
      width: 35,
      height: 35,
      marginLeft: 15,
      marginRight: 15,
    },
    title: {
      fontFamily: 'Georgia', 
      color: 'white',
      fontSize: 35,
      marginBottom: 0,
    }
  });

export const footerStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#808080',
    borderTopWidth: 0.5,
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 15,
    marginRight: 15,
  }
});

export const tweetsViewStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  }
});

export function getDayViewStyles(colorTheme) {
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

export const tweetStyles = StyleSheet.create({
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
  },
  buttonsContainer: { 
    overflow: 'hidden', 
    borderRadius: 3, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  button: { 
    width: '49.7%', 
    backgroundColor: '#f5f9fa' 
  },
  image: { 
    borderRadius: 3, 
    width: 350, 
    height: 350
  },
  textContents: { 
    width: '97%', 
    marginTop: 8, 
    marginBottom: 8, 
    fontFamily: 'Helvetica-Light', 
    fontSize: 15 
  },
  titleText: {
    fontSize: 25,
    fontFamily: 'Helvetica-Light', 
  },
  title: {
    overflow: 'hidden',
    borderBottomColor: '#b3b3b3',
    borderBottomWidth: 0.5,
    width: '100%', 
    marginBottom: 3,
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
  }
});
