app.factory('faqFactory', ["$http","$q" , function($http,$q){
  var service = {};
  
  service.getQuestionsAndAnswers = function(){
    var def = $q.defer();
    $http.get('json/faq.json').success(function(data){
      def.resolve(data);
    }).error(function(){
      def.reject();
    })
    return def.promise;
  }
  
  return service;
}]);