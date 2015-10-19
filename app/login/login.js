/**
 * Created by sdonose on 10/15/2015.
 */
/**
 * Created by laur on 15.10.2015.
 */

app.factory('AuthService',
  ['$q', '$timeout', '$http', '$location',
    function ($q, $timeout, $http, $location) {

      var AuthService = {};

      AuthService.isAuthenticated = false;

      AuthService.login = function login(username, password) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('http://localhost:3000/api/users/login', {username: username, password: password})

          // handle success
          .success(function (data, status) {
            if (status === 200 && data.status) {
              AuthService.isAuthenticated = true;
              deferred.resolve();
              $location.path('/homepage');
            } else {
              AuthService.isAuthenticated = false;
              deferred.reject();
            }
          })

          // handle error
          .error(function (data) {
            AuthService.isAuthenticated = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      };

      AuthService.logout = function logout() {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a get request to the server
        $http.get('http://localhost:3000/api/users/logout')
          // handle success
          .success(function (data) {
            AuthService.isAuthenticated = false;
            deferred.resolve();
          })
          // handle error
          .error(function (data) {
            AuthService.isAuthenticated = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      };

      AuthService.register = function register(username, password) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('http://localhost:3000/api/users/register', {username: username, password: password})
          // handle success
          .success(function (data, status) {
            if (status === 200 && data.status) {
              deferred.resolve();
            } else {
              deferred.reject();
            }
          })
          // handle error
          .error(function (data) {
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      };

      // return available functions for use in controllers
      return AuthService;

    }]);


app.controller('loginController',
  ['$scope', '$location', 'AuthService',
    function ($scope, $location, AuthService) {

      $scope.login = function () {

        // initial values
        $scope.error = false;
        $scope.isAuthenticated = true;

        // call login from service
        AuthService.login($scope.loginForm.username, $scope.loginForm.password)
          // handle success
          .then(function () {
            $location.path('/homepage');
            $scope.isAuthenticated = false;
            $scope.loginForm = {};
          })
          // handle error
          .catch(function () {
            $scope.error = true;
            $scope.errorMessage = "Invalid username and/or password";
            $scope.isAuthenticated = false;
            $scope.loginForm = {};
          });

      };

    }]);

app.controller('registerController',
  ['$scope', '$location', 'AuthService',
    function ($scope, $location, AuthService) {

      $scope.register = function () {

        // initial values
        $scope.error = false;
        $scope.isAuthenticated = true;

        // call register from service
        AuthService.register($scope.registerForm.username, $scope.registerForm.password)
          // handle success
          .then(function () {
            $location.path('/homepage/login');
            $scope.isAuthenticated = false;
            $scope.registerForm = {};
          })
          // handle error
          .catch(function () {
            $scope.error = true;
            $scope.errorMessage = "Something went wrong!";
            $scope.isAuthenticated = false;
            $scope.registerForm = {};
          });

      };

    }]);