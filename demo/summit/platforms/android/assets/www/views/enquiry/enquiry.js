angular.module('App')
.controller('EnquiryController', function ($scope, $state, $stateParams, $http, Config, ProductService) {

  // $scope.orderId = '';
  // $scope.qrcode='';
  // $scope.orderIdMsg = '';

    $scope.getOrder = function (inData) {
      var url = Config.urls.getOrder + inData.emailAddress;
      console.log("Calling  : " + url);
      $http.get(url).success(function (data) {
        $scope.orderId = data.orderId;
        $scope.qrcode=Config.urls.qrUrl + data.orderId;
        $scope.orderIdMsg = 'Order ID : ' + data.orderId;
        console.log('orderid: ' + $scope.orderId);
        console.log('qrcode : ' + $scope.qrcode);
      }).error(function (error) {
        $scope.orderIdMsg = 'Order ID : ' + error;
      })
      .finally(function () {
        // $scope.$broadcast('scroll.refreshComplete');
      });
    };

    $scope.data = {
      emailAddress: ''
    };

    $scope.$on('$ionicView.afterEnter', function() {
      // alert('after enter enquiry view');
      // $scope = $scope.$new(true);
      $scope.data.emailAddress='';
      $scope.orderId = '';
      $scope.qrcode=Config.urls.whiteQrCode;
      $scope.orderIdMsg = '';
    });
    $scope.$on('$ionicView.beforeEnter', function() {
      // $scope = $scope.$new(true);
    });

    $scope.$on('$destroy', function(){

      console.log ("stop the enquiry ...");
    });


});
