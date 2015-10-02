app.controller('faqCtrl', ["$scope", "faqFactory", function ($scope, faqFactory) {
  faqFactory.getQuestionsAndAnswers().then(function (data) {
    $scope.faqList = data;
  })

  this.tab = 0;
  this.selectTab = function (setTab) {
    this.tab = setTab;
  };
  this.isSelected = function (checkTab) {
    return this.tab === checkTab;
  };
   
  this.faqListType = function (threme) {
    if ($scope.faqList !== undefined) {
      switch (threme) {
        case 0:
          return $scope.faqList[threme].Common;
        case 1:
          return $scope.faqList[threme].Security;
        case 2:
          return $scope.faqList[threme].Services;
        case 3:
          return $scope.faqList[threme].Finances;
        case 4:
          return $scope.faqList[threme].Other;
      }
    }
  }
}]);