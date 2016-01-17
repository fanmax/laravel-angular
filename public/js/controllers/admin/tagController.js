app.controller('tagController', function ($scope,$resource,login) {
    //login.check();
    //Título da página
    $scope.title = "Tags";
    //Array de objetos
    $scope.rows = null;
    //Um objeto
    $scope.row = null;
    //Resource Tag
    var Tag = $resource("tags/:id");
    $scope.$on('$viewContentLoaded', function () {
        $scope.loadAll();
    });
    $scope.loadAll = function () {
        $scope.row = null;
        $scope.title = "Tags";
        Tag.query(function (data) {
            $scope.rows = data;
        }, function (response) {
            notifyError(response);
        });
    }
    $scope.getById = function ($id) {
        Tag.get({id: $id}, function (data) {
            $scope.title = "Tag: " + data.title;
            $scope.row = data;
        }, function (data) {
            notifyError(data);
        });
    }
    $scope.createNew = function () {
        $scope.row = {title: ""};
    }
    $scope.save = function () {
        if ($scope.form.$invalid) {
            notifyError("Valores inválidos");
            return;
        }
        Tag.save($scope.row, function (data) {
            notifyOk(data.title + " salvo com sucesso");
            $scope.loadAll();
        }, function (data) {
            notifyError(data);
        });
    }
});