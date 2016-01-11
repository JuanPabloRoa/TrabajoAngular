angular.module('angularSpa')
.controller('ReportesCtrl', function($scope, $rootScope, $routeParams,$filter, reportesService, fileUpload, universidadesService){



 $scope.date = $filter('date')(new Date(), 'yyyy-MM-dd');//fecha actual

 angular.extend($scope, {
        map: {
            center: {
                latitude: -33.452798,
                longitude:-70.686150
            },
            zoom: 12,
            markers: [],



            events: {
            click: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat(),lon = e.latLng.lng();

                $scope.latitud=lat;
                $scope.longitud=lon;

                var marker = {
                    id: Date.now(),
                    coords: {
                        latitude: lat,
                        longitude: lon
                    }
                };
                $scope.map.markers.push(marker);

                console.log($scope.map.markers);
                $scope.$apply();

         $scope.map.markers.pop();
            }}}});





    $scope.universidades = [];
    $scope.crearReporte = function crearReporte(){

    var reporte = { //Aquí deben ingresar las variables del scope, lo que tengan en el html
      contenido: $scope.contenido, //como aqui por ejemplo
      fecha: $scope.date,
      foto: "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
      idUniversidad: $scope.universidad.id,
      latitud: $scope.latitud,
      longitud: $scope.longitud,
      solucionado: 0,
      validado: 1,
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

    $scope.universidad;
    //alert('Selected count ID: ' + $scope.countSelected);

    $scope.onchange = function(id) {
        $scope.universidad = id;
        //alert("id:" + id.nombre);
    };
    $scope.inicio = 0;
    $scope.fin = 9;
    $scope.reportes;
    function getReportes(){
        reportesService.getReportes($rootScope.auth_token, $scope.inicio, $scope.fin)
        .success(function(data){
            console.log(data);
            $scope.reportes = data;
        })
        .error(function(error){
            $scope.status = 'Error al consultar por reportes';
        });

    };
    getReportes();

    $scope.page = function(delta){
        $scope.inicio = $scope.inicio + delta;
        $scope.fin = $scope.fin + delta;
        console.log("Inicio: " + $scope.inicio + " fin :" + $scope.fin);
        getReportes();
    };
/*
    function contarReportes(){
        reportesService.countReportes($rootScope.auth_token)
        .success(function(data){
            console.log(data);
            $scope.reportes = data;
        })
        .error(function(error){
            $scope.status = 'Error al consultar por cantidad de reportes';
        });
    };
    */
});
