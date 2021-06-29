<?php
namespace App\sql;

class QueryIslandController {

    # app/Action/CharacterController:: Buscando todos os personagens
    public static function SELECT_ALL_ISLAND_DESC() {
        return "
            SELECT * 
            FROM 
                gw_ilhas 
            ORDER BY idIlha DESC";
    }

}
