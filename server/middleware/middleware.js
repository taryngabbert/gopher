export default function ( req, res, next ) {

	// MIDDLE WARE DEVELOPED TO CHECK IF THE USER IS LOGGED IN, UNCOMMENT WHEN
	// YOU WANT TO TEST IT OR GO LIVE, FOR NOW IT JUST GOES TO THE NEXT FUNCTION
	// **************************************************
	// if ( req.isAuthenticated() ) {
	// 	return next();
	// }
	// const notLoggedIn = { userAuthenticated: false };
	// return res.json( notLoggedIn );
	// **************************************************


	// COMMENT THIS OUT WHEN TESTING, OR WHEN LIVE. 
	return next();
}
