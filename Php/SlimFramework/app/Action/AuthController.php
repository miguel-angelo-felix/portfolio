<?php 
namespace App\Action;

use App\Utils\Auth;
use App\Models\User;
use App\sql\QueryAuthenticate;

final class AuthController extends Action
{ 

    # AuthControler - gw_users

    //Pagina de Login - No (Auth)
    public function login($request, $response)
    {
        if(isset($_SESSION['email'])) {
            $url = PATH.'/dashboard'.'/';
            return $response->withHeader('Location', $url);
        }

        $vars['page'] = 'admin/login';
        $vars['title'] = 'Login';

        return $this->view->render($response, 'template-admin.phtml', $vars);
    }

    //Pagina de Login - No (Auth)
    public function authenticate($request, $response)
    {
        $email = $request->getParam('email');
        $password = $request->getParam('password');

        $user = $this->db->prepare(QueryAuthenticate::SELECT_USER_FOR_EMAIL_PASSWORD($email, $password));
        $user->execute();

        $vars['user'] = $user->fetch(\PDO::FETCH_OBJ);

        # Caso usuário não consiga logar
        if(!$vars['user']){
            $vars['page'] = 'admin/login';
            $vars['title'] = 'Login';
            $vars['feedback'] = 'Usuário ou senha incorretos!';
            return $this->view->render($response, 'template-admin.phtml', $vars);
        }
        
        $_SESSION['id'] = $vars['user']->id;
        $_SESSION['name'] = $vars['user']->name;
        $_SESSION['email'] = $vars['user']->email;
        $_SESSION['remember_token'] = $vars['user']->remember_token;

        $vars['page'] = 'admin/dashboard';
        $vars['title'] = 'dashboard';

        $url = PATH.'/dashboard'.'/';
        return $response->withHeader('Location', $url);
    }

}

