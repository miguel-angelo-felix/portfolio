<?php
namespace App\sql;

class QueryWinnerController {

    # app/Action/WinnerController:: Buscando todas os vencedores
    public static function SELECT_ALL_WINNERS_DESC() {
        return "
            SELECT *
            FROM 
                gw_vencedores_torneio 
            ORDER BY id DESC";
    }

    # app/Action/WinnerController:: Buscando todos os vencedores do torneio pelo ID
    public static function SELECT_WINNERS_BY_ID($id) {
        return "
            SELECT *
            FROM 
                gw_vencedores_torneio 
            WHERE 
                id = $id";
    }

}
