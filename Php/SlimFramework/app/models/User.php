<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'gw_users';

    protected $fillable = [
        'name', 'email', 'password', 'remember_token'
    ];
}