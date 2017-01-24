


var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/applications', {
    templateUrl : 'pages/applications.html',
    controller  : 'ApplicationsController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});
app.controller('HomeController', function($scope) {
  $scope.message =  "SOLUTION FINDER" ;
           
   $scope.message1="IN";
   $scope.message2 =  "WEB DEVELOPMENT";
   $scope.message3= "Hi I'M VAMSHI,Developer and Designer. I want to learn so I always do what I dont know." ;
            
});
app.controller('AboutController', function($scope) {
    
    $scope.message="Hello! Let Me Introduce Myself.";
    $scope.message1="I'm Vamshi UI Developer/Web Designer or Front-End Developer.";
    $scope.message2="I can work efficently by using my academic knowledge and has ability to deliver high quality code. I enjoy in working on web developing by expanding and developing my skills";
    $scope.message3="I love teaching myself with HTML,CSS, Frameworks of JS.";
    
});
app.controller('ApplicationsController', function($scope) {
    
    
});
    
    
    
