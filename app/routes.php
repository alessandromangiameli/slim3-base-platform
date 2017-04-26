<?php 
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->get('/hello/{name}', function (Request $request, Response $response) {
    return $this->view->render($response, 'test.html', [
           'name' => 'testtest test'
       ]);
});