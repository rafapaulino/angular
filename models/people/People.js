(function(angular){
    'use strict';
    //cria a aplicacao
    var myApp = angular.module('People',['ngRoute','ngResource']);

    //criando a rota
    myApp.config(
    	[
    		'$routeProvider',
    		function($routeProvider) {
	            
	            $routeProvider
	                .when('/', {
	                    templateUrl: 'views/people/index.html',
	                });
    		}
    	]
    );

})(window.angular);