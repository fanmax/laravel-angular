app.controller('postController', function ($scope, login, $resource) {
    login.check();
    //Título da página
    $scope.title = "Posts";
    //Array de objetos
    $scope.rows = null;
    //Um objeto
    $scope.row = null;
    //Resource Tag
    var Post = $resource("posts/:id");
    $scope.$on('$viewContentLoaded', function () {
        $scope.loadAll();
    });
    $scope.loadAll = function () {
        $scope.row = null;
        $scope.title = "Posts";
        Post.query(function (data) {
            $scope.rows = data;
        }, function (response) {
            notifyError(response);
        });
    }
    $scope.getById = function ($id) {
        Post.get({id: $id}, function (data) {
            $scope.title = "Post: " + data.title;
            $scope.row = data;
        }, function (data) {
            notifyError(data);
        });
    }
    $scope.createNew = function () {
        $scope.row = {title: "", active: 0};
    }
    $scope.save = function () {
        if ($scope.form.$invalid) {
            notifyError("Valores inválidos");
            return;
        }
        Post.save($scope.row, function (data) {
            notifyOk(data.title + " salvo com sucesso");
            $scope.loadAll();
        }, function (data) {
            notifyError(data);
        });
    }
});