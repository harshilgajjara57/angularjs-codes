//functions module
var app = angular.module("functions", []);
    

// isArray Controller to check if passed instance is array or not
app.controller('isArrayController', ['$scope', function ($scope) {
    
    //initialize var with array
    $scope.demoarray = [
    { name: 'Merge sort' }, 
    { name: 'Quick sort' }, 
    { name: 'Bubble sort' }
    ];

    //initialize var with string data
    $scope.demostring = "hello";

    //function to check if passed var is array or not
    $scope.arrayCheck = function(value){
        if(angular.isArray(value)){
            return "This is Array";
        } else {
            return  "This is not an Array";
        }
    }

}]);


// isDate Controller to check if passed instance is date or not
app.controller('isDateController', ['$scope', function ($scope) {
    
    
    //initialize var with date object
    $scope.demodate = new Date();

    //initialize var with string data
    $scope.demostring = "hello";

    //function to check if passed var is date obj or not
    $scope.dateCheck = function(value){
        if(angular.isDate(value)){
            return "This is date";
        } else {
            return  "This is not a date";
        }
    }

}]);


// isDefined Controller to check if passed var is initialized or not
app.controller('isDefinedController', ['$scope', function ($scope) {
    
    
    //initialize var with date object
    $scope.demodate = new Date();

    //initialize var with string data
    $scope.demostring = "hello";

    $scope.demoemptyIni = "";

    $scope.demounIni;

    //function to check if passed var is defined or not
    $scope.isDefinedCheck = function(value){
        if(angular.isDefined(value)){
            return "The value is defined";
        } else {
            return  "The value is not defined";
        }
    }

}]);


// isElement Controller to check if passed refference is dom element or not
app.controller('isElementController', ['$scope', function ($scope) {
    
    
    //initialize var with date object
    $scope.demodate = new Date();

    //initialize var with string data
    $scope.demostring = "hello";

    //intialize var with dom element
    $scope.demoElement = document.getElementById('myButton');

    //function to check if passed refference is dom element or not
    $scope.isElementCheck = function(value){
        if(angular.isElement(value)){
            return "The value is DOM Element";
        } else {
            return  "The value is not DOM Element";
        }
    }

}]);


// isFunction Controller to check if passed refference is function or not
app.controller('isFunctionController', ['$scope', function ($scope) {
    
    
    //initialize var with date object
    $scope.demodate = new Date();

    //initialize var with string data
    $scope.demostring = "hello";

    //intialize var with function
    $scope.demoFunction = function(){
        return 0;
    };

    //function to check if passed refference is function or not
    $scope.isFunctionCheck = function(value){
        if(angular.isFunction(value)){
            return "The value is Function";
        } else {
            return  "The value is not a Function";
        }
    }

}]);


// isNumber Controller to check if passed instance is number or not
app.controller('isNumberController', ['$scope', function ($scope) {
    
    //initialize var with array
    $scope.demoarray = [
    { name: 'Merge sort' }, 
    { name: 'Quick sort' }, 
    { name: 'Bubble sort' }
    ];

    //initialize var with string data
    $scope.demostring = "hello";

    //initialize with number
    $scope.demonumber = 10;

    //function to check if passed var is number or not
    $scope.isNumberCheck = function(value){
        if(angular.isNumber(value)){
            return "This is Number";
        } else {
            return  "This is not a Number";
        }
    }

}]);


// isObject Controller to check if passed instance is object or not
app.controller('isObjectController', ['$scope', function ($scope) {
    
    //initialize var with array
    $scope.demoarray = [
    { name: 'Merge sort' }, 
    { name: 'Quick sort' }, 
    { name: 'Bubble sort' }
    ];

    //initialize var with string data
    $scope.demostring = "hello";

    //initialize with object
    $scope.demoobject = {name:"harshil",age:21};

    //function to check if passed var is object or not
    $scope.isObjectCheck = function(value){
        if(angular.isObject(value)){
            return "This is Object";
        } else {
            return  "This is not an Object";
        }
    }

}]);

