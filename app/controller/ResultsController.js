angular.module( 'kitten-search' )
.controller( 'ResultsController', function( $scope, $attrs, $rootScope ) {
	var RC = this;
	this.results = false;

	this.count = 24;
	this.query = 'kittens';

	// new results available
	$scope.$on( 'results', function( event, data ) {
		RC.count = data.count;
		RC.query = data.query;
	});

});
