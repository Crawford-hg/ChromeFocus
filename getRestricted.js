
chrome.runtime.sendMessage('get', (response) => {
   document.write("<h2>Restricted Tabs</h2>");

   document.write("<ul>");
   for (let item of response) {
      document.write("<li>" + item + "</li>");
   }
   document.write("</ul>");
   document.write("<button>Reset Blacklist</button>");


});
const reset = document.querySelector('button');

reset.addEventListener("click", () => {
   chrome.runtime.sendMessage("clear", () => {
      document.reload();
   });
});