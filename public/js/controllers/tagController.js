app.controller('tagController',function($scope,$http){

    $scope.tags = [];

    $scope.$on('$viewContentLoaded',function(){
        $http.get("/tags/posts").then(function(response){
            console.log(response);
            $scope.tags = response.data;
        },function(response){
            console.warn(response);
            notifyError(response);
        })
    })
});

/*
 $scope.$on('$viewContentLoaded',function(){ Irá executar a função anônima assim que a view estiver carregada.
 */