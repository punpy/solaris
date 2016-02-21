angular.module('App', ['ionic', 'highcharts-ng'])
.constant('Endpoint', {
  apiUrl: 'http://192.168.1.166:8100/api',
  imgUrl: 'http://ec2-52-62-17-219.ap-southeast-2.compute.amazonaws.com/summit/resources'
})
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })
    .state('tabs.shop', {
      url: '/shop',
      views: {
        'shop-tab': {
          templateUrl: 'views/shop/shop.html',
          controller: 'ShopController'
        }
      }
    })
    .state('tabs.inventory', {
      url: '/inventory',
      views: {
        'inventory-tab': {
          templateUrl: 'views/inventory/inventory.html',
          controller: 'InventoryController'
        }
      }
    })
    .state('tabs.order', {
      url: '/order?:productCode&:description',
      views: {
        'order-tab': {
          templateUrl: 'views/order/order.html',
          controller: 'OrderController'
        }
      }
    })
    .state('tabs.analysis', {
      url: '/analysis',
      views: {
        'analysis-tab': {
          templateUrl: 'views/analysis/analysis.html',
          controller: 'AnalysisController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/shop');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('Goods', function () {
  return [
    { productCode: 'TS_M_S', quantityInStock: '10', description: 'Small T-Shirt for man', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10'},
    { productCode: 'TS_M_M', quantityInStock: '5', description: 'Medium T-Shirt for man', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_M_L', quantityInStock: '1', description: 'Large T-Shirt for man', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_M_XL', quantityInStock: '199', description: 'X-Large T-Shirt for man', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_W_L', quantityInStock: '14', description: 'Large T-Shirt for woman', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_W_M', quantityInStock: '0', description: 'Medium T-Shirt for woman', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_W_S', quantityInStock: '5', description: 'Small T-Shirt for woman', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'TS_W_XS', quantityInStock: '0', description: 'X-Small T-Shirt for woman', imageUrl: '/content/products/tshirt/TS_M_M.png', selected: true, unitPrice: '10' },
    { productCode: 'W_BOTTLE', quantityInStock: '0', description: 'Muley Water Bottle', imageUrl: '/content/products/waterbottle/WB.png', selected: true, unitPrice: '10' }
  ];
})
.factory('ProductService', function () {
  var products=[];
  return {
		getProducts: function(){
			return products;
		},
    setProducts: function(goods){
      products = goods;
			return products;
		}
	}
})
.factory('Currencies', function () {
  return [
    { code: 'AUD', text: 'Australian Dollar', selected: true },
    { code: 'BRL', text: 'Brazilian Real', selected: false },
    { code: 'CAD', text: 'Canadian Dollar', selected: true },
    { code: 'CHF', text: 'Swiss Franc', selected: false },
    { code: 'CNY', text: 'Chinese Yuan', selected: true},
    { code: 'EUR', text: 'Euro', selected: true },
    { code: 'GBP', text: 'British Pound Sterling', selected: true },
    { code: 'IDR', text: 'Indonesian Rupiah', selected: false },
    { code: 'ILS', text: 'Israeli New Sheqel', selected: false },
    { code: 'MXN', text: 'Mexican Peso', selected: true },
    { code: 'NOK', text: 'Norwegian Krone', selected: false },
    { code: 'NZD', text: 'New Zealand Dollar', selected: false },
    { code: 'PLN', text: 'Polish Zloty', selected: false },
    { code: 'RON', text: 'Romanian Leu', selected: false },
    { code: 'RUB', text: 'Russian Ruble', selected: true },
    { code: 'SEK', text: 'Swedish Krona', selected: false },
    { code: 'SGD', text: 'Singapore Dollar', selected: false },
    { code: 'USD', text: 'United States Dollar', selected: true },
    { code: 'ZAR', text: 'South African Rand', selected: false }
  ];
});
