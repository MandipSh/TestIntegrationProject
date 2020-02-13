angular
		.module('app', [])
		.controller(
				'HttpGetController',
				function($scope, $http) {

					$scope.SendData = function() {

						// use $.param jQuery function to serialize data from
						// JSON
						var data = $.param({
							id : $scope.id
						});

						var myID = $scope.id;
						console.log(myID);
						
						var myApi = 'http://localhost:8080/api/v1/myemployeesdeleteform/' + myID;
						console.log(myApi);
						console.log(data);

						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						}

						$http
								.delete(
										myApi,
										data, config)
								.success(
										function(data, status, headers, config) {
											$scope.PostDataResponse = data;
											console.log(data);
										}).error(
										function(data, status, header, config) {
											$scope.ResponseDetails = "Data: "
													+ data + "<hr />status: "
													+ status
													+ "<hr />headers: "
													+ header + "<hr />config: "
													+ config;
										});
					}

				});
