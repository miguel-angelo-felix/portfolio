<?php
namespace App\sql;

class QuerySkinController {

    public static function SELECT_ALL_SKINS_DESC($id) {
        return "
            SELECT * 
            FROM 
                `gw_skins` 
            WHERE 
                `personagem_id` = {$id}
            ORDER BY `name` ASC";
    }

}
