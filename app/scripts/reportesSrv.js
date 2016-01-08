angular.module('angularSpa')
    .service('reportesService', function($http, $rootScope){
        var urlBase = 'http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/';
        this.crearReporte = function(reporte, auth_token){
          console.log();
          return $http.post(urlBase + $rootScope.idUser + "/reportes" , reporte, {headers: {'auth_token' : auth_token}});
        };
    });
