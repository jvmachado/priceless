angular.module('app.controllers.food', ['app.services.http','app.services.list'])

.controller('food', ['$scope', 'httpFactory','listService',
function ($scope, httpFactory,listService) {
  $scope.ali = listService.getAli();
  console.log($scope.ali);
}])
