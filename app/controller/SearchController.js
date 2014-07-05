angular.module( 'kitten-search' )
.controller( 'SearchController', function( $scope, $attrs, $rootScope ) {

	this.query = '';


	this.findImages = function findImages() {
		console.log( 'findImages', this.query );

		var results = {
			count: 24,
			query: this.query
		};

		// TODO look up the instagram API
		// show that instagram is being queried…

		// onfail: display error
		// on no results: display message

		// on success: update results
		$rootScope.$broadcast( 'results', results );
	};

});
