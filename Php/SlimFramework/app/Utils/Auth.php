<?php

namespace App\Utils;

use App\Models\User;

use App\sql\QueryAuthenticate;

class Auth
{
    public function user()
    {
        if (isset($_SESSION['email']))
            $user = $this->db->prepare(QueryAuthenticate::SELECT_USER_FOR_EMAIL_PASSWORD($_SESSION['email']));
            $user->execute();
            return $vars['user'] = $user->fetch(\PDO::FETCH_OBJ);
    }

    public function check()
    {
        return isset($_SESSION['email']);
    }

    
}
