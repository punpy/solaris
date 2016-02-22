angular.module('App')
.controller('InventoryController', function ($scope, $state, $http, Config, ProductService) {

  // $scope.goods = Goods;
  // $scope.goods=[];
  // $ionicConfigProvider.views.maxCache(0);
  $scope.lastUpdatedTime = new Date();
  $scope.title = Config.defaultTitle;
  // $scope.endpoint = Endpoint;
  // $scope.currencies = Currencies;
  // $scope.getUrl = function(url) {
  //     return ".."+url;
  // }

  $scope.imageBase = Config.urls.imageUrl;
  
  $scope.load = function () {
    // $http.get($scope.endpoint.apiUrl+ '/products').success(function (products) {
    $http.get(Config.urls.queryProducts).success(function (products) {
      console.log("load products is called ...");
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
  //
  // $scope.ajaxCallback = function () {
  //   console.debug('received new order ...');
  //   $scope.load();
  // };
  //
  // $scope.initAjax = function () {
  //     console.debug("subscribing AJAX : /updateInventory");
  //     mule.subscribe("/updateInventory", $scope.ajaxCallback);
  //
  // };
  //
  // $scope.stopAjax = function () {
  //     console.debug("stopping AJAX : /updateInventory");
  //     mule.unsubscribe("/updateInventory", $scope.ajaxCallback);
  //
  // };

  $scope.load();
  //
  // try {
  //   $scope.initAjax();
  //   console.debug("init ajax...");
  // } catch (ex) {
  //   console.debug("failed to init ajax !!");
  // }

  // var promise = $interval(function() {
  //     $scope.load();
  // }, 2000);

  // Cancel interval on page changes
  $scope.$on('$destroy', function(){
    console.log ("Receive state change event - inventory tab ...");
    // if (mule) {
    //   $scope.stopAjax();
    // }
    // if (angular.isDefined(promise)) {
    //       $interval.cancel(promise);
    //       promise = undefined;
    // }
  });

});
