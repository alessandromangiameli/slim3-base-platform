<?php
$dotenv = new Dotenv\Dotenv(__DIR__ . '/..');
$dotenv->load();

$config = [];
$config['displayErrorDetails'] =  getenv('APP_ENV') != 'production';
$config['addContentLengthHeader'] = false;

$app = new \Slim\App([
	'settings' => $config
]);

require __DIR__ . '/services.php';	
require __DIR__ . '/routes.php';	