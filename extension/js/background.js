chrome.tabs.onUpdated.addListener(function (id, info, tab) {
    if (tab.status === 'loading') {
        // console.log(tab,id, info)
        // chrome.tabs.executeScript(null, {file: "js/open_comment.js"});
        // chrome.tabs.executeScript(null, {code: "function open_comment(){alert(1111)}"});
    }
});
