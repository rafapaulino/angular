(function(angular){
    'use strict';
    //cria a aplicacao
    var myApp = angular.module('pessoas',['ngRoute']);

    //criando a rota
    myApp.config(['$routeProvider',
        function($routeProvider) {
            
            $routeProvider
                .when('/', {
                    templateUrl: 'listar.html',
                    controller: 'CtrlPessoas'
                })
                .when('/pessoa/editar/:index', {
                    templateUrl: 'editar.html',
                    controller: 'CtrlEditar'
                })
                .when('/pessoa/adicionar', {
                    templateUrl: 'adicionar.html',
                    controller: 'CtrlAdicionar'
                });
        }
    ]);

    //listar pessoas
    myApp.controller('CtrlPessoas', function ($scope) {

        $scope.pessoas = [
            {nome: 'Maria', cidade: 'São Paulo'},
            {nome: 'Julia', cidade: 'São Paulo'},
            {nome: 'Flávia', cidade: 'Rio de Janeiro'},
            {nome: 'João', cidade: 'São Paulo'},
            {nome: 'Paulo', cidade: 'Salvador'},
            {nome: 'Bruno', cidade: 'Minas Gerais'}
        ];

        //removendo as pessoas da lista
        $scope.remover = function(index) {
           $scope.pessoas.splice(index,1);
        };
    });

    //adicionar pessoas
    myApp.controller('CtrlAdicionar', function ($scope) {
        
        //criando uma function que adiciona as pessoas no array
        $scope.add = function () {
            //console.log('veio aqui');
            //console.log($scope.pessoas);
            $scope.pessoas.push($scope.pessoa);

            $scope.pessoa = "";
            $scope.result = "Registro adicionado com sucesso!";
            //$scope.$apply();
        };
    });

    //editar pessoas
    myApp.controller('CtrlEditar', function ($scope, $routeParams) {
        
        //adicionando os valores no formulario
        $scope.pessoa = $scope.pessoas[$routeParams.index];
        //$scope.$apply();
    });

})(window.angular);