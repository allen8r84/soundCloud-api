var app = angular.module('sounder');

app.controller('mainController', function($scope, soundService) {
    $scope.getUser = function(){
        soundService.getUser($scope.userSearch).then(function(data){
            console.log(data.data);
        });
    };
    
    $scope.getUser();
});