(function(){
	
	var module = angular.module("home");
	
	module.controller("homeController", ["$rootScope", "$filter", "codeHubService", function($rootScope, $filter, codeHubService) {
		var vm = this;
		vm.name = "home";
		vm.colorHash = new ColorHash();
		vm.codeCollection = [];
		vm.languageCollection = [];
		vm.filterStatus = {};
		vm.currentPage = 1;
		//codeHubService.getAllData();
		codeHubService.getLanguages().then(function(res) {
			vm.languageCollection = res.data;
		});
		codeHubService.getSubmissions(1).then(function(res) {
			vm.codeCollection = res.data.websites;
		});
		vm.searchResult = function(item) {
			var val = true;
			if(vm.search) 
				if(item.title.toLowerCase().indexOf(vm.search.toLowerCase()) != -1 || 
					item.language.toLowerCase().indexOf(vm.search.toLowerCase()) != -1 || 
					item.metadata.level.toLowerCase().indexOf(vm.search.toLowerCase()) != -1) 
					val = true;
				else
					return false;
			if(vm.filterStatus.accepted)
				if(item.compiler_status.toLowerCase().indexOf("accepted") == -1)
					val = false;
				else
					return true;
			if(vm.filterStatus.wrong) 
				if(item.compiler_status.toLowerCase().indexOf("wrong") == -1)
					val = false;
				else
					return true;
			if(vm.filterStatus.memory) 
				if(item.compiler_status.toLowerCase().indexOf("memory") == -1 && item.compiler_status.toLowerCase().indexOf("time limit") == -1)
					val = false;
				else
					return true;
			if(vm.filterStatus.runtime)
				if(item.compiler_status.toLowerCase().indexOf("runtime") == -1 && item.compiler_status.toLowerCase().indexOf("compilation") == -1)
					val = false;
				else
					return true;
			if(vm.filterStatus.skipped)
				if(item.compiler_status.toLowerCase().indexOf("skipped") == -1)
					val = false;
				else
					return true;
			return val;
		}
		vm.pageChanged = function() {
			codeHubService.getSubmissions(vm.currentPage).then(function(res) {
				vm.codeCollection = res.data.websites;
			});
		}
		//$rootScope.showLoader = true;
	}]);
	
})();