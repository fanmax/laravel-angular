app.controller('mainController',function($scope,$http){

    $scope.posts = [];

    $scope.$on('$viewContentLoaded',function(){
        $http.get("/posts/last/3").then(function(response){
            console.log(response);
            $scope.posts = response.data;
        },function(response){
            console.warn(response);
            notifyError(response);
        })
    })
});

/*
 $scope.$on('$viewContentLoaded',function(){ Irá executar a função anônima assim que a view estiver carregada.
 */