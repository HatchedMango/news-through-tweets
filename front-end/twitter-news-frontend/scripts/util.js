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
  }
};

const viewNameTable = {
  'world_news': 'World News',
  'us_news': 'US News',
  'local_news': 'Local News',
  'saved_news': 'Saved News',
  'search_news': 'Search'
};

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
