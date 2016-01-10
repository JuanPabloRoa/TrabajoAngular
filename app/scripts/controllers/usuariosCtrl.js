angular.module('angularSpa')
.controller('UsuariosCtrl', function($scope, $rootScope, $routeParams, usuariosService, universidadesService){
    //Se define SIEMPRE un controlador por entidad/funcionalidad...
    // Un solo controlador para toda la página está malo, es dejar de usar MVC

$scope.VisibilidadBotonRegistrar=false;
	$scope.MostrarBotonRegistrar=function(){

  if($scope.VisibilidadBotonRegistrar){
    $scope.VisibilidadBotonRegistrar=false;
  }
  else{
   $scope.VisibilidadBotonRegistrar=true;
}
}


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

    	if($scope.confirmacionEmailUsuario==$scope.mailUsuario && $scope.password==$scope.confirmarPassword)
{


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
		    alert("Error al registrarse. Verificar formato datos ingresados");
			});}//fin if todo correcto

		if($scope.password!=$scope.confirmarPassword){
				alert("Las dos claves son distintas...") ;
			}
		if($scope.mailUsuario!=$scope.confirmacionEmailUsuario){
				alert("Los dos correos son distintos...") ;
			}



    };

		




    





});
