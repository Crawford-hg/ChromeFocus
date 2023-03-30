
const checkBox = document.querySelector("#toggle");

checkBox.addEventListener('change', () => {

    if (checkBox.checked) {
        chrome.runtime.sendMessage({
            message: "start"
        });
        console.log("Checkbox value chaged "+ checkBox.checked);
    }
    else
        chrome.runtime.sendMessage({
            message: "stop"
        });
});


chrome.runtime.sendMessage('state', (response) => {
    if (response == true) {
        checkBox.checked = true;
    }
});


