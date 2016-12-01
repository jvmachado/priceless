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
      $scope.modal.show()
    },1000);
  });

  $scope.user = {}
  $scope.meta = {}
  $scope.sendSalary = function() {
    console.log($scope.user.salary)
    // httpFactory.sendSalary($scope.salary).then(function(){
    //   $scope.modal.hide();
    // })
    $scope.modal.hide();
  }
  $scope.sendMeta = function() {
    console.log($scope.meta)
    // httpFactory.sendM($scope.meta).then(function(){
    //   $scope.modal.hide();
    // })
    $scope.modalMeta.hide();
  }
  $scope.obterRendaDoDia = function() {
    httpFactory.obterRendaDoDia().then(function(val) {
      $scope.rendaDoDia = val;
      console.log(val)
    });
  }
  $ionicModal.fromTemplateUrl('templates/modal.meta.html', {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  }).then(function(modalMeta) {
    $scope.modalMeta = modalMeta;
  });

  $scope.openMeta = function() {
    $scope.modalMeta.show();
  }
}])
