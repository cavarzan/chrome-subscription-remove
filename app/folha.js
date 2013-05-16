chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      console.log("Blocking " + details.url);
      chrome.extension.sendMessage({action: 'mtr_blocked'});
      return {cancel: true};
    },
    {urls: ["http://static.folha.uol.com.br/paywall/*"]},
    ["blocking"]);
