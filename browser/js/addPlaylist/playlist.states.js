'use strict';

// var juke = angular.module('juke', ['ui.router']);


juke.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/js/addPlaylist/templates/playlist.html',
        controller: "NewPlaylistCtrl"
        // resolve: {
        // 	id: function(PlaylistFactory, $stateParams) {
        // 		// console.log('stateparams', $stateParams);
        // 		return PlaylistFactory.fetchById($stateParams.playlistId)
        // 	}
        // }
    })
    .state('displayPlaylist', {
    	url: '/playlists/:playlistId',
    	templateUrl: '/js/addPlaylist/templates/createdPlaylist.html',
    	controller: "SidebarPlaylistCtrl",
    	resolve: {
    		thePlaylist: function(PlaylistFactory, $stateParams) {
    			return PlaylistFactory.fetchById(stateParams.playlistId);
    		}

    	}
    })
});

