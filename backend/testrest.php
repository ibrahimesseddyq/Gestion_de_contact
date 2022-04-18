<?php
    namespace app;
    use rest\REST;



$rest = new REST();
$rest->setDB("root","localhost","","testrest");
$res= $rest->getAll("testrest");
echo "<pre>";
print_r($res);
echo "</pre>";