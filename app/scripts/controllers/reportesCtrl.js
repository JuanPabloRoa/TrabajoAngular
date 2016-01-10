angular.module('angularSpa')
.controller('ReportesCtrl', function($scope, $rootScope, $routeParams, reportesService, fileUpload, universidadesService){
    //var username = $scope.username, password = $scope.password
    /*
    $scope.actor;*/
    $scope.crearReporte = function crearReporte(){
    $scope.universidades = [];
    var reporte = { //Aquí deben ingresar las variables del scope, lo que tengan en el html
      contenido: $scope.contenido, //como aqui por ejemplo
      fecha: "2015-12-26",
      foto: "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
      idFacultad: 100,
      latitud: 3.5,
      longitud: 3.7,
      solucionado: 0,
      validado: 0,
      visible: 1
    };
    //Se trae el archivo en la vista
    var file = $scope.myFile;
    //Se define la url para subir (es un metodo general)
    var uploadUrl = 'http://pliskin12.ddns.net:8080/taller-bd-11/files/upload';
    //Se sube la imagen
    var promesa = fileUpload.uploadFileToUrl(file, uploadUrl, $rootScope.auth_token);
    var urlFoto;
    promesa.then(function(result) {  // this is only run after $http completes
       urlFoto = result;
       console.log("urlFoto: "+ urlFoto.url);
       reporte["foto"] = urlFoto.url;
       console.log(reporte);
       reportesService.crearReporte(reporte, $rootScope.auth_token)
       .success(function(data, status, headers, config) {
       		console.log(data);
           alert("Reporte creado.");
       		})
       		.error(function(data, status, headers, config) {
       		console.log(data);
           alert("Error en el reporte.");
       		});
    });

    };
    function getUniversidades(){
        universidadesService.getUniversidades($rootScope.auth_token)
        .success(function(data){
            console.log(data);
            $scope.universidades = data;
        })
        .error(function(error){
            $scope.status = 'Error al consultar por universidades';
        });
    }
    getUniversidades();

});
