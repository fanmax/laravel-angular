app.controller('profileController',
    function ($scope,login,$resource,$rootScope) {
        login.check();
//Título da página
        $scope.title = "Perfil";
//Um objeto
        $scope.row = null;
//Resource Tag
        var User = $resource("users/:id");
        $scope.$on('$viewContentLoaded', function(){
            $scope.getById($rootScope.authuser.id);
        });
        $scope.getById = function($id){
            User.get({id:$id},function(data){
                $scope.row = data;
            },function(data){
                notifyError(data);
            });
        }
        $scope.save = function(){
            if ($scope.form.$invalid) {
                notifyError("Valores inválidos");
                return;
            }
            User.save($scope.row,function(data){
                notifyOk(data.name + " salvo com sucesso");
                $scope.getById($rootScope.authuser.id);
            },function(data){
                notifyError(data);
            });
        }
    });
