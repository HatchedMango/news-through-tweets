import { headerStyles } from './styling';

const headerStylingTable = {
    'world_news': {
      'container': headerStyles.container,
      'title': headerStyles.title,
      'image': headerStyles.image,
    },
    'us_news': {
      'container': headerStyles.container,
      'title': headerStyles.title,
      'image': headerStyles.image,
    },
    'local_news': {
      'container': headerStyles.container,
      'title': headerStyles.title,
      'image': headerStyles.image,
    },
    'saved_news': {
      'container': headerStyles.container,
      'title': headerStyles.title,
      'image': headerStyles.image,
    },
    'search_news': {
      'container': headerStyles.container,
      'title': headerStyles.title,
      'image': headerStyles.searchImage,
    },
    'read_story': {
      'container': headerStyles.readContainer,
      'title': headerStyles.title,
      'image': headerStyles.returnImage,
    }
  };
  
  const viewIconTable = {
    'world_news': {
      'white': require('../../assets/earth-icon-white.png'),
      'grey': require('../../assets/earth-icon-grey.png'),
      'blue': require('../../assets/earth-icon-blue.png'),
    },
    'us_news': {
      'white': require('../../assets/usmap-icon-white.png'),
      'grey': require('../../assets/usmap-icon-grey.png'),
      'blue': require('../../assets/usmap-icon-blue.png'),
    },
    'local_news': {
      'white': require('../../assets/marker-icon-white.png'),
      'grey': require('../../assets/marker-icon-grey.png'),
      'blue': require('../../assets/marker-icon-blue.png'),
    },
    'saved_news': {
      'white': require('../../assets/folder-icon-white.png'),
      'grey': require('../../assets/folder-icon-grey.png'),
      'blue': require('../../assets/folder-icon-blue.png'),
    },
    'search_news': {
      'white': require('../../assets/search-icon-white.png'),
      'grey': require('../../assets/search-icon-grey.png'),
      'blue': require('../../assets/search-icon-blue.png'),
    },
    'read_story': {
      'white': require('../../assets/return-icon-white.png'),
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

export default dictionaries = {
    headerStylingTable: headerStylingTable,
    viewIconTable: viewIconTable,
    viewNameTable: viewNameTable,
}
