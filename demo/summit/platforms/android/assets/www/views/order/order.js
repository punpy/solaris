angular.module('App')
.controller('OrderController', function ($scope, $state, $http, $stateParams, $ionicActionSheet, $ionicModal, Config, ProductService) {
  $scope.description = $stateParams.description;
  $scope.productCode = $stateParams.productCode;

  $scope.imageBase = Config.urls.imageUrl;
  $scope.order = function(data1) {
    // alert("calling order: "+ data1.firstName);
    // console.log("calling order: "+ data1.LastName);

    var newOrder = {
      "eventId": Config.defaultEventId,
      "orderDetails":
      [
        {
          "productCode": $scope.productCode,
          "quantity": 1
        }
      ],
      "customerDetails":
        {
          "firstName": data1.firstName,
          "lastName" : data1.lastName,
          "companyName": data1.companyName,
          "address": data1.address,
          "emailAddress": data1.emailAddress,
          "mobilePhone": data1.mobilePhone
        }

    };

    var req =
      {
          method: 'POST',
          url: Config.urls.placeOrders,
          data: newOrder,
          headers: {'Content-Type': 'application/json'}
      };

      $http(req).
      success(function(data, status, headers, config)
      {
        $scope.orderId = data.orderId;
        $scope.code = data.code;
        $scope.message = data.message;
        $scope.qrcode=Config.urls.qrUrl + data.orderId;
        $scope.showOrderResult();
      }).
      error(function(data, status, headers, config)
      {
          $scope.code = data.code;
          $scope.orderId = data.orderId;
          $scope.message = data.message;
          $scope.showOrderResult();
      });
};

  $scope.data = {
    firstname: '',
    lastName : '',
    companyName: '',
    address: '',
    emailAddress: '',
    mobilePhone: ''
  };

  angular.forEach(ProductService.getProducts(), function (good) {
    if (good.productCode === $stateParams.productCode) {
      $scope.product = good;
    }
  });
  if (angular.isUndefined($scope.product)) {
    $state.go('tabs.inventory');
  }

  $scope.showOrderResult = function () {
    if ($scope.modal) {
      $scope.modal.show();
    } else {
      $ionicModal.fromTemplateUrl('views/order/order-result.html', {
        scope: $scope
      }).then(function (modal) {
        // alert("$scope.orderId is : " + $scope.orderId);
        $scope.modal = modal;
        $scope.modal.show();
      });
    }
  };
  $scope.hideOrderResult = function () {
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
    console.log("destrying model..");

    if ($scope.modal)
      $scope.modal.remove();
  });

});
