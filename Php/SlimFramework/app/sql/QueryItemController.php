<?php
namespace App\sql;

class QueryItemController {

    # app/Action/NoticeController:: Buscando todas as noticias
    public static function SELECT_ALL_ITENS() {
        return "
            SELECT *
            FROM 
                gw_itens 
            ORDER BY tipoItem, levelItem ASC";
    }

    public static function SELECT_ALL_BALANCING($idChanglog) {
        return "
            SELECT *
            FROM 
                gw_chang_buff_nerf 
            WHERE 
                changlog_id = {$idChanglog}
            ORDER BY id DESC";
    }

}
