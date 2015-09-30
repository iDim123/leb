app.factory("tariffsFactory", ["$http", "$q", function($http, $q){
  var service = {};
  
  service.getTariffs = function(){
    var deferred = $q.defer();
    $http.get('json/tariffs.json').success(function(data){
      deferred.resolve(data);
    }).error(function(){
      deferred.reject();
    })
    return deferred.promise;
  }
  
  service.getTariffsDescriptions = function(){
    var deferred = $q.defer();
    $http.get('json/tariffs-description.json').success(function(data){
      deferred.resolve(data);
    }).error(function(){
      deferred.reject();
    })
    return deferred.promise;
  }
  
  
  return service;
}]);