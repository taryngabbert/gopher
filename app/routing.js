const routing = ( $locationProvider, $urlRouterProvider, $stateProvider ) => {
	$urlRouterProvider.otherwise( '/home' );

	const isLogged = ( $q, userService ) => {
		if ( !userService.getState() ) return $q.reject( 'AUTH_REQUIRED' );
		return $q.resolve();
	};

	const setCurrentUser = ( $q, userService ) => {
		return userService.getCurrentUser().then( result => {
			if ( !userService.getState() ) return $q.reject( 'AUTH_REQUIRED' );
			return $q.resolve();
		} );
	};
	const resetStates = ( userService ) => {
		userService.setState( null );
	};

	$stateProvider
		.state( 'home', { url: '/home', template: '<home></home>' } )
			// USER
		.state( 'error', { url: '/error', template: '<error></error>', resolve: { resetStates } } )

};

routing.$inject = [
	'$locationProvider',
	'$urlRouterProvider',
	'$stateProvider'
];
export { routing };
