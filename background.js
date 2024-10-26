chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({
        url: "newpage.html"
    });
});