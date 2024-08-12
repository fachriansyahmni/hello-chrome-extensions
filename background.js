console.log('Background script is running!');

// Example: Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting === 'hello') {
        sendResponse({ farewell: 'Goodbye from the background!' });
    }
});