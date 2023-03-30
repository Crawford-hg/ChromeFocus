let active = Boolean(false);
let blackList = [
    "https://www.youtube.com/*",
    "https://www.reddit.com/*",

]

chrome.runtime.onMessage.addListener((message, sender, response) => {
    let msg = formatString(JSON.stringify(message));

    console.log(msg);
    if (msg.includes("state")) {
        response(active);
    }
    else if (msg.includes("start")) {
        active = Boolean(true);
        closeRestricted();

    }
    else if (msg.includes("https://")) {
        blackList.push(msg);
    } else if (msg.includes("get")) {
        response(blackList);
    } else if (msg.includes("clear")) {
        blackList = [
            "https://www.youtube.com/*",
            "https://www.reddit.com/*",

        ]
    }
    else {
        active = Boolean(false);
    }
});

function resetBlacklist() { }


function closeRestricted() {
    chrome.tabs.query({
        url: blackList,
    }, function (tabs) {
        for (let i = 0; i < tabs.length; i++)
            chrome.tabs.remove(tabs[i].id);
    });

    setTimeout(() => {
        if (active) closeRestricted();
    }, 300)
}


function formatString(str) {
    str = str.replace(/{"message":"/g, '');
    str = str.replace(/"}/g, '');
    str = str.replace(/"/g, '');
    return str;
}