<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $table = 'gw_personagems';
    protected $primaryKey = 'idPersonagem';

    protected $fillable = [
        'idPersonagem', 'nomePersonagem', 'slugPersonagem', 'classe_a', 'classe_b', 'classe_c', 'classe_d',
        'tierPersonagem', 'userFruta', 'marine', 'parede', 'ponte', 'royal', 'pirate', 'updated_at', 'created_at'
    ];

    public function Magias()
    {
        return $this->hasMany(Spell::class, 'personagem_id', 'idPersonagem');
    }

    public function Skins()
    {
        return $this->hasMany(Skin::class, 'personagem_id', 'idPersonagem');
    }
    
}