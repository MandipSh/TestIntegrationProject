var app = angular.module('demo2', []);
app.controller('myCtrl', function($scope, $http) {
	$http({
		method : "GET",
		url : "http://localhost:8080/api/v1/employees"
	}).then(function mySuccess(response) {
		$scope.myWelcome = response.data;
	}, function myError(response) {
		$scope.myWelcome = response.statusText;
	});
});