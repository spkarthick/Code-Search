(function(){
	
	var module = angular.module("home");
	
	module.factory("codeHubService", ["$http", "APICONFIG", function($http, APICONFIG) {
		 return {
			 getSubmissions: function(page) {
				return $http.get(APICONFIG.submissionsApi + "&page=" + page); 
			 },
			 getLanguages: function(page) {
				return $http.get(APICONFIG.compilerImageApi); 
			 },
			 getAllData: function() {
				 if(localStorage)
					 localStorage.allData = JSON.stringify([]);
				 var vm = this;
				 function getSinglePage(number) {
					 if(number == 1347)
						 return;
					 vm.getSubmissions(number).then(function(res){
						 localStorage.allData = JSON.stringify(JSON.parse(localStorage.allData).concat(res.data.websites));
						 getSinglePage(number + 1);
					 });
				 }
				 getSinglePage(1);
			 }
		 };
	}]);
	
})();