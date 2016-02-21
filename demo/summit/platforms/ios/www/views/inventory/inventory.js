angular.module('App')
.controller('InventoryController', function ($scope, $http, $ionicPopover, Endpoint, ProductService) {

  // $scope.goods = Goods;
  // $scope.goods=[];
  $scope.lastUpdatedTime = new Date();
  $scope.endpoint = Endpoint;
  // $scope.currencies = Currencies;
  $scope.load = function () {
    $http.get($scope.endpoint.apiUrl+ '/products').success(function (products) {
      $scope.goods=products;
      ProductService.setProducts(products);
      // Goods=products;
      $scope.lastUpdatedTime = new Date();

    }).finally(function () {
      $scope.$broadcast('scroll.refreshComplete');
    });

    // $http.get('https://api.bitcoinaverage.com/ticker/all').success(function (tickers) {
    //   angular.forEach($scope.currencies, function (currency) {
    //     currency.ticker = tickers[currency.code];
    //     currency.ticker.timestamp = new Date(currency.ticker.timestamp);
    //   });
    // }).finally(function () {
    //   $scope.$broadcast('scroll.refreshComplete');
    // });
    // $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.load();
});
