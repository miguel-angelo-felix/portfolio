<?php 
namespace App\Action;

use App\sql\QueryHomePage;

final class PagesAction extends Action
{ 

    //PAGINA DE PERSONAGENS
    public function characters($request, $response)
    {

        $vars['page'] = 'pages/characters';
        $vars['pageClass'] = 'characters';

        $vars['title'] = 'Personagens';
        $vars['description'] = 'Personagens do grand line adventure, todas as informações foram retiradas de videos e/ou do próprio jogo. Caso encontre algum erro, por favor reporte para a equipe GlaWiki na page do facebook.';
        $vars['midiaTitle'] = 'GlaWiki - Todos os personagens do grand line adventures';

       //buscando todos os personagens
       $posts = $this->db->prepare("SELECT * FROM `gw_personagems` ORDER BY `tierPersonagem` DESC ");
       $posts->execute();

       if ($posts->rowCount() > 0) {
           $vars['posts'] = $posts->fetchAll(\PDO::FETCH_OBJ);
       }

        return $this->view->render($response, 'template.phtml', $vars);

    }

}

?>