webapp.controller("bodyController", ['$scope', '$http', 'userFactory'
    ,
    function ($scope, $http, userFactory) {
        $scope.isLoggedIn = true ;
        
        $scope.users = [];
        $scope.defaultContent = 'index';
        
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
        
        //Template loader
        $scope.getTemplate = function(name){
            return 'template/' + name + '.html';
        }
        
        //Content loader
        $scope.getContent = function(name){
            console.log($scope.currentContent);
            console.log('fur külső');
            if(!name){
                console.log('fut index');
                $scope.currentContent = $scope.getTemplate('content/index');
            }else{
                console.log('fut');
                $scope.currentContent = $scope.getTemplate('content/' + name);
            }
        }
        
        $scope.getContent();
}]);