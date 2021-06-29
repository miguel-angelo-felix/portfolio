<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'gw_itens';
    protected $primaryKey = 'idItem';

    protected $fillable = [
        'nomeItem', 'slugItem', 'levelItem', 'typeEvent', 
        'ataqueItem', 'ataquePvp', 'vitalidadeItem', 'defesaItem', 
        'expItem', 'sorteItem', 'critItem', 'atkColar', 'classeRequerida', 
        'penArmadura', 'content', 'tipoItem', 'ilha_itens_id', 'status'
    ];

    public function Ilha()
    {
        return $this->belongsTo(Island::class, 'ilha_itens_id', 'id');
    }
    
}