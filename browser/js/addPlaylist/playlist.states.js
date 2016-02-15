'use strict';

// var juke = angular.module('juke', ['ui.router']);


juke.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/js/addPlaylist/templates/playlist.html',
        controller: "NewPlaylistCtrl"
    });
});