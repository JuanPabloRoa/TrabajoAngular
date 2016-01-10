(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        /*.when('/actors/:actorId', {
            templateUrl:'views/show_actor.html',
            controller:'ActorsCtrl'
        })*/
        .when('/usuarios/login', {
            templateUrl:'views/login.html',
            controller:'UsuariosCtrl'
        })
	.when('/usuarios/registro', {
            templateUrl:'views/registro.html',
            controller:'UsuariosCtrl'
        })
        .when('/reportes/nuevo', {
            templateUrl:'views/crearReporte.html',
            controller:'ReportesCtrl'
        })
           .otherwise({
            redirectTo: '/home'
          });
    });

})();
