angular.module('app.controllers.category', ['app.services.http','app.services.list'])

.controller('category', ['$scope', 'httpFactory','listService','$state',
function ($scope, httpFactory,listService,$state) {

  $scope.getLanches = function(){
    httpFactory.getTiposAlimentacao(1).then(function(items) {
      var list = {
        type: "Lanches",
        items: items
      }
      listService.setList(list);
      $state.go('listaDe');
    });
  }

  $scope.getPratos = function(){
    httpFactory.getTiposAlimentacao(2).then(function(items) {
      var list = {
        type: "Pratos",
        items: items
      }
      listService.setList(list);
      $state.go('listaDe');
    });
  }

  $scope.getBuffets = function(){
    httpFactory.getTiposAlimentacao(3).then(function(items) {
      var list = {
        type: "Buffets",
        items: items
      }
      listService.setList(list);
      $state.go('listaDe');
    });
  }
}])
