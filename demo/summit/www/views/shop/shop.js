angular.module('App')
.controller('ShopController', function ($scope, $state, $http, $ionicSlideBoxDelegate, Config, ProductService) {

  $scope.maxPage = -1;
  $scope.slideIndex=0;
  // $scope.goods=[];
  // $scope.currencies = Currencies;
  $scope.imageBase = Config.urls.imageUrl;
  
  $scope.load = function () {

    $http.get(Config.urls.queryProducts).success(function (products) {
      // alert('products : ' + products);
      $scope.goods=products;

      ProductService.setProducts(products);
      $scope.maxPage = products.length-1;
      $scope.lastUpdatedTime = new Date();
      $ionicSlideBoxDelegate.update();

    }).finally(function () {
      // $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.load();
  $scope.load = function (index) {

    $ionicSlideBoxDelegate.slide(index);
  };
  //
  // Called to navigate to the main app
  // $scope.startApp = function() {
  //   $state.go('tabs.shop');
  // };

  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    // alert('index is : ' + index + ', size : ' + $scope.size);
    $scope.slideIndex = index;
  };

  $scope.$on('$ionicView.afterEnter', function() {
    // $scope = $scope.$new(true);
    $ionicSlideBoxDelegate.update();
  });
  //
  // $scope.changePage(index) {
  //   $ionicSlideBoxDelegate.slide(index);
  // };
  //
});
