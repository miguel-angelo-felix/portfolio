<?php 
namespace App\Action;

use App\Models\Character;


use App\sql\QueryCharacterController;
use App\sql\QueryGenericsUtils;

final class CharacterController extends Action
{ 

    # FUNÇÕES PAINEL ADMINISTRATIVO

    # Exibe listagem de Personagens ::Authenticate
    public function index($request, $response)
    {
        $characters = $this->db->prepare(QueryCharacterController::SELECT_ALL_CHARACTER_DESC());
        $characters->execute();
        
        $vars['page'] = 'admin/pages/characters/list';
        $vars['feedback'] = '';
        $vars['status'] = '';
        $vars['characters'] = $characters->fetchAll(\PDO::FETCH_OBJ);

        return $this->view->render($response, 'template-admin.phtml', $vars);
        
    }

    # Exibe Formulário para editar Personagem ::Authenticate
    public function view($request, $response)
    {
        $id = $request->getAttribute('id');
        $personagem = $this->db->prepare(QueryCharacterController::SELECT_CHARACTER_BY_ID($id));
        $personagem->execute();

        $vars['page'] = 'admin/pages/characters/update';
        $vars['feedback'] = '';
        $vars['status'] = '';
        $vars['personagem'] = $personagem->fetch(\PDO::FETCH_OBJ);

        if(!$vars['personagem']) {
            return $response->withHeader('Location', PATH.'/dashboard/manager/character/list');
        }

        return $this->view->render($response, 'template-admin.phtml', $vars);
       
    }

    # Exibe Formulário de Personagem ::Authenticate
    public function form($request, $response)
    {
        $vars['page'] = 'admin/pages/characters/create';
        $vars['feedback'] = '';
        $vars['status'] = '';

        return $this->view->render($response, 'template-admin.phtml', $vars);
    }

    # Criar Personagem ::Authenticate
    public function create($request, $response)
    {
        $vars['page'] = 'admin/pages/characters/create';

        $vars['feedback'] = '';
        $vars['status'] = '';

        $uploadedFiles = $request->getUploadedFiles();
        $uploadedFile = $uploadedFiles['photoPrimary'];
        $filename = $uploadedFile->getClientFilename();

        # Criando pasta 
        mkdir(DIRECTORY_BASE.'/characters'.'/'.substr($filename, 0, -4));
        mkdir(DIRECTORY_BASE.'/characters'.'/'.substr($filename, 0, -4).'/skill-icon');

        # Upload Imagem
        $directory = DIRECTORY_BASE .'/characters'.'/'.$filename;
        $uploadedFile->moveTo($directory);

        $dados["nomePersonagem"] = $request->getParam('nomePersonagem');
        $dados["slugPersonagem"] = substr($filename, 0, -4);
        $dados["tierPersonagem"] = $request->getParam('tierPersonagem');
        $dados["classe_a"] = $request->getParam('classA');
        $dados["classe_b"] = $request->getParam('classB');
        $dados["classe_c"] = $request->getParam('classC');
        $dados["classe_d"] = $request->getParam('classD');
        $dados["userFruta"] = $request->getParam('userFruta');
        $dados["marine"] = $request->getParam('marine');
        $dados["pirate"] = $request->getParam('pirate');
        $dados["royal"] = $request->getParam('royal');
        $dados["ponte"] = $request->getParam('ponte');
        $dados["parede"] = $request->getParam('parede');

        $personagem = $this->db->prepare(QueryGenericsUtils::INSERT($dados, 'gw_personagems'));

        if(!$personagem->execute()) {
            $vars['feedback'] = 'Não foi possível adicionar personagem.';
            $vars['status'] = 'false';

            return $this->view->render($response, 'template-admin.phtml', $vars);
        }
        
        $vars['feedback'] = 'Personagem adicionado com sucesso!';
        $vars['status'] = 'true';

        return $this->view->render($response, 'template-admin.phtml', $vars);
    }

