(function(){
	var module = angular.module("codepanel");
	
	module.component("codepanel", {
		templateUrl: "/components/home/codepanel/codepanel.html",
		bindings: {
			panelData: "=",
			language: "@"
		},
		controller: "codepanelController",
		controllerAs: "vm"
	});
})();