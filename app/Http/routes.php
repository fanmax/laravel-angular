<?php
Route::get('/', function () {
    return Redirect::to('/index.html');
});

Route::get('routes', function () {
    \Artisan::call('route:list');
    return "<pre>".\Artisan::output();
});

Route::group(['middleware' => ['web']], function () {

});

Route::group(['middleware' => ['api']], function () {

    Route::get('/posts/last/{n?}','PostController@last');
    Route::get('/menuinfo','BlogController@menuInfo');
    Route::get('/users/posts','UserController@allPosts');
    Route::get('/comments','CommentController@all');
    Route::get('/tags/posts','TagController@allWithPosts');

    Route::post('/login','UserController@doLogin');
    Route::get('/logout','UserController@doLogout');
    Route::post('/user/newlogin','UserController@createLogin');
    Route::get('/login','UserController@getLogin');

    //Rotas para posts
    Route::get('/posts', 'PostController@index');
    Route::get('/posts/getTitles', 'PostController@getTitles');
    Route::get('/posts/{id}', 'PostController@show');

    Route::get('/comments/post/{id}','CommentController@getCommentsByPost');

    Route::get('/tags', 'TagController@index');
    Route::get('/tags/{id}', 'TagController@show');

    Route::get('/users', 'UserController@index');
    Route::get('/users/{id}', 'UserController@show');

    Route::group(['middleware'=>'auth'],function(){
        Route::post('/tags', 'TagController@save');

        Route::post('/comments','CommentController@save');

        Route::post('/posts','PostController@save');

        Route::post('/users','UserController@saveFromRequest');

    });
});

