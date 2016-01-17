app.controller('commentController',function($scope,$http){

    $scope.comments = [];

    $scope.$on('$viewContentLoaded',function(){
        $http.get("/comments").then(function(response){
            console.log(response);
            $scope.comments = response.data;
        },function(response){
            console.warn(response);
            notifyError(response);
        })
    })
});

/*
 $scope.$on('$viewContentLoaded',function(){ Irá executar a função anônima assim que a view estiver carregada.
 */