angular.module('App')
.controller('OrderController', function ($scope, $state, $stateParams, Endpoint, Goods, ProductService) {

  $scope.productCode = $stateParams.productCode;
  $scope.description = $stateParams.description;
  $scope.endpoint = Endpoint;
  // alert($scope.myProductCode);
  angular.forEach(ProductService.getProducts(), function (good) {
    if (good.productCode === $stateParams.productCode) {
      $scope.product = good;
      // alert("good is : " + good);
    }
  });
  if (angular.isUndefined($scope.product)) {
    $state.go('tabs.inventory');
  }
  // alert($goods);
  // alert($scope.parentobj.goods);
  // $scope.myGoods = $goods;

  // angular.forEach(myGoods, function (good) {
  //   if (good.productCode === $stateParams.productCode) {
  //     $scope.product = good;
  //   }
  // });
  //
  // if (angular.isUndefined($scope.product)) {
  //   $state.go('tabs.inventory');
  // }

});
