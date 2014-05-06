chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      console.log("Blocking " + details.url);
      chrome.extension.sendMessage({action: 'mtr_blocked'});
      return {cancel: true};
    },
    {
		urls: ["*://static.folha.uol.com.br/paywall/*", 
		"http://paywall.folha.uol.com.br/*", 
		"*://gazetadopovo.com.br/connect/*", 
		"*://www.estadao.com.br/paywall/*", 
		"*://oglobo.globo.com/*/paywall/*",
		"*://zerohora.clicrbs.com.br/jornal/jsp/paywall*", 
		"*://gazetadopovo.com.br/assinaturas/*", 
		"*://gazetadopovo.com.br/assinaturas/*", 
		"*://diariocatarinense.clicrbs.com.br/css/modal*",
		"*://diariocatarinense.clicrbs.com.br/it/js/UtilJornaisClicRbs.js",
		"*://www.gazetadopovo.com.br/assinaturas/*"]
	},
    ["blocking"]
);
