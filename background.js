chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("newpage.html") });
});

// 也可以在每次启动 Chrome 时打开
chrome.runtime.onStartup.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("newpage.html") });
});