angular.module('angularSpa')
  .service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl, auth_token){
        var fd = new FormData();
        fd.append('file', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined, 'auth_token': auth_token}
        }).then(function(result){
            return result.data;
        });
        return { uploadFileToUrl: uploadFileToUrl };
    }
}]);
