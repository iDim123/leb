app.factory("promoFactory", ["$http","$q", function($http, $q){
  var service = {};
  
  service.getPromoList = function(){
    var def = $q.defer();
    $http.get('json/promos.json').success(function(data){
      def.resolve(data);
    }).error(function(){
      def.reject();
    })
    return def.promise;
  }
  
  return service;
}])