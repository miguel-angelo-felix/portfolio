<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    protected $table = 'gw_missions';
    protected $primaryKey = 'idMission';

    protected $fillable = [
        'titulo', 'slug', 'photo', 'ContentEasyBR', 
        'ContentEasyEN', 'ContentEasyPL', 'ContentHardBR', 'ContentHardEN', 
        'ContentHardPL', 'ilha_sm_id'
    ];

    public function Ilha()
    {
        return $this->belongsTo(Island::class, 'ilha_sm_id', 'id');
    }
}
