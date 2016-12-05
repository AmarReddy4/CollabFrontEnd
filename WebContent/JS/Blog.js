var blogapp = angular.module('blogApp',[]);
blogapp.controller('Blog', [ '$scope', '$http', function($scope, $http) {
var BASE_URL = 'http://localhost:8082/CollabBack/';

$scope.getAllBlogs= function() {
console.log("get all blogs")
$http({
method : 'GET',
url : BASE_URL+'/blog'
}).success(function(data, status, headers, config) {
$scope.blogs=data;
//alert(data); 
}).error(function(data, status, headers, config) {
alert("Error");
});
};
$scope.submit = function() {
console.log("create blog")

$scope.blog = { 
id:$scope.id,
title : $scope.title,
userid:$scope.userid,
doc:$scope.doc,
content : $scope.content,
role : $scope.role
}
$http({
method : 'POST',
url : BASE_URL + '/createblog',
data : $scope.blog
}).success(function(data, status, headers, config) {
$scope.id='';
$scope.title='';
$scope.userid='';
$scope.doc='';
$scope.content='';
$scope.role='';
$scope.getAllBlogs();
}).error(function(data,status,headers,config){
alert("error");
});
};
$scope.deleteblog=function(id){
$http({
method:'DELETE',
url:BASE_URL+'/deleteblog/'+id
}).success(function(data,status,headers,config){
$scope.getAllBlogs();
})
};
$scope.editblog=function(id,title,content){
$scope.id=id;
$scope.title=title;
$scope.content=content;
}
}]);