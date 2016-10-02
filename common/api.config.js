(function() {
	angular.module("myApp").constant("APICONFIG", {
		submissionsApi: "http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions",
		compilerImageApi: "http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_compiler_image"
	});
})();