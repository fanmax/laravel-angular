app.controller('userController',function($scope,$http){

    $scope.users = [];

    $scope.$on('$viewContentLoaded',function(){
        $http.get("/users/posts").then(function(response){
            console.log(response);
            $scope.users = response.data;
        },function(response){
            console.warn(response);
            notifyError(response);
        })
    })
});

/*
 $scope.$on('$viewContentLoaded',function(){ Irá executar a função anônima assim que a view estiver carregada.
 */