<?php
namespace App\sql;

class QueryGenericsUtils {

    # INSERT
    public static function INSERT(array $dados, $tabela) {

        $campos  = implode(", ", array_keys($dados) );
        $valores = "'" . implode( "', '", array_values($dados) ) . "'";
        $query = "INSERT INTO {$tabela} ({$campos}) VALUES ({$valores})";
        
        return $query;
    }

    # UPDATE
    public static function UPDATE(array $dados, $tabela, $campoCondicao, $valorCondicao) {

        foreach($dados as $fields => $values){
            $campos[] = "$fields = '$values'";
        }

        $campos = implode(", ", $campos);
        $query = "UPDATE {$tabela} SET $campos WHERE $campoCondicao = $valorCondicao";
        
        return $query;
    }

    # DELETE
    public static function DELETE($tabela, $campoCondicao, $valorCondicao) {
        $query = "DELETE FROM $tabela WHERE $campoCondicao = $valorCondicao";
        return $query;
    }

    # DISABLE
    public static function DISABLE($tabela, $campoCondicao, $valorCondicao) {

        $query = "UPDATE $tabela SET status = 'disabled' WHERE $campoCondicao = $valorCondicao";
        return $query;
    }

    # ACTIVE
    public static function ACTIVE($tabela, $campoCondicao, $valorCondicao) {
        $query = "UPDATE $tabela SET status = 'actived' WHERE $campoCondicao = $valorCondicao";
        return $query;
    }

    # SELECT BY ID
    public static function SELECT_BY_ID($tabela, $colunm, $id) {
        return "
            SELECT * 
            FROM 
                {$tabela}
            WHERE {$colunm} = {$id}";
    }
    
}

