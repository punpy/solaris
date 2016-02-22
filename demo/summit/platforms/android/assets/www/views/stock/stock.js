angular.module('App')
.controller('StockController', function ($scope, $http, $state, $stateParams, Config) {

  $scope.chart = {
    options: {
      chart: {
        type: 'line'
      },
      legend: {
        enabled: true
      }
    },
    title: {
      text: 'Stock Level'
    },
    yAxis: {
      title: null
    },
    xAxis: {
      // type: 'datetime'
      categories: [],
      labels: {
        enabled : false
      },
      title: {
        text: 'Products'
      }
    },
    yAxis: {
      // type: 'datetime'

      title: {
        text: 'Quantity in Stock'
      }
    },
    series: []
  };

  var series = {
    data: []
  };

  $scope.loadChart = function () {

    $http.get(Config.urls.queryProducts).success(function (products) {
      $scope.emptyChart();
      $scope.goods=products;
      var series = {
                    name: 'Quantity In Stock',
                    data: []
                  };
      var categories = [];
      angular.forEach(products, function (product, index) {
        var prod = product.productCode + ' : ' + product.description;
        var value = product.quantityInStock;
        // $scope.chart.series.push(series);
        // series.data.push([value]);
        series.data.push([prod, value]);
        // categories.push(product.productCode);
      });
      $scope.chart.xAxis.categories= categories;
      $scope.chart.series.push(series);

    }).finally(function () {
      // $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.reload = function () {
    $scope.loadChart();
  }
  $scope.emptyChart = function() {
    $scope.chart.series = [];
    $scope.chart.xAxis.categories = [];
  }

  $scope.loadChart();

  $scope.$on('$ionicView.afterEnter', function() {
    $scope.emptyChart();
    $scope.loadChart();
  });

  $scope.$on('$destroy', function(){
    console.log ("stop the stock view ...");
  });

});
