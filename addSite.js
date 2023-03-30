const addButton = document.querySelector("#add");
const textField = document.querySelector("#url");

addButton.addEventListener("click", () => {
    let str = textField.value;
    str = formatString(str);
    
    chrome.runtime.sendMessage({
        message: str
    });
});


function formatString(str) {
    if (!(str.startsWith("https://") && str.endsWith("/*"))){
        str = "https://" + str;
        if (str.endsWith("/")) {
            str = str + "*";
        } else {
            str = str + "/*";
        }
    }

    return str;
}





