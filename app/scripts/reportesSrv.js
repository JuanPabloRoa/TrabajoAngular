angular.module('angularSpa')
    .service('reportesService', function($http, $rootScope){
        var urlBase = 'http://pliskin12.ddns.net:8080/taller-bd-11/';
        this.crearReporte = function(reporte, auth_token){
          console.log();
          return $http.post(urlBase + 'usuarios/' +$rootScope.idUser + "/reportes" , reporte, {headers: {'auth_token' : auth_token}});
        };

        this.getReportes = function(auth_token, inicio, fin){
            return $http.get(urlBase + 'reportes/rango/' + inicio + '/' + fin, {headers: {'auth_token' : auth_token}});
        };

         this.getReporte = function(auth_token, idReporte){
            return $http.get(urlBase + 'reportes/'+ idReporte, {headers: {'auth_token' : auth_token}});
        };

          this.modificarReporte = function(reporteModificado, auth_token,idReporte){
            return $http.put(urlBase + 'reportes/edit/' + idReporte,reporteModificado, {headers: {'auth_token' : auth_token}});
        };


        this.getMisReportes = function(auth_token){
            var result = $http.get(urlBase + 'usuarios/' +$rootScope.idUser + "/reportes", {headers: {'auth_token' : auth_token}});

            return result;
        };
/*
        this.countReportes = function(auth_token){
            return $http.get(urlBase + 'reportes/');
        };*/
    });
