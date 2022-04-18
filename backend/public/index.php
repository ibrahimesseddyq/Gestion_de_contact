<?php
    require_once __DIR__."./../vendor/autoload.php";
    use app\core\App;
    use app\core\CORS;
    CORS::acceptCors();
    $app= new App();
    $app->run();

     ?>