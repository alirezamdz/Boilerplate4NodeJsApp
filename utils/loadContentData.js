'use strict';
const appRoot = require('app-root-path');
const fs = require("fs");

var CACHED_DATA = [];

const readFile = (callback) => {

  try {
    let fd = fs.openSync(appRoot + "/db/pagesData.json", "r");
    let fr = fs.readFileSync(fd);
    fs.closeSync(fd);
    callback(null, fr);
  }
  catch (e) {
    callback(e);
  }

};

const cacheParsedData = (data) => {
  try {
    CACHED_DATA = JSON.parse(data);
  }
  catch (e) {
    console.log(`Error while parsing the JSON data!!\n`, e);
  }
};

const cacheData = () => {
  
  readFile( (err, data) => {
    if (err) {
      console.log(`Error while trying to read the file: ${err.path}`);
      console.log(`Error message:\n`, err);
    } else {
      cacheParsedData(data);
    }
  });
  
};

const getDataByUrl = (url) => {
  for (let i = 0; i < CACHED_DATA.length; i++) {
    if (CACHED_DATA[i].type === "page" && CACHED_DATA[i].path === url) {
      return CACHED_DATA[i];
    }
  }
  return null;
};

module.exports = {
  cacheData,
  getDataByUrl
};