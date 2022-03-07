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


//controller for formController
myApp.controller('formController', ['$scope', function($scope) {

    $scope.userType = 'guest';

}]);


//controller for inputController
myApp.controller('inputController', ['$scope', function($scope) {

    $scope.user = {name: 'guest', last: 'visitor'};

}]);


//controller for inputCheckboxController
myApp.controller('inputCheckboxController', ['$scope', function($scope) {

    $scope.checkboxModel = {
     value1 : true,
     value2 : 'YES'
   };

}]);

//controller for inputDateController
myApp.controller('inputDateController', ['$scope', function($scope) {
    $scope.example = {
      value: new Date(2013, 9, 22)
    };
}]);


//controller for inputDatetimeLocalController
myApp.controller('inputDatetimeLocalController', ['$scope', function($scope) {

    $scope.example = {
      value: new Date(2010, 11, 28, 14, 57)
    };

}]);


//controller of inputEmailController
myApp.controller('inputEmailController', ['$scope', function($scope) {

    $scope.email = {
      text: 'me@example.com'
    };

}]);


//controller of inputMonthController
myApp.controller('inputMonthController', ['$scope', function($scope) {

    $scope.example = {
      value: new Date(2013, 9, 1)
    };

}]);


//controller of inputNumberController
myApp.controller('inputNumberController', ['$scope', function($scope) {

    $scope.example = {
      value: 12
    };

}]);


//controller for inputRadioController
myApp.controller('inputRadioController', ['$scope', function($scope) {

    $scope.color = {
      name: 'blue'
    };

    $scope.specialValue = {
      "id": "12345",
      "value": "green"
    };

}]);


//controller for inputRangeController
myApp.controller('inputRangeController', ['$scope', function($scope) {

    $scope.value = 75;
    $scope.min = 10;
    $scope.max = 90;

  }]);


//controller for inputTextController
myApp.controller('inputTextController', ['$scope', function($scope) {
    $scope.example = {
      text: 'guest',
      word: /^\s*\w*\s*$/
    };
  }]);


  //controller for inputTimeController
  myApp.controller('inputTimeController', ['$scope', function($scope) {
    
    $scope.example = {
      value: new Date(1970, 0, 1, 14, 57, 0)
    };

  }]);


  //controller for inputUrlController
  myApp.controller('inputUrlController', ['$scope', function($scope) {

    $scope.url = {
      text: 'http://google.com'
    };

  }]);


  //controller for inputWeekController
  myApp.controller('inputWeekController', ['$scope', function($scope) {

    $scope.example = {
      value: new Date(2013, 0, 3)
    };

  }]);


  //controller for ngAppController
  myApp.controller('ngAppController', function($scope) {
    $scope.a = 1;
    $scope.b = 2;
  });


  //controller for ngBindTemplate
myApp.controller('ngBindTemplateController', ['$scope', function($scope) {

    $scope.salutation = 'Hello';
    $scope.name = 'World';

  }]);