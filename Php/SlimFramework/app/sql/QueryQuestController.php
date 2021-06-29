<?php
namespace App\sql;

class QueryQuestController {

    # app/Action/CharacterController:: Buscando todos os personagens
    public static function SELECT_ALL_QUEST_DESC() {
        return "
            SELECT * 
            FROM 
                gw_quests 
            ORDER BY slugIlha DESC";
    }

}
