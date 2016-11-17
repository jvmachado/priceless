angular.module('app.controllers.list', ['app.services.http','app.services.list'])

.controller('list', ['$scope', 'httpFactory','listService','$state',
function ($scope, httpFactory,listService,$state) {
  $scope.list = listService.getList();
  $scope.title = $scope.list.type;
  $scope.items = [];
  $scope.loadItems = function() {
    for(var i = 0; i<$scope.list.items.length;i++){
      var it = {
        estabelecimento: $scope.list.items[i].estabelecimento.nome,
        nome:$scope.list.items[i].nome,
        id:$scope.list.items[i].id,
        custo:$scope.list.items[i].custo
      }
      $scope.items.push(it);
    }
  }
  $scope.getId = function(el) {
    var alimento =el.target.id;
    httpFactory.getAlimentoById(alimento).then(function(item) {
      listService.setAli(item);

      $state.go('mazaXisSalada');
    });
  }
}])
