// module of directives
var myApp = angular.module("directives",[]);

// controller for ngBind
myApp.controller('ngBindController', ['$scope', function ($scope) {
    
    $scope.bindDemo = "default ngbind controller text";

}]);

// controller for ngChange
myApp.controller('ngChangeController', ['$scope', function ($scope) {
    
    $scope.counter = 0;
      $scope.change = function() {
        $scope.counter++;
      };

}]);

// controller for ngInit
myApp.controller('ngInitController', ['$scope', function ($scope) {
    
    $scope.valueA = 0;
    $scope.valueB;
    $scope.sum = 0;

    $scope.addVal = function() {
        $scope.sum = $scope.valueA + $scope.valueB;
    }

}]);