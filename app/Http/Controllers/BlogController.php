<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    public function menuInfo()
    {

        //throw new \Exception("Esta é uma exceção de teste");

        $tagController = new TagController();
        $commentController = new CommentController();

        return array(
            $tagController->all(),
            $commentController->last()
        );
    }
}
