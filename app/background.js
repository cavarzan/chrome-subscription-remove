chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      console.log("Blocking " + details.url);
      chrome.extension.sendMessage({action: 'mtr_blocked'});
      return {cancel: true};
    },
    {
		urls: ["*://static.folha.uol.com.br/paywall/*", "*://gazetadopovo.com.br/connect/*", "*://www.estadao.com.br/paywall/*"]
	},
    ["blocking"]
);
