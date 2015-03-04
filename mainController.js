var app = angular.module('sounder');

app.controller('mainController', function($scope, $sce, soundService) {
    $scope.getUser = function(){
        soundService.getUser($scope.userSearch).then(function(data){
            $scope.userData = data.data;
        });
    };
    $scope.play = function(track_url){
        SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
    };
    
});