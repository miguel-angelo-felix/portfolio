<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
    protected $table = 'gw_notices';

    protected $fillable = [
        'id', 'title', 'slug', 'content', 'banner', 'status', 'created_at', 'updated_at'
    ];
}