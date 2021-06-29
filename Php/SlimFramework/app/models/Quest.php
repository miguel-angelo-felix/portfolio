<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    protected $table = 'gw_quests';
    protected $primaryKey = 'idQuest';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nomeQuest', 'slugQuest', 'slugNpc', 'levelQuest', 'slugIlha',
        'recompensas', 'contentBR', 'contentEN', 'contentPL', 
        'tipo', 'ilha_id'
    ];

    public function Ilha()
    {
        return $this->belongsTo(Island::class, 'ilha_id', 'id');
    }
    
}