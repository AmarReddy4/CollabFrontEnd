var app = angular.module('myApp', ['ngRoute','ngCookies','regmyApp','blogApp','forumApp','allusers','loginApp','chatApp']);
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
    controller  : 'Forumcontroller',
 })
 
 .when('/friend', {
    templateUrl : 'HTML/Friend.html',
    controller  : 'alluserctrl',
 })
 
 .when('/allfriends',{
	 templateUrl : 'HTML/AllFriends.html',
	 controller  : 'allfriendsctrl',
 })
 
 .when('/newrequests', {
	templateUrl : 'HTML/NewRequest.html',
	controller  : 'allfriendsctrl', 
 })
 
 .when("/chat",{
    	templateUrl: "HTML/Chat.html",
    	controller: "chatController",
    })
    
 .when("/myprofile",{
    	templateUrl: "HTML/UserProfile.html",
    	controller: "SignUp",
    })
    
     .when("/individualforum",{
    	templateUrl: "HTML/IndividualForum.html",
	controller: "commentctrl",
    })


  .otherwise({redirectTo: '/'
});

console.log("route");    });
run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
  
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register','/Index1','/jobs']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}
