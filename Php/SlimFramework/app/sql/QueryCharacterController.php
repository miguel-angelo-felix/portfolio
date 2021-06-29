<?php
namespace App\sql;

class QueryCharacterController {

    # app/Action/CharacterController:: Buscando todos os personagens
    public static function SELECT_ALL_CHARACTER_DESC() {
        return "
            SELECT * 
            FROM 
                gw_personagems 
            ORDER BY tierPersonagem DESC";
    }

    public static function SELECT_CHARACTER_BY_ID($id) {
        return "
            SELECT * 
            FROM 
                gw_personagems 
            WHERE idPersonagem = {$id}";
    }

 

}
