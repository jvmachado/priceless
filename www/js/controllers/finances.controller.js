angular.module('app.controllers.finances', ['app.services.http','app.services.list'])

.controller('financas', ['$scope','$ionicModal', 'httpFactory','listService','$state','$timeout',
function ($scope,$ionicModal, httpFactory,listService,$state,$timeout) {

  $ionicModal.fromTemplateUrl('templates/modal.finances.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(modal) {
    $scope.modal = modal;
    $timeout(function() {
      if($scope.flagSalary == true){
      $scope.modal.show()
      }
      $scope.flagSalary = false;
    },1000);
  });
  $ionicModal.fromTemplateUrl('templates/modal.meta.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(modalMeta) {
    $scope.modalMeta = modalMeta;
  });
  $ionicModal.fromTemplateUrl('templates/modal.gasto.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(modalMeta) {
    $scope.modalGasto = modalMeta;
  });

  $scope.rendaDoDia = 0;
  $scope.user = {}
  $scope.meta = {}
  $scope.gasto = {}
  $scope.numMetas = 0;
  $scope.flagSalary = true;

  $scope.sendSalary = function() {
    console.log($scope.user.salary)
    $scope.obterRendaDoDia();
    httpFactory.sendSalary($scope.salary).then(function(){
      $scope.modal.hide();
    })
    //$scope.modal.hide();
  }
  $scope.sendMeta = function() {
    console.log($scope.meta)
    httpFactory.sendMeta($scope.meta).then(function(){
      $scope.obterRendaDoDia();
      $scope.modal.hide();
    })
    $scope.numMetas =1;
    // $scope.modalMeta.hide();
  }
  $scope.sendGasto = function() {
    console.log($scope.gasto)
    httpFactory.sendGasto($scope.gasto).then(function(){
      $scope.obterRendaDoDia();
      $scope.modal.hide();
    })
    // $scope.modalGasto.hide();
  }
  $scope.obterRendaDoDia = function() {
    httpFactory.obterRendaDoDia().then(function(val) {
      $scope.rendaDoDia = val;
      console.log(val)
    });
  }
  $scope.obterRendaDoDia();

  $scope.openMeta = function() {
    $scope.modalMeta.show();
  }
  $scope.openGasto = function() {
    $scope.modalGasto.show();
  }
}])
