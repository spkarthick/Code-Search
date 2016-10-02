(function(){
	
	var module = angular.module("home", ["ui.router", "codepanel"]);
	
	module.factory('httpInterceptor', ["$rootScope", function($rootScope) {
	  return {
		request: function(config) {
		  $rootScope.showLoader = true;
		  return config;
		},

		requestError: function(config) {
			$rootScope.showLoader = false;
		  return config;
		},

		response: function(res) {
			$rootScope.showLoader = false;
		  return res;
		},

		responseError: function(res) {
			$rootScope.showLoader = false;
		  return res;
		}
	  }
	}])
	.config(["$stateProvider", "$httpProvider", "$urlRouterProvider", function($stateProvider, $httpProvider, $urlRouterProvider) {
		$stateProvider.state({
			name: "home",
			url: "/home",
			template: "<home></home>",
		});
		$urlRouterProvider.otherwise('/home');
		$httpProvider.interceptors.push('httpInterceptor');
	}]);
	
	
})();