// IMPORT GLOBAL STYLES
import './app.scss';

// IMPORT ANGULAR MODULES
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { appDirective } from './app.directive';
import { routing } from './routing';
import { userService } from './services/userService';


// IMPORT COMPONENTS
import { home } from './components/home/home';

// START MODULE
angular.module( 'BASEAPP', [
	uiRouter,
	ngAnimate,
	// COMPONENTS
	home.name
] )
	.directive( 'app', appDirective )
	.factory( 'userService', userService )
	.config( routing )
	.run( function ( $rootScope, $state ) {
		$rootScope.$on(
			'$stateChangeError',
			( evnt, toState, toParams, fromState, fromParams, error ) => {
				if ( error === 'AUTH_REQUIRED' ) {
					$state.go( 'home' );
				}
			}
		);
	} );
