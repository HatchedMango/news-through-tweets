import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.1,
    backgroundColor: '#213E4A',
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
  heading: {
    fontFamily: 'Georgia', 
    color: 'white',
    fontSize: 35,
    marginBottom: 0,
  }
});

const headerStylingTable = {
  'world_news': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.image,
  },
  'us_news': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.image,
  },
  'local_news': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.image,
  },
  'saved_news': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.image,
  },
  'search_news': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.searchImage,
  },
  'read_story': {
    'container': styles.container,
    'heading': styles.heading,
    'image': styles.returnImage,
  }
};

const viewIconTable = {
  'world_news': {
    'white': require('../assets/earth-icon-white.png'),
    'grey': require('../assets/earth-icon-grey.png'),
    'blue': require('../assets/earth-icon-blue.png'),
  },
  'us_news': {
    'white': require('../assets/usmap-icon-white.png'),
    'grey': require('../assets/usmap-icon-grey.png'),
    'blue': require('../assets/usmap-icon-blue.png'),
  },
  'local_news': {
    'white': require('../assets/marker-icon-white.png'),
    'grey': require('../assets/marker-icon-grey.png'),
    'blue': require('../assets/marker-icon-blue.png'),
  },
  'saved_news': {
    'white': require('../assets/folder-icon-white.png'),
    'grey': require('../assets/folder-icon-grey.png'),
    'blue': require('../assets/folder-icon-blue.png'),
  },
  'search_news': {
    'white': require('../assets/search-icon-white.png'),
    'grey': require('../assets/search-icon-grey.png'),
    'blue': require('../assets/search-icon-blue.png'),
  },
  'read_story': {
    'white': require('../assets/return-icon-white.png'),
  }
};

const viewNameTable = {
  'world_news': 'World News',
  'us_news': 'US News',
  'local_news': 'Local News',
  'saved_news': 'Saved News',
  'search_news': 'Search',
  'read_story': 'Reader'
};

export function getStylingForView(currentView) {
  return headerStylingTable[currentView];
}

export function getFooterViewIcons(currentView) {
  return Object.keys(viewIconTable).reduce((iconList, key) => {
    if (currentView == key)
      iconList.push(viewIconTable[key]['blue']);
    else
      iconList.push(viewIconTable[key]['grey']);
    
    return iconList;
  }, []); 
}

export function getListOfViews() {
  return Object.keys(viewIconTable);
}

export function getViewIcon(view, color) {
  return viewIconTable[view][color];
}

export function getViewHeader(view) {
  return viewNameTable[view];
}
