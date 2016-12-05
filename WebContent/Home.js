var app = angular.module('myApp', ['ngRoute','ngCookies','regmyApp','blogApp','forumApp','allusers','loginApp']);
app.config(function($routeProvider) {
  $routeProvider
  
  .when('/Home', {
	    templateUrl : 'HTML/Home.html',
	    controller  : 'Logincontroller',
	    controllerAs:'vm'
	 })

   .when('/register', {
    templateUrl : 'HTML/SignUp.html',
    controller  : 'SignUp'
 })
 
  .when('/login', {
    templateUrl : 'HTML/Login.html',
    controller  : 'Logincontroller',
    	controllerAs:'vm'
 })
 
  .when('/blog', {
    templateUrl : 'HTML/Blog.html',
    controller  : 'Blog'
 })
 
  .when('/forum', {
    templateUrl : 'HTML/Forum.html',
    controller  : 'Forumcontroller'
 })
 
 .when('/friend', {
    templateUrl : 'HTML/Friend.html',
    controller  : 'alluserctrl'
 })


  .otherwise({redirectTo: '/'});
});
