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



// controller for ngSrc & ngSrcset
myApp.controller('ngSrcController', ['$scope', function ($scope) {
    
    $scope.imgLink = "https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80";


}]);