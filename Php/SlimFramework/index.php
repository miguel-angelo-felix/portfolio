<?php 

session_start();

require 'vendor/autoload.php';
require 'config/constants.php';
require 'config/config.php';

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();
$container['view'] = new \Slim\Views\PhpRenderer("resouces/views/");

define('DIRECTORY_BASE', __DIR__ .'/resouces/assets/images');

$container['db'] = function ($c) {

    $db = $c['settings']['db'];

    $pdo = new PDO('mysql:host=' . $db['host'] . ';dbname=' . $db['database'],
    $db['username'], $db['password']);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

require 'app/routes.php';

$app->run();