    # Atualiza Personagem ::Authenticate
    public function update($request, $response)
    {
        $uploadedFiles = $request->getUploadedFiles();
        $uploadedFile = $uploadedFiles['photoPrimary'];
        $photo = $request->getParam('iconPersonagem');

        if( $uploadedFile->getClientFilename() != '') {

            $filename = $uploadedFile->getClientFilename();

            # Upload da imagem nova
            $directory = DIRECTORY_BASE .'/characters'.'/'.$filename;
            $uploadedFile->moveTo($directory);

            # Removendo imagem antiga
            #unlink(DIRECTORY_BASE .'/characters'.'/'. $photo.'.png');

            # Mudando nome original da imagem
            $dados["slugPersonagem"] = substr($filename, 0, -4);
        }

        $select = $this->db->prepare(QueryCharacterController::SELECT_CHARACTER_BY_ID($request->getParam('id'))); 
        
        # Caso não ache personagem
        if(!$select->execute()) {
            $vars['feedback'] = 'O personagem não foi encontrado';
            $vars['status'] = 'false'; 

            return $this->view->render($response, 'template-admin.phtml', $vars);
        }

        $dados["nomePersonagem"] = $request->getParam('nomePersonagem');
        $dados["tierPersonagem"] = $request->getParam('tierPersonagem');
        $dados["classe_a"] = $request->getParam('classA');
        $dados["classe_b"] = $request->getParam('classB');
        $dados["classe_c"] = $request->getParam('classC');
        $dados["classe_d"] = $request->getParam('classD');
        $dados["userFruta"] = $request->getParam('userFruta');
        $dados["marine"] = $request->getParam('marine');
        $dados["pirate"] = $request->getParam('pirate');
        $dados["royal"] = $request->getParam('royal');
        $dados["ponte"] = $request->getParam('ponte');
        $dados["parede"] = $request->getParam('parede');

        $update = $this->db->prepare(QueryGenericsUtils::UPDATE($dados, 'gw_personagems', 'idPersonagem', $request->getParam('id')));

        # Caso não atualize personagem
        if(!$update->execute()) {
            $vars['feedback'] = 'Não foi possível atualizar personagem.';
            $vars['status'] = 'false'; 

            return $this->view->render($response, 'template-admin.phtml', $vars);
        }

        $personagem = $this->db->prepare(QueryCharacterController::SELECT_CHARACTER_BY_ID($request->getParam('id')));
        $personagem->execute();
        
        $vars['page'] = 'admin/pages/characters/update';
        $vars['feedback'] = 'Personagem atualizado com sucesso!';
        $vars['status'] = 'true';
        $vars['personagem'] = $personagem->fetch(\PDO::FETCH_OBJ);

        return $this->view->render($response, 'template-admin.phtml', $vars);  
    }

    # Deleta Personagem ::Authenticate
    public function delete($request, $response)
    {
        $id = $request->getAttribute('id');

        # Verificando se existe informação no banco de dados
        $personagem = $this->db->prepare(QueryCharacterController::SELECT_CHARACTER_BY_ID($id));
        $personagem->execute();

        $vars['personagem'] = $personagem->fetch(\PDO::FETCH_OBJ);

        if(!$vars['personagem']) { 
            return $response->withHeader('Location', PATH.'/dashboard/manager/character/list'); 
        }

        # Removendo informação do banco de dados
        $delete = $this->db->prepare(QueryGenericsUtils::DELETE('gw_personagems', 'idPersonagem', $id));
        $delete->execute();

        # Removendo imagem
        #unlink(DIRECTORY_BASE .'/characters'.'/'. $vars['personagem']->slugPersonagem.'.png');
        rename(DIRECTORY_BASE .'/characters'.'/'. $vars['personagem']->slugPersonagem, DIRECTORY_BASE .'/characters'.'/'. $vars['personagem']->slugPersonagem.'-deleted');

        # Buscando informações para listagem
        $personagem = $this->db->prepare(QueryCharacterController::SELECT_ALL_CHARACTER_DESC());
        $personagem->execute();

        $vars['page'] = 'admin/pages/characters/list';
        $vars['feedback'] = 'Personagem removido com sucesso!';
        $vars['status'] = 'true';
        $vars['characters'] = $personagem->fetchAll(\PDO::FETCH_OBJ);


        return $this->view->render($response, 'template-admin.phtml', $vars);
       
    }

    # Desativa Noticia ::Authenticate
    public function disable($request, $response)
    {
       
    }

    # Ativando Noticia ::Authenticate
    public function active($request, $response)
    {
       
    }

}

?>