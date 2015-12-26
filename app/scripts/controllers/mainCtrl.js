(function(){
    angular.module('angularSpa')
.controller("PrincipalCtrl",function($scope,$http,$filter){


$scope.date = $filter('date')(new Date(), 'yyyy-MM-dd');
$scope.Usuario={};
$scope.UsuarioR={};
$scope.idUser;
$scope.auth;
$scope.funcionVisibilidad=false;
$scope.MetodoLogin=function(){//login


$http.post("http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/login",{
	username: $scope.Usuario.nick,
	password: $scope.Usuario.pass
})
.success(function(data, status, headers, config) {
		console.log(data);
    alert("Ingreso correcto");
    $scope.idUser=data.idUsuario;
    $scope.auth=data.auth_token;
   

    $scope.funcionVisibilidad=true;
		})
		.error(function(data, status, headers, config) {
		console.log(data);
     alert(data.message) ;
		});
}

$scope.MetodoRegistro=function(){//Registro

if($scope.UsuarioR.pass==$scope.UsuarioR.pass2 && $scope.UsuarioR.mail==$scope.UsuarioR.mail2)
{
$http.post("http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/registro",{
  nombreUsuario: $scope.UsuarioR.nombre,
  apellidoUsuario: $scope.UsuarioR.apellido,
  nickname: $scope.UsuarioR.nick,
  password: $scope.UsuarioR.pass,
  email: $scope.UsuarioR.mail,
  status: 1,
  validacion: 1,
  curador : 1

})
.success(function(data, status, headers, config) {
    console.log(data);
    alert(data.message);
    })
    .error(function(data, status, headers, config) {
    alert("Ha ocurrido un error durante el registro.... Verificar que los datos tengan el formato correcto");
    console.log(data);
    });
}

if($scope.UsuarioR.pass!=$scope.UsuarioR.pass2){
alert("Las dos claves son distintas...") ;
}
if($scope.UsuarioR.mail!=$scope.UsuarioR.mail2){
alert("Los dos correos son distintos...") ;
}





}

$scope.GetReporte=function(){
$http.get("http:/ /pliskin12.ddns.net:8080/taller-bd-11/usuarios/10/reportes")
.success(function(data, status, headers, config) {
    console.log(data);
    })
    .error(function(data, status, headers, config) {
    console.log(data);
    });
}

$scope.PostReporte=function(){
$http.post("http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/"+$scope.idUser+"/reportes",{
contenido: $scope.Reporte.contenido,
fecha: $scope.date,
foto: "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
latitud : 3.5,
longitud: 3.7,  
idFacultad: $scope.Reporte.facultad,
idUsuario: $scope.idUser,
solucionado: 0,
validado: 1,
visible: 1
},{headers:{"auth_token": $scope.auth}})

.success(function(data, status, headers, config) {
    console.log(data);
    })
    .error(function(data, status, headers, config) {
    console.log(data);
    });
}



});


})();
