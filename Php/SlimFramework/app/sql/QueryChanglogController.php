<?php
namespace App\sql;

class QueryChanglogController {

    # app/Action/NoticeController:: Buscando todas as noticias
    public static function SELECT_ALL_CHANGLOG_DESC() {
        return "
            SELECT *
            FROM 
                gw_changlog 
            ORDER BY id DESC";
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
