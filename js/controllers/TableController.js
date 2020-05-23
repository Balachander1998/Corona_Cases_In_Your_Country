coronaModule.controller("TableController",function($scope,$http){
   

    $scope.loadData=function(){
      $http.get("https://corona.lmao.ninja/v2/countries").then(function(response){
         var data=JSON.stringify(response.data);
         $scope.countries=JSON.parse(data);
         
         console.log($scope.countries.length);
                
      })
 }
 $scope.doSort=function(propertyName){
 $scope.sortBy=propertyName;
 $scope.reverse=!$scope.reverse;

 }
  })
