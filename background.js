chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file:"jquery-1.7.1.min.js"});
	chrome.tabs.executeScript(null, {file:"contentscript.js"});
});
