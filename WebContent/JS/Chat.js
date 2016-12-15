console.log("app")
var app = angular.module('chatApp',[]);
app.controller("chatController",function($scope,ChatService){
	console.log("chatctrl")
	$scope.messages=[];
	$scope.message="";
	$scope.max=140;
	
	$scope.addMessage=function(){
		console.log("chat")
		ChatService.send($scope.message);
		$scope.message="";
	};
	ChatService.receive().then(null,null,function(message){
		$scope.messages.push(message);
		})
})