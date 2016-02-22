angular.module('App', ['ionic', 'highcharts-ng', 'ngAnimate'])
// .constant('Endpoint', {
//   apiUrl: 'http://192.168.2.26:8100/api',
//   // apiUrl: 'http://192.168.1.166:8100/api',
//   imgUrl: 'http://ec2-52-62-17-219.ap-southeast-2.compute.amazonaws.com/summit/resources',
//   ajaxUrl: 'http://192.168.2.26:8090/services/salesforce/mule-resource'
// })
.constant( 'Config', {
    'EventId': {
      Auckland: '0019000001dkTvN',
      Melbourne: '0019000001dkTxm',
      Sydney: '0019000001dkTw5',
      Singapore: '0019000001dkTxw',
      HongKong: '0019000001dkTyX'
    },

    'defaultTitle'    : 'MuleSoft Summit - Singapore',
    'defaultEventId' : '0019000001dkTxw',

    'urls' : {
      'qrUrl' : '/util/qr-code?data=https://ap1.salesforce.com/',
      'getOrder' : '/api/orders/',
      'queryProducts' : '/api/products',
      'placeOrders' : '/api/orders',
      'whiteQrCode' : '/img/white-qr-code.png'
    }
  }
)
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
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
    .state('tabs.shop', {
      url: '/shop',
      views: {
        'shop-tab': {
          templateUrl: 'views/shop/shop.html',
          controller: 'ShopController'
        }
      }
    })
    .state('tabs.stock', {
      url: '/stock',
      views: {
        'stock-tab': {
          templateUrl: 'views/stock/stock.html',
          controller: 'StockController'
        }
      }
    })
    .state('tabs.enquiry', {
      url: '/enquiry',
      views: {
        'enquiry-tab': {
          templateUrl: 'views/enquiry/enquiry.html',
          controller: 'EnquiryController'
        }
      }
    })
    .state('tabs.order', {
      url: '/order?:productCode&:description',
      views: {
        'inventory-tab': {
          templateUrl: 'views/order/order.html',
          controller: 'OrderController'
        }
      }
    })
    .state('tabs.order_slide', {
      url: '/order_slide?:productCode&:description',
      views: {
        'shop-tab': {
          templateUrl: 'views/order/order.html',
          controller: 'OrderSlideController'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/inventory');
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
});
// .factory('Currencies', function () {
//   return [
//     { code: 'AUD', text: 'Australian Dollar', selected: true },
//     { code: 'BRL', text: 'Brazilian Real', selected: false },
//     { code: 'CAD', text: 'Canadian Dollar', selected: true },
//     { code: 'CHF', text: 'Swiss Franc', selected: false },
//     { code: 'CNY', text: 'Chinese Yuan', selected: true},
//     { code: 'EUR', text: 'Euro', selected: true },
//     { code: 'GBP', text: 'British Pound Sterling', selected: true },
//     { code: 'IDR', text: 'Indonesian Rupiah', selected: false },
//     { code: 'ILS', text: 'Israeli New Sheqel', selected: false },
//     { code: 'MXN', text: 'Mexican Peso', selected: true },
//     { code: 'NOK', text: 'Norwegian Krone', selected: false },
//     { code: 'NZD', text: 'New Zealand Dollar', selected: false },
//     { code: 'PLN', text: 'Polish Zloty', selected: false },
//     { code: 'RON', text: 'Romanian Leu', selected: false },
//     { code: 'RUB', text: 'Russian Ruble', selected: true },
//     { code: 'SEK', text: 'Swedish Krona', selected: false },
//     { code: 'SGD', text: 'Singapore Dollar', selected: false },
//     { code: 'USD', text: 'United States Dollar', selected: true },
//     { code: 'ZAR', text: 'South African Rand', selected: false }
//   ];
// });
