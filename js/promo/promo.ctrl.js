app.controller('promoCtrl', ["$scope", "promoFactory", function($scope, promoFactory){
  promoFactory.getPromoList().then(function(data){
    $scope.promoList = data;
  })
}])