// isString Controller to check if passed instance is string or not
app.controller('isStringController', ['$scope', function ($scope) {
    
    //initialize var with array
    $scope.demoarray = [
    { name: 'Merge sort' }, 
    { name: 'Quick sort' }, 
    { name: 'Bubble sort' }
    ];

    //initialize var with string data
    $scope.demostring = "hello";

    //function to check if passed var is string or not
    $scope.isStringCheck = function(value){
        if(angular.isString(value)){
            return "This is String";
        } else {
            return  "This is not a String";
        }
    }

}]);


// isUndefined Controller to check if passed var is initialized or not
app.controller('isUndefinedController', ['$scope', function ($scope) {
    
    
    //initialize var with date object
    $scope.demodate = new Date();

    //initialize var with string data
    $scope.demostring = "hello";

    $scope.demoemptyIni = "";

    $scope.demounIni;

    //function to check if passed var is undefined or not
    $scope.isUndefinedCheck = function(value){
        if(angular.isUndefined(value)){
            return "The value is undefined";
        } else {
            return  "The value is not undefined";
        }
    }

}]);


// angularmerge Controller to merge two objects
app.controller('angularMergeController', ['$scope', function ($scope) {
    
    //object1 with firstname , lastname , age
    var obj1 = {fname:"harshil",lname:"gajjar",age:22};

    //object2 with salary , gender
    var obj2 = {salary:15000,gender:"male"};

    $scope.obj1 = obj1;
    $scope.obj2 = obj2;

    //merge obj1 & obj2 as obj
    $scope.obj = angular.merge({/* add extra attr in obj*/},obj1,obj2);

}]);


// angularforEach Controller
app.controller('angularForEachController', ['$scope', function ($scope) {
    
    //empty initialized array
    $scope.fullNames = [];

    //array of objects of person first & last name
    var firstLastNames = [
        {fname:"harshil",lname:"gajjar",age:22},
        {fname:"vishvesh",lname:"shah",age:25},
        {fname:"kalp",lname:"mehta",age:35},
        {fname:"safi",lname:"badi",age:29}
    ];

    $scope.firstLastNames = firstLastNames;

    //forEach function with multiplication operation
    angular.forEach(firstLastNames,function(value,key){
        $scope.fullNames.push(value.fname+" "+value.lname+" | days before born : "+(value.age*12*30));
    });

}]);

// angularCopyController Controller
app.controller('angularCopyController', ['$scope', function ($scope) {
    
    var o1 = { name: 'David', age: 26, skill: {} };
    var o2 = angular.copy(o1);
    var o3 = o1;

    // Output: false
    $scope.checkAB=(o1 === o2);
    $scope.checkABType=(o1.skill === o2.skill);

    // Output: true
    $scope.checkAC=(o1 === o3);
    $scope.checkACType=(o1.skill === o3.skill);

}]);


// angularEqualsController Controller
app.controller('angularEqualsController', ['$scope', function ($scope) {
    
    $scope.userA = {};
    $scope.userB = {};

    $scope.compareAB = function() {
        $scope.result = angular.equals($scope.userA,$scope.userB);
    }



}]);


// angularExtendController Controller
app.controller('angularExtendController', ['$scope', function ($scope) {
    
    $scope.userA = {name:'harshil',degree:'computer engineering',sa:20};

    $scope.userB = {name:'ravi',degree:'ca',salary:20000};

    //angular.extend function.
    $scope.userC = angular.extend({},$scope.userA,$scope.userB);



}]);


// angularBootstrapController Controller
app.controller('angularBootstrapController', ['$scope', function ($scope) {
    
    $scope.message = "angularjs app manually started by angular.bootstrap";
    
    // another js file is addedd for bootsrap exmple,
    // angular.element(function(){
    //     angular.bootstrap(document,['functions']);
    // });
    
}]);


// angularBindController Controller
app.controller('angularBindController', ['$scope', function ($scope) {
    
    $scope.num = 0;
    $scope.bindDemo = function () {
        var add = angular.bind(this, function (a, b) {
            return a + b;
        });
        $scope.Add = add(5, $scope.num);
    }
    
}]);


