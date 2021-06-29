<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Torneio extends Model
{
    protected $table = 'gw_vencedores_torneio';

    protected $fillable = [
        'id', 'primeiroColocado', 'segundoColocado', 'terceiroColocado', 'quartoColocado', 
        'quintoColocado', 'sextoColocado', 'status', 'created_at', 'updated_at'
    ];
}