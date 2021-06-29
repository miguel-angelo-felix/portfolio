<?php
namespace App\sql;

class QueryHomePage {

    # home:: Buscando changlog e BuffNerfs
    public static function SELECT_CHANGLOG_BUFF_NERF() {
        return "
            SELECT 
                gw_changlog.*, 
                gw_chang_buff_nerf.id,
                gw_chang_buff_nerf.pBuff,
                gw_chang_buff_nerf.pNerf,
                gw_chang_buff_nerf.pAdjust,
                gw_chang_buff_nerf.pRework,
                gw_chang_buff_nerf.changlog_id
            FROM 
                gw_changlog 
            LEFT JOIN 
                gw_chang_buff_nerf 
            ON 
                gw_changlog.id = gw_chang_buff_nerf.changlog_id 
            ORDER BY gw_changlog.created_at DESC LIMIT 5";
    }

    # Buscando uma noticia 
    public static function SELECT_ONE_NOTICE() {
        return "
            SELECT * FROM gw_notices ORDER BY id DESC LIMIT 1";
    }

    public static function SELECT_WINNERS_TOURNAMENT() {
        return "
            SELECT * FROM gw_vencedores_torneio ORDER BY created_at DESC LIMIT 1";
    }

    public static function SELECT_EVENTS_DAY_ACTUAL() {
        return "
            SELECT * FROM `gw_events` WHERE nome = ? ORDER BY id DESC LIMIT 5";
    }

}
