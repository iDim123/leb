app.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
    {
      image: 'images/main-page/promo1.jpg',
      text: ''
    },
    {
      image: 'images/main-page/promo2.jpg',
      text: ''
    }
  ];
  /* $scope.addSlide = function() {
     var newWidth = 1169 + slides.length + 1;
     slides.push({
       image: '//placekitten.com/' + newWidth + '/300',
       text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
     });
   };*/

/*  for (var i = 0; i < 2; i++) {
    $scope.addSlide();
  }*/
}]);