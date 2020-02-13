angular.module('demo', []).controller(
		'Hello',
		function($scope, $http) {
			$http.get('http://localhost:8080/api/v1/employees').then(
					function(response) {
						$scope.greeting = response.data;
						console.log($scope.greeting);
					});
		});