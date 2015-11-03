var main = angular.module('main',[]);
  main.controller('MainController',function($scope){
    $scope.value = 'HI Main!';
    $scope.arr = [0, 1, 2, 3, 4, 5];
  });