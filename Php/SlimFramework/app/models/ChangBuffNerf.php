<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChangBuffNerf extends Model
{
    protected $table = 'gw_chang_buff_nerf';
    protected $primaryKey = 'id';

    protected $fillable = [
        'pBuff', 'pNerf', 'pAdjust', 'pRework',
        'status', 'changlog_id'
    ];

    public function ChangLog()
    {
        return $this->belongsTo(ChangLog::class, 'changlog_id', 'id');
    }
}
