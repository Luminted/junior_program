webapp.factory("loginFactory", ["$q", "$http", function ($q, $http) {
    return {
        checkLogin: function (loginData) {
            var deferred = $q.defer();
            
            this.getUsers().then(function (users) {
                console.log(users);
                console.log(loginData.email + " " + loginData.password);
                var loggedIn = false;
                for (var u in users) {
                    if (u.email === loginData.email && u.pass === loginData.password) {
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