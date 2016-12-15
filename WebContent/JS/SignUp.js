var app = angular.module('regmyApp',[]);
app.controller('SignUp', [ '$scope', '$http', function($scope, $http) {
	var BASE_URL = 'http://localhost:8082/CollabBack/';

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
	
	$scope.currentuser=function(){
		
		console.log("oneuser")
		$http({
			method:'GET',
			url:BASE_URL+'/oneuser'
		}).success(function(data,status,headers,config){
			$scope.oneuser=data;
			$scope.img = data.image
		})
	};
	
	$scope.uploadFile = function(files) {
	    var image = new FormData();
	    //Take the first selected file
	    image.append("file", files[0]);

	    $http.post(BASE_URL+'/imageUpload', image, {
	        withCredentials: true,
	        headers: {'Content-Type': undefined },
	        transformRequest: angular.identity
	    }).success(function(data, status, headers, config) {
			alert("success")
			 $scope.reloadPage = function()                                                
                   {
                     $window.location.reload();
                   }
			console.log(image)
		}).error(function(data, status, headers, config) {
			alert("error")
		});

	};
	
	$(function() {
		   console.log("edit")
		    $('#profile-image1').on('click', function() {
		        $('#profile-image-upload').click();
		    });
		});
}]);