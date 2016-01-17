app.controller('logoutController',
    function ($scope,$http,$location,$rootScope) {
        $http.get("/logout").then(function(response){
            notifyOk("Logout realizado.");
            $rootScope.authuser = null;
            $location.path('#/');
        },function(response){
            notifyError(response);
        });
    });