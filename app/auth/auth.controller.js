angular.module('loop')
	.controller('AuthCtrl', function(Auth, $state){
		var authCtrl = this;
// user object
		authCtrl.user = {
			email: '',
			password: ''

		};

	});
//Log in
authCtrl.login = function(){
	Auth.$authWithPassword(authCtrl.user).then(function (auth){
		$state.go('home');
	},	function (error) {
		authCtrl.error = error;
	});
}; 

// Register
authCtrl.register = function (){
	Auth.$createUser(authCtrl.user).then(function (user){
		authCtrl.login();
	}, function (error){
		authCtrl.error = error;
	});
};

