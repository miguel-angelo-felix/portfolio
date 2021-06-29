<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    protected $table = 'gw_monstros';
    protected $primaryKey = 'idMonstro';

    protected $fillable = [
        'nomeMonstro', 'slugMonstro', 'vidaMonstro', 'ExpDiamond', 
        'ExpGold', 'ExpSilver', 'ExpBronze', 'loot', 
        'ilha_monstros_id '
    ];

    public function Ilha()
    {
        return $this->belongsTo(Island::class, 'ilha_monstros_id', 'id');
    }
}
