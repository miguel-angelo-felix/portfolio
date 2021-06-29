<?php
namespace App\sql;

class QuerySkillController {
    
    public static function SELECT_ALL_SPELLS($id) {
       return "
            SELECT * 
            FROM 
                gw_magias 
            WHERE 
                personagem_id = $id
            ORDER BY level ASC";
    }

    public static function SELECT_SKILL_BY_ID($id) {
        return "
            SELECT * 
            FROM 
                gw_magias 
            WHERE 
                idMagia= $id";
    }
 

}
