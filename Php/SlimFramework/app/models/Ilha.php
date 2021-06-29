<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ilha extends Model
{
    protected $table = 'gw_ilhas';

    protected $fillable = [
        'nomeIlha', 'slugIlha', 'photo', 'levelIlha', 'region', 'status', 'created_at', 'updated_at'
    ];

    public function Quests()
    {
        return $this->hasMany(Quest::class, 'ilha_id', 'id');
    }

    public function Itens()
    {
        return $this->hasMany(Item::class, 'ilha_itens_id', 'id');
    }

    public function Monsters()
    {
        return $this->hasMany(Monster::class, 'ilha_monstros_id', 'id');
    }

    public function Npcs()
    {
        return $this->hasMany(Npc::class, 'ilha_npc_id', 'id');
    }

    public function SpecialMission()
    {
        return $this->hasMany(SpecialMission::class, 'ilha_sm_id', 'id');
    }

    public function MapPrimary()
    {
        return $this->hasMany(MapPrimary::class, 'mapa_primario_id', 'id');
    }
}