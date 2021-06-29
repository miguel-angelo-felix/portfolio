<?php
namespace App\sql;

class QueryAuthenticate {

    # Utils/Auth:: Buscando usuário.
    public static function SELECT_USER_FOR_EMAIL_PASSWORD($email, $password) {
        return "
            SELECT * 
            FROM 
                gw_users 
            WHERE 
                email = '$email' AND password = '$password'";
    }

    # app/route:: Buscando usuário pelo email.
    public static function SELECT_USER_FOR_EMAIL($email) {
        return "
            SELECT * 
            FROM 
                gw_users 
            WHERE 
                email = '$email'";
    }

}

