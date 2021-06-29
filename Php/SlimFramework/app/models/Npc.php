<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Npc extends Model
{
    protected $table = 'gw_npcs';
    protected $primaryKey = 'idNpc';

    protected $fillable = [
        'nome', 'slug', 'status','contentBR', 'contentEN', 'contentPL', 'fk_ilha'
    ];

    public function Ilha()
    {
        return $this->belongsTo(Island::class, 'fk_ilha', 'id');
    }
}
