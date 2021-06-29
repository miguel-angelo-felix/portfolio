<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Spell extends Model
{
    protected $table = 'gw_magias';
    protected $primaryKey = 'idMagia';

    protected $fillable = [
        'nomeMagia', 'slugMagia', 'cooldownMagia', 'energyMagia', 'powerMagia',
        'tipo_a', 'tipo_b', 'tipo_c', 'tipo_d', 'tipo_e', 'tipo_f', 'tipo_g',
        'level', 'contentBR', 'contentEN', 'contentPL', 'contentESP', 'personagem_id '
    ];

    public function Personagem()
    {
        return $this->belongsTo(Character::class, 'personagem_id', 'idPersonagem');
    }
}
