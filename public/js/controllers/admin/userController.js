app.controller('userController', function ($scope, $resource, login) {
    login.check();
    //Título da página
    $scope.title = "Users";
    //Array de objetos
    $scope.rows = null;
    //Um objeto
    $scope.row = null;
    //Resource Tag
    var User = $resource("users/:id");
    $scope.$on('$viewContentLoaded', function () {
        $scope.loadAll();
    });
    $scope.loadAll = function () {
        $scope.row = null;
        $scope.title = "Users";
        User.query(function (data) {
            $scope.rows = data;
        }, function (response) {
            notifyError(response);
        });
    }
    $scope.getById = function ($id) {
        User.get({id: $id}, function (data) {
            $scope.title = "User: " + data.name;
            $scope.row = data;
        }, function (data) {
            notifyError(data);
        });
    }
    $scope.createNew = function () {
        $scope.row = {name: ""};
    }
    $scope.save = function () {
        if ($scope.form.$invalid) {
            notifyError("Valores inválidos");
            return;
        }
        User.save($scope.row, function (data) {
            notifyOk(data.title + " salvo com sucesso");
            $scope.loadAll();
        }, function (data) {
            notifyError(data);
        });
    }
});