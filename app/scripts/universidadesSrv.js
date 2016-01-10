angular.module('angularSpa')
    .service('universidadesService', function($http){
      //Un servicio es la forma de comunicarse con el exterior.
      // Hacerlo desde el controlador rompe la arquitectura
        var urlBase = 'http://pliskin12.ddns.net:8080/taller-bd-11/universidades/';
        this.getUniversidades = function(auth_token){
            return $http.get(urlBase, {headers: {'auth_token' : auth_token}});
        };

    });
