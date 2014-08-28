var app = angular.module("app", ["ngRoute","ngAnimate"]);

app.config(function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'partials/main.html',
            controller: "AppCtrl"
        }
    )
        .when('/register',
        {
            templateUrl: 'partials/register.html'

        }
    )
        .when('/gallery',
        {
            templateUrl: 'partials/gallery.html',
            controller: "AppCtrl"
        }
    )
        .when('/members',
        {
            templateUrl: 'partials/members.html',
            controller: "AppCtrl"
        }
    )
});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
});