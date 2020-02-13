angular
		.module('app', [])
		.controller(
				'HttpGetController',
				function($scope, $http) {

					$scope.SendData = function() {
						
					    
						// use $.param jQuery function to serialize data from
						// JSON
						var data = $.param({
							id : $scope.id,
							firstName : $scope.firstName,
							lastName : $scope.lastName,
							emailId : $scope.emailId
						});

						var config = {
							headers : {
								'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
							}
						}

						$http
								.post(
										'http://localhost:8080/api/v1/myemployeeswithform',
										data, config)
								.success(
										function(data, status, headers, config) {
											var T = document.getElementById("TestsDiv");
										    T.style.display = "block";  // <-- Set it to block
										    
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
