/**
 * Created by Administrator on 2016/12/20.
 */
<<<<<<< HEAD
function todoRoute($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: './view/login_register.html',
    }).state('main', {
        url: '/main',
        templateUrl: './view/main.html',
    }).state('main.dashboard', {
        url: '/dashboard',
        templateUrl: './view/dashboard.html',
    }).state('main.user', {
        url: '/user',
        templateUrl: './view/user_management.html',
    })
};
=======
var app = angular.module('myApp', ['ui.router']);
app.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: './view/login_register.html',
        }).state('main', {
            url: '/main',
            templateUrl: './view/main.html',
        }).state('main.dashboard', {
            url: '/dashboard',
            templateUrl: './view/dashboard.html',
        }).state('main.user', {
            url: '/user',
            templateUrl: './view/user_management.html',
        })
    }
);

app.controller('userTable', function ($scope) {
    $scope.users = [
        {Name: 'Henry', lastName: ' Fan', date: '2016-12-20', lastDate: '2016-12-20'},
        {Name: 'Beck', lastName: ' Zhang', date: '2016-12-20', lastDate: '2016-12-20'},
        {Name: 'Banana', lastName: ' Cao', date: '2016-12-20', lastDate: '2016-12-20'},
    ];
});
>>>>>>> 8a01663a083a25b2f3cbcc3f9a7ad4788338b06e
