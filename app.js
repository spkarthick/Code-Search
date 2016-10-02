(function(){
	
	var myApp = angular.module("myApp", [
		"ui.router",
		"ui.bootstrap",
		"ngAnimate",
		"home",
		"footer",
		"header"
	]);
	
	angular.element(document).ready(function() {
		angular.bootstrap(document.body,["myApp"]);	
	});
	
})();