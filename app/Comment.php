<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    protected $fillable = ['id','text','email','active','post_id'];

    const CREATED_AT = null;
    const UPDATED_AT = null;

    public function post()
    {
        return $this->belongsTo('App\Post');
    }

    public function scopeActive($query)
    {
        return $query->where('active',1);
    }
}
