<?php 
namespace App\Action;

//require '../Utils/Validator.php';

use App\Utils\Validator;
use App\Utils\File;
use App\Utils\Auth;

final class AdminController extends Action
{ 

    # ADMIN

    # Pagina de Home Admin - (Auth)
    public function index($request, $response)
    {
        $vars['page'] = 'admin/dashboard';
        $vars['feedback'] = '';
        $vars['status'] = ''; 
        $vars['title'] = 'Administrativo';

        return $this->view->render($response, 'template-admin.phtml', $vars);
    }


}
