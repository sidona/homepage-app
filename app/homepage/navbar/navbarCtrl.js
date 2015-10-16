/**
 * Created by sdonose on 10/16/2015.
 */

app.controller('navbarCtrl', ['$scope', '$rootScope', 'AuthService', function ($scope, $rootScope, AuthService) {
  $scope.logout = function () {
    $scope.isAuthenticated = false;
  };
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    $scope.isAuthenticated = AuthService.isAuthenticated;
  })
}]);