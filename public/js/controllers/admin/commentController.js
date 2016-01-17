app.controller('commentController',function ($scope,$resource,login)
{
    login.check();
    //Array de posts
    $scope.posts = null;
    //post selecionado
    $scope.post = null;
    //Array de objetos
    $scope.rows = null;
    //Um objeto
    $scope.row = null;
    //Resource
    var Comment = $resource("comments/:id",{},{
        getByPost: {url:'/comments/post/:id',
            method:'GET',isArray:true}
    });
    //Resource
    var Post = $resource("posts/:id",{},{
        getTitles: {url:'/posts/getTitles',
            method:'GET',isArray:true}
    });
    $scope.$on('$viewContentLoaded', function(){
        $scope.loadAllPosts();
    });
    $scope.loadAllPosts = function(){
        Post.getTitles(function(data){
            $scope.posts = data;
        });
    }
    $scope.selectPost = function($post){
        $scope.post = $post;
        $scope.row = null;
        Comment.getByPost({id:$post.id},function(data){
            $scope.rows = data;
        });
    }
    $scope.selectComment = function($comment){
        $scope.row = $comment;
    }
    $scope.save = function(){
        if ($scope.form.$invalid) {
            notifyError("Valores inválidos");
            return;
        }
        Comment.save($scope.row,function(data){
            notifyOk("Comentário salvo com sucesso");
            $scope.selectPost($scope.post);
        },function(data){
            notifyError(data);
        });
    }
});