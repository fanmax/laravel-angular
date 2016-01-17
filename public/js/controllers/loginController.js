app.controller('loginController',
    function ($scope, $http, $location, $rootScope) {
        $scope.user = {};
        $scope.doLogin = function () {
            if ($scope.form.$invalid) {
                console.warn("invalid form");
                return;
            }
            $http.post("/login",
                {
                    'email': $scope.user.email,
                    'password': $scope.user.password
                }).then(function (response) {
//Login realizado,
// redirecionar para pagina de posts
                    $rootScope.authuser = response.data;
                    $location.path('/');
                }, function (response) {
                    notifyError(response);
                });
        }
    });