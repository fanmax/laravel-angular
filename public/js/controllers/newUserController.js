app.controller('newUserController',
    function ($scope, $http, $location, $rootScope) {
        $scope.user = {};
        $scope.createUser = function () {
            if ($scope.form.$invalid) {
                console.warn("invalid form");
                return;
            }
            $http.post("/user/newlogin",
                {
                    'email': $scope.user.email,
                    'password': $scope.user.password,
                    'name': $scope.user.name
                }).then(function (response) {
                    console.log(response);
                    $rootScope.authuser = response.data;
                    $location.path('/');
                }, function (response) {
                    notifyError(response);
                });
        }
    });