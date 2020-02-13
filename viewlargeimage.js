// Copyright (c) 2020
//
function onClickHandler(info, tab) {
  if (/instagram\.com/i.test(info.linkUrl)) {
    window.open(info.linkUrl + 'media/?size=l');
  }
  if (/twimg\.com/i.test(info.srcUrl)) {
    url = info.srcUrl;
    largeUrl = url.replace(/name=.*$/, "")
    window.open(largeUrl + "name=orig");
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    //console.log("'context: " + context + "' item: " + id);
    var title = "view Large image...";
    //if (add websites that is create the menu item)
    if (context == "link") {
      var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "id": "context" + context,
      });
    };
  };
});
