<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tutorial extends Model
{
    protected $table = 'gw_tutorials';
    protected $primaryKey = 'idTutorial';

    protected $fillable = [
        'tituloTutorial', 'nivelTutorial', 'categoriaTutorial', 'content', 
        'slugTutorial', 'region', 'status'
    ];
}
