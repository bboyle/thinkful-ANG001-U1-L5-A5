angular.module( 'kitten-search' )
.controller( 'SearchController', function( $http, $rootScope ) {

	this.query = '';


	this.findImages = function findImages() {
		console.log( 'findImages', this.query );

		var results = {
			count: 24,
			query: this.query
		};

		// query instagram
		// show that instagram is being queried…
		$http({
			method: 'JSONP',
			url: 'https://api.instagram.com/v1/tags/' + encodeURIComponent( this.query ) + '/media/recent',
			params: {
				callback: 'JSON_CALLBACK',
				client_id: '5f11eeda43dc437b968ce3a6db18c8d0'
			}
		})
		.success(function( data, status, headers, config ) {
			// console.log( 'success', data, status, headers, config );
			if ( data.data.length === 0 ) {
				// on no results: display message
				// this message should say "No results. Search for kittens?" ;)
				console.log( 'no results', data, status, headers, config );

			} else {
				// on success: update results
				console.log( 'success', data );
				results.count = data.data.length;
				results.data = data.data;
				$rootScope.$broadcast( 'results', results );
			}
		})
		.error(function( data, status, headers, config ) {
			// onfail: display error
			console.log( 'error', data, status, headers, config );
		});

	};

});
