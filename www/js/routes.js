angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('entrar', {
    url: '/login',
    templateUrl: 'templates/entrar.html',
    controller: 'entrarCtrl'
  })

  .state('cadastrar', {
    url: '/signup',
    templateUrl: 'templates/cadastrar.html',
    controller: 'cadastrarCtrl'
  })

  .state('categorias', {
    url: '/category',
    templateUrl: 'templates/categorias.html',
    controller: 'categoriasCtrl'
  })

  .state('listaDe', {
    url: '/list',
    templateUrl: 'templates/listaDe.html',
    controller: 'listaDeCtrl'
  })

  .state('mazaXisSalada', {
    url: '/selected',
    templateUrl: 'templates/mazaXisSalada.html',
    controller: 'mazaXisSaladaCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
