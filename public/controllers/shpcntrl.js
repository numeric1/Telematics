/*app.controller('gpsCtrl', function($scope,$http) {
    
    $scope.message = 'test';
    
   
    var raceing = function(response){
        $scope.status = response;
    };
    $http.get("https://sheetlabs.com/NUME/cards.json").success(raceing);
    
    $scope.click=function(){
        
        
    };
    
 
    
});*/
app.controller('gpsCtrl', function($scope,$http) {
    
    $scope.message = 'test';
    $scope.vdata= {};
   
    var raceing = function(response){
        $scope.status = response;
     };
    
    
    $scope.rowClick = function(data){
        $scope.vdata=data;
    };
    $http.get("https://sheetlabs.com/NUME/cards.json").success(raceing);
 
    
});