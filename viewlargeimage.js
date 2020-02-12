// Copyright (c) 2020

function onClickHandler(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  if (/instagram\.com/i.test(info.linkUrl)) {
    window.open(info.linkUrl + 'media/?size=l');
  }
  if (/twitter\.com/i.test(info.linkUrl)) {
    window.open(info.srcUrl + 'name=large');
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
