<?php
namespace App\sql;

class QueryNoticeController {

    # app/Action/NoticeController:: Buscando todas as noticias
    public static function SELECT_ALL_NOTICES_DESC() {
        return "
            SELECT *
            FROM 
                gw_notices 
            ORDER BY id DESC";
    }

    # app/Action/NoticeController:: Buscando todas as noticias pelo ID
    public static function SELECT_NOTICES_BY_ID($id) {
        return "
            SELECT *
            FROM 
                gw_notices 
            WHERE 
                id = $id";
    }

}
