'use strict';
const loadedData = require("../utils/loadContentData");

function handleRoutes(req, res, next) {
  let url = req.path;
  let foundContent = loadedData.getDataByUrl(url);
  
  if (foundContent !== null) {
    res.render(foundContent.template, foundContent.contents);
  } else {
    console.log(`No data found for the route: ${url}`);
    return next();
  }

}

module.exports = handleRoutes;