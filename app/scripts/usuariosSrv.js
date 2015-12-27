angular.module('angularSpa')
    .service('usuariosService', function($http){
      //Un servicio es la forma de comunicarse con el exterior.
      // Hacerlo desde el controlador rompe la arquitectura
        var urlBase = 'http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/login';
        this.login = function(username, password){
            return $http.post(urlBase, {
            	username: username,
            	password: password
            });
        };

    });
