<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'gw_events';

    protected $fillable = [
        'id', 'nome', 'event1', 'event2', 'event3', 'event4', 'event5', 
        'event6', 'event7', 'event8', 'event9', 'event10', 'status', 
        'created_at', 'updated_at'
    ];
}