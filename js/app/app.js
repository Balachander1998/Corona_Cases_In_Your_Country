var coronaModule=angular.module("coronaModule",['ngRoute']);
coronaModule.config(function($routeProvider){
    $routeProvider
        .when('/',{
        controller:'TableController',
        templateUrl:'./views/table.html'


    });
       
        

    

});