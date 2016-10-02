(function(){
	
	var module = angular.module("header", ["ui.router"]);
	
	module.config(["$stateProvider", function($stateProvider) {
		$stateProvider.state({
			name: "header",
			url: "/header",
			template: "<header></header>",
		});
	}]);
	
	
})();