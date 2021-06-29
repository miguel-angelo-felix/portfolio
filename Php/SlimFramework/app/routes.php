<?php 

use App\Utils\Auth;
use App\sql\QueryAuthenticate;

$middleware = function ($request, $response, $next) {

  if(isset($_SESSION['email'])) {

    $user = $this->db->prepare(QueryAuthenticate::SELECT_USER_FOR_EMAIL($_SESSION['email']));
    $user->execute();
    $user->fetchAll(\PDO::FETCH_OBJ);

    if(isset($user)){ 
      $response = $next($request, $response);
      return $response;
    }

    return $response->withHeader('Location', PATH.'/acsGlawikiLogin');
   
  } else {
    
    return $response->withHeader('Location', PATH.'/acsGlawikiLogin');
  }

};

# ROUTES DEFAULT PAGES
$app->get('/', 'App\Action\PagesAction:characters');

# AUTHENTICATE 
$app->get('/login', 'App\Action\AuthController:login');
$app->post('/auth', 'App\Action\AuthController:authenticate');

// GROUP ROUTES - ADMIN
$app->group('/dashboard', function($app){
  $app->get('/', 'App\Action\AdminController:index');

  # Personagens
  $app->get('/manager/character/form', 'App\Action\CharacterController:form');
  $app->get('/manager/character/list', 'App\Action\CharacterController:index');
  $app->get('/manager/character/edit/{id}', 'App\Action\CharacterController:view');
  $app->get('/manager/character/disable/{id}', 'App\Action\CharacterController:disable');
  $app->get('/manager/character/delete/{id}', 'App\Action\CharacterController:delete');
  $app->post('/manager/character/create', 'App\Action\CharacterController:create');
  $app->post('/manager/character/update', 'App\Action\CharacterController:update');

})->add($middleware);

# ERRO NOT FOUND
$container['notFoundHandler'] = function($container){
   
  return function($request, $response) use ($container){
    Header( "HTTP/1.1 301 Moved Permanently");
    Header( "Location: https://wiki.gla.com.br/");
  };
}

?>  