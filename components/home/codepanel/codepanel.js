(function(){
	
	var module = angular.module("codepanel", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "codepanel",
			url: "/codepanel",
			template: "<codepanel></codepanel>",
		});
	}]);
	
})();