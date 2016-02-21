angular.module('App')
.controller('ShopController', function ($scope, $http, $state, $ionicSlideBoxDelegate, Endpoint, Goods) {

  // $scope.goods = Goods;
  // $scope.goods=[];
  $scope.endpoint = Endpoint;
  $scope.maxPage = 0;
  $scope.slideIndex=0;
  // $scope.currencies = Currencies;
  $scope.load = function () {

    $http.get($scope.endpoint.apiUrl + '/products').success(function (products) {
      $scope.goods=products;
      // ProductService.setProducts(products);
      $scope.maxPage = products.length-1;
      $scope.lastUpdatedTime = new Date();
    }).finally(function () {
      // $scope.$broadcast('scroll.refreshComplete');
    });
  };
  $scope.load();


  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tabs.shop');
  };
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
});
