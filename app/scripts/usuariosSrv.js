angular.module('angularSpa')
    .service('usuariosService', function($http){
      //Un servicio es la forma de comunicarse con el exterior.
      // Hacerlo desde el controlador rompe la arquitectura
        var urlBase = 'http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/';
        this.login = function(username, password){
            return $http.post(urlBase + 'login', {
            	username: username,
            	password: password
            });
        };

		this.registro = function(nombre, apellido, nickname, mail, password){
			nuevo = {
            	nombreUsuario: nombre,
				apellidoUsuario: apellido,
				nickname: nickname,
				password: password,
				email: mail,
				status: "1",
				validacion: "1",
				curador: "0"
            };
			console.log(nuevo);
			return $http.post(urlBase + 'registro', nuevo);
		}	;

    });
