var app = angular.module('regmyApp',[]);
app.controller('SignUp', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8082/CollabBack';

	console.log("registering");
	$scope.submit = function() {
		
		console.log("done:");
	

		$scope.users = {	
			
			username : $scope.username,
			password:$scope.password,
			mail: $scope.mail,
			mobile:$scope.mobile,
			address:$scope.address,
			gender:$scope.gender,
			dob:$scope.dob,
			
	
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/register',
			data : $scope.users
		}).success(function(data, status, headers, config) {
			$scope.username='';
			$scope.password='';
			/*$scope.confirmpassword='';*/
			$scope.mail='';
			$scope.mobile='';
			$scope.address='';
			$scope.gender='';
			$scope.dob='';		
		
		}).error(function(data,status,headers,config){
			alert("SUCCESS");
		});
	};
}]);