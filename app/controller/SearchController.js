angular.module( 'kitten-search' )
.controller( 'SearchController', function() {

	this.query = '';


	this.findImages = function findImages() {
		console.log( 'findImages', this.query );
		// TODO look up the instagram API
		// show that instagram is being queried…

		// onfail: display error
		// on no results: display message

		// on success: update results
	};

});
