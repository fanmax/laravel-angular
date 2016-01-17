app.controller('menuController',function($scope,$http){

    $scope.tags = [];
    $scope.comments = [];

    $http.get("/menuinfo").then(function (response) {
        console.log(response);
        $scope.tags = response.data[0];
        $scope.comments = response.data[1];
    }, function (response) {
        console.warn(response);
        notifyError(response);
    });
});

/*
 $scope.$on('$viewContentLoaded',function(){ Irá executar a função anônima assim que a view estiver carregada.
 */