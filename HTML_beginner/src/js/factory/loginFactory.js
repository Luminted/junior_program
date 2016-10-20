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