angular.module('angularSpa')
.controller('UsuariosCtrl', function($scope, $rootScope, $routeParams, usuariosService){
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

});
