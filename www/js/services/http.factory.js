angular.module('app.services.http', [])

.factory('httpFactory', function($http,$q){
  var factory={};
  var url = "http://henriqueurruth.azurewebsites.net/servicos/";

  factory.getTiposAlimentacao = function(id) {
    var deferred = $q.defer();
		var promise = deferred.promise;
    $http({
			method: "GET",
			url: url+"alimentos/portipo/"+id
		}).then(function(response){
			deferred.resolve(response.data);
		});
		var promise = deferred.promise;
		return promise;
  }

  factory.getAlimentoById = function(id) {
    var deferred = $q.defer();
		var promise = deferred.promise;
    $http({
			method: "GET",
			url: url+"alimentos/"+id
		}).then(function(response){
			deferred.resolve(response.data);
		});
		var promise = deferred.promise;
		return promise;
  }

  return factory;
});
