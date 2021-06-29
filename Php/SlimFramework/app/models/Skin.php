<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class Skin extends Model
{
    protected $table = 'gw_skins';

    protected $fillable = [
        'name', 'personagem_id'
    ];

    public function Personagem()
    {
        return $this->belongsTo(Character::class, '	personagem_id', 'idPersonagem');
    }
}
