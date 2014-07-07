angular.module( 'kitten-search' )
.controller( 'ResultsController', function( $scope, $attrs, $rootScope ) {
	var RC = this;
	this.available = false;

	this.count = 0;
	this.query = '';

	// new results available
	$scope.$on( 'results', function( event, data ) {
		console.log( 'updating results', data );
		RC.available = true;
		RC.count = data.count;
		RC.query = data.query;
		RC.instagrams = data.data;
	});

});
