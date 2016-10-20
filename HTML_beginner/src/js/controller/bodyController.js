webapp.controller("bodyController", ['$scope', '$http', 'userFactory'
    ,
    function ($scope, $http, userFactory) {
        $scope.isLoggedIn = false;
        $scope.users = [];
        $scope.doLogin = function () {
            if (!$scope.loginData) {
                console.log("Please fill out the form1");
                return;
            }

            if (!$scope.loginData.pass || !$scope.loginData.email) {
                console.log("Please fill out the form2");
                return;
            }

            userFactory.checkLogin($scope.loginData).then(function (loggedIn) {
                $scope.isLoggedIn = loggedIn;
            });
        }
}]);