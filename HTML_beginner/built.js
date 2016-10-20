var webapp = angular.module("webapp", []);
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
webapp.factory("userFactory", ["$q", "$http", function ($q, $http) {
    return {
        checkLogin: function (loginData) {
            var deferred = $q.defer();
            
            this.getUsers().then(function (users) {
                var loggedIn = false;
                for (var u in users) {
                    //console.log("email " + u.email + " pass " + u.pass);
                    if (users[u].email === loginData.email && users[u].pass === loginData.pass) {
                        console.log("belépett");
                        loggedIn = true;
                    }
                }
                deferred.resolve(loggedIn);
            }, function (err) {
                alert("Failed to fetch data from server!");
                deferred.resolve(loggedIn);
            });
            
            return deferred.promise;
        },
        
        getUsers: function () {
            var deferred = $q.defer();
            $http.get('json/user.json').then(function (serverData) {
                deferred.resolve(serverData.data);
            }, function (err) {
                deferre.reject
            });
            return deferred.promise;
        }
    }
}]);