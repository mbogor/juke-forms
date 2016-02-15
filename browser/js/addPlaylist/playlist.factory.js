juke.factory('PlaylistFactory', function ($http) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    return PlaylistFactory;

    

});








// juke.factory('PlaylistFactory', function ($http) {

//     var PlaylistFactory = {};

//     PlaylistFactory.create = function (data) {

//     	console.log('data', data)
//         return $http.post('/api/playlists/', data)
//         .then(function (response) {
//         	console.log('res', response)
//             return response.data;
//         });
//     };

//     PlaylistFactory.addSong = function(data) {
//     	var id = data._id
//     	return $http.post('/api/playlists/' + id + '/songs')
//     	.then(function(response) {
//     		return response.data;
//     	})
//     }

//     PlaylistFactory.fetchAll = function() {
//     	return $http.get('/api/playlists')
//     	.then(function(playlists) {
//     		return playlists.data;
//     	})
//     }
//     // PlaylistFactory.fetchById = function(id) {
//     	// return $http.get('/api/playlists' + id)
//     	// .then(function(playlist) {
//     	// 	return playlist;
//     	// })
//     // }
//     return PlaylistFactory;

// });





