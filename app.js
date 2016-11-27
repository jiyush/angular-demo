(function(){


  angular.module('myFirstApp' ,[])
  .controller('myFirstController', function($scope){
    $scope.name = "";
    $scope.totalvalue = 0;
    $scope.display = function(){
      var namevalue  = calculate($scope.name);
      $scope.totalvalue = namevalue;
    };
    function calculate(string) {
      var totalstring = 0;
      for (var i = 0; i < string.length; i++) {
        totalstring += string.charCodeAt(i);
      }
      return totalstring;
    }
  });
})();
