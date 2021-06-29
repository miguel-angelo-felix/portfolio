<?php 

function feedback($status, $msg) {

    $result = '';

    if($status != '') {
        if($status == 'false') {
            $result = "<div class='alert alert-danger alert-dismissible'>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>
                <h5><i class='icon fas fa-ban'></i> Alert!</h5>
                $msg
            </div>";
        }

        if($status == 'true') {
            $result = "<div class='alert alert-success alert-dismissible'>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>
                <h5><i class='icon fas fa-check'></i> Alert!</h5>
                $msg
            </div>";
        }
    }

    return $result;
}


?>

