app.controller("tariffsCtrl", ["$scope", "tariffsFactory", function ($scope, tariffsFactory) {
  /*  $scope.tariffs = [];*/
  tariffsFactory.getTariffs().then(function (data) {
    $scope.tariffs = data;
    console.log('Tariffs load success.');
  }, function (data) {
    console.log('Tariffs load failed.')
  });

  tariffsFactory.getTariffsDescriptions().then(function (data) {
    $scope.tariffsDescr = data;
    console.log('TariffsD load success.');
  }, function (data) {
    console.log('TariffsD load failed.')
  });



  this.tab = 0;
  this.selectTab = function (setTab) {
    this.tab = setTab;
  };
  this.isSelected = function (checkTab) {
    return this.tab === checkTab;
  };

  this.tariffsType = function (tariffName) {
    if ($scope.tariffs !== undefined) {
      switch (tariffName) {
        case 0:
          return $scope.tariffs[tariffName].Home;
        case 1:
          return $scope.tariffs[tariffName].Country;
        case 2:
          return $scope.tariffs[tariffName].Bussines;
        case 3:
          this.res = {
            'first': [],
            'second': []
          };
          var tmp = Math.ceil($scope.tariffs[tariffName].AdditionalServices.length / 2);
          this.res.first.push($scope.tariffs[tariffName].AdditionalServices.slice(0, (tmp)));
          this.res.second.push($scope.tariffs[tariffName].AdditionalServices.slice(tmp));
          break;
      }
    }
  }
}]);