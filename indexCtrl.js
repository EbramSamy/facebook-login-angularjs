//Angular Module
var app = angular.module('appLogin', ['ngResource', 'facebook']);

// id of facebook application that you create in facebook developers
var idAplicationFacebook = 'put-here-the-application-id';

// Configuration of facebook module
app.config(function(FacebookProvider) {
	FacebookProvider.init(idAplicationFacebook);
});

// LoginFbCtrl controller
app.controller('loginFbCtrl', function($scope, Facebook, $http) {

	$scope.loginStatus = 'disconnected';
	$scope.facebookIsReady = false;
	$scope.user = null;

	$scope.login = function() {
		Facebook.login(function(response) {
			$scope.loginStatus = response.status;
			console.log(response.status);
			$scope.api();
		});
	};

	$scope.removeAuth = function() {
		Facebook.api({
			method: 'Auth.revokeAuthorization'
		}, function(response) {
			Facebook.getLoginStatus(function(response) {
				$scope.loginStatus = response.status;
				console.log(response.status);
			});
		});
	};

	$scope.api = function() {
		Facebook.api('/me', function(response) {
			console.log(response);
			$scope.user = response;

			// Here we capture data about facebook user in the scope.
			// Now we can do anything with this data in the rest of controller
			$scope.user.name = response.name;
			$scope.user.id = response.id;

		});
	};

	$scope.$watch(function() {
		return Facebook.isReady();
	}, function(newVal) {
		if (newVal) {
			$scope.facebookIsReady = true;
		}
	});
});
