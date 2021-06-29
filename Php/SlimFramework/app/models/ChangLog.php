<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChangLog extends Model
{
    protected $table = 'gw_changlog';
    protected $primaryKey = 'id';

    protected $fillable = [
        'title', 'tipo', 'categoria', 'content',
        'status'
    ];

    public function ChangBuffNerf()
    {
        return $this->hasMany(ChangBuffNerf::class, 'changlog_id', 'id');
    }
}
