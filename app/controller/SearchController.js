angular.module( 'kitten-search' )
.controller( 'SearchController', function( $http, $rootScope ) {

	var SEARCH = this;
	this.query = '';
	this.searching = false;
	this.noResults = false;
	this.error = false;

	function searching( state ) {
		SEARCH.error = false;
		SEARCH.searching = !! state;
	}


	this.findImages = function findImages() {
		// console.log( 'findImages', this.query );
		searching( true );

		var results = {
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
			searching( false );
			if ( data.data.length === 0 ) {
				// on no results: display message
				// console.log( 'no results', data, status, headers, config );
				SEARCH.noResults = true;

			} else {
				// on success: update results
				SEARCH.noResults = false;
				// console.log( 'success', data );
				results.count = data.data.length;
				results.data = data.data;
				$rootScope.$broadcast( 'results', results );
			}
		})
		.error(function( data, status, headers, config ) {
			console.log( 'error', data, status, headers, config );
			// onfail: display error
			searching( false );
			SEARCH.error = true;
		});

	};

});
