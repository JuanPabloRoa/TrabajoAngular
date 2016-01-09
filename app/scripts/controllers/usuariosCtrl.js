angular.module('angularSpa')
.controller('UsuariosCtrl', function($scope, $rootScope, $routeParams, usuariosService, universidadesService){
    //Se define SIEMPRE un controlador por entidad/funcionalidad...
    // Un solo controlador para toda la página está malo, es dejar de usar MVC
    $scope.loginUsuario = function loginUsuario(){//login
		username = $scope.username;
		password = $scope.password;

		usuariosService.login(username, password)
		.success(function(data, status, headers, config) {
				console.log(data);
		    alert("Ingreso correcto.");
		    $rootScope.idUser=data.idUsuario; //Rootscope guarda variables globales
		    $rootScope.auth_token=data.auth_token;
            
				})
				.error(function(data, status, headers, config) {
				console.log(data);
		    alert("Error en el ingreso.");
				});
    };

    $scope.registroUsuario = function registroUsuario(){//registro
		nombre = $scope.nombreUsuario;
		apellido = $scope.apellidoUsuario;
		nickname = $scope.nickUsuario;
		mail = $scope.mailUsuario;
		password = $scope.password;

		usuariosService.registro(nombre, apellido, nickname, mail, password)
		.success(function(data, status, headers, config) {
				console.log(data);
		    alert("Usuario creado correctamente.");
				})
				.error(function(data, status, headers, config) {
				console.log(data);
		    alert("Error al registrarse.");
			});
    };





});
