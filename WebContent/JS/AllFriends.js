
app.controller('allfriendsctrl',['$scope','$http',function($scope,$http){
	var BASE_URL = 'http://localhost:8082/CollabBack';
	
	$scope.getmyfriends=function(){
		console.log("get")
		$http({
			method : 'GET',
			url : BASE_URL+'/myfriends'
		}).success(function(data, status, headers, config) {
			$scope.myfriends=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	$scope.getsnewrequests=function(){
		console.log("new")
		$http({
			
			method : 'GET',
			url : BASE_URL+'/newrequests'
			
		}).success(function(data, status, headers, config) {
			$scope.newrequests=data;
			//alert(data); 
		}).error(function(data, status, headers, config) {
			alert("Error");
		});
	}
	$scope.accept=function(fid){
		console.log(fid)
		$http({
			method : 'POST',
			url : BASE_URL+'/acceptrequest/'+fid
		});
	}
	$scope.reject=function(fid){
		$http({
			method : 'POST',
			url : BASE_URL+'/rejectrequest/'+fid
		});
	}
}])