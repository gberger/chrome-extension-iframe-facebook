var iframe = document.createElement('iframe');
iframe.src = "chrome-extension://" + chrome.runtime.id + "/page.html";

console.log('>> Inserting iframe');
document.body.appendChild(iframe);