'use strict';

/* PLAYLIST (SINGULAR) CONTROLLER */

juke.controller('NewPlaylistCtrl', function ($scope) {
	$scope.touchedTitle = false;

    $scope.create = function(newPlaylist){
    	$scope.newForm = newPlaylist;
    	console.log($scope.newForm)
    }

    $scope.TitleError = function(){
    	if ($scope.touchedTitle){
    		return true;
    	}
    }

    $scope.SongError = function(){

    }


});