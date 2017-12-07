import dictionaries from './dictionaries';
import { appStyles, footerStyles, tweetsViewStyles, getDayViewStyles, tweetStyles } from './styling';

// functions returning footer display details belong here
function getStylingForFooter() {
  return footerStyles;
}

function getFooterViewIcons(currentView) {
  return Object.keys(dictionaries.viewIconTable).reduce((iconList, key) => {
    if (currentView == key)
      iconList.push(dictionaries.viewIconTable[key]['blue']);
    else
      iconList.push(dictionaries.viewIconTable[key]['grey']);
    
    return iconList;
  }, []); 
}

function getListOfViews() {
  return Object.keys(dictionaries.viewIconTable);
}

// functions returning header display details belong here

function getStylingForHeader(currentView) {
  return dictionaries.headerStylingTable[currentView];
}

function getViewIcon(view, color) {
  return dictionaries.viewIconTable[view][color];
}

function getViewHeader(view) {
  return dictionaries.viewNameTable[view];
}

export const appDisplayDetails = {
  getStylingForView: () => appStyles,
}

export const tweetsViewDisplayDetails = {
  getStylingForView: () => tweetsViewStyles,
}

export const dayViewDisplayDetails = {
  getStylingForView: getDayViewStyles,
}

export const tweetDisplayDetails = {
  getStylingForView: () => tweetStyles,
}

export const footerDisplayDetails = {
  getStylingForView: getStylingForFooter,
  getFooterViewIcons: getFooterViewIcons,
  getListOfViews: getListOfViews,
}

export const headerDisplayDetails = {
  getStylingForView: getStylingForHeader,
  getViewIcon: getViewIcon,
  getViewHeader: getViewHeader,
}
