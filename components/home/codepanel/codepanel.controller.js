(function(){
	
	var module = angular.module("codepanel");
	
	module.controller("codepanelController", ["$timeout", "$element", "$filter", function($timeout, $element, $filter) {
		var vm = this;
		vm.name = "codepanel";
		$timeout(function() {
			hljs.highlightBlock($element.find("code")[0]);
		});
	}]);
	
})();