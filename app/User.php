<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['chunk_email'];

    public function posts(){
        return $this->hasMany('App\Post');
    }

    public function comments()
    {
        return $this->hasManyThrough('App\Comment','App\Post');
    }

    public function getChunkEmailAttribute($value)
    {
        $arrayEmail = explode("@",$this->email);
        if (count($arrayEmail)!=2) return $value;

        $chunkEmail1 = substr($arrayEmail[0],0,2);
        $chunkEmail2 = $arrayEmail[1];
        return $chunkEmail1."...@".$chunkEmail2;
    }

    public function getCreatedAtAttribute($value)
    {
        $value = date('U', strtotime($value));
        return $value * 1000;
    }
    public function getUpdatedAtAttribute($value)
    {
        $value = date('U', strtotime($value));
        return $value * 1000;
    }

}
