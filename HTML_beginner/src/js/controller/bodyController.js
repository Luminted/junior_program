webapp.controller("bodyController", ['$scope', '$http', 'loginFactory'
    , function ($scope, $http, loginFactory) {
        $scope.isLoggedIn = false;
        $scope.users = [];
        $scope.doLogin = function () {
            console.log($scope.email + " " + $scope.password);
            loginFactory.checkLogin($scope.loginData).then(function (loggedIn) {
                $scope.isLoggedIn = loggedIn;
            })
        };
}]);