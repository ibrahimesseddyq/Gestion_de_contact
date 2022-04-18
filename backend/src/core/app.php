<?php
 namespace app\core;
    use app\core\Request;
    use app\core\Router;
    use app\controller\RestUser;
    define('ROOTPATH',dirname(__DIR__));

class App {
    public static $ROOT_DIR;
    public Router $router;
    public Request $request;
    public static RestUser $rest;
    public function __construct(){
        self::$ROOT_DIR=ROOTPATH;
        $this->request= new Request();
        $this->router = new Router($this->request);
        self::$rest= new RestUser();
    }
    public function run(){
         $this->getContacts();
         $this->postContact();
         $this->putContact();
         $this->deleteContact();
         $this->login();
         $this->router->resolve();


    }
    function login(){
        $this->router->post("login",function(){
            return self::$rest->login();
        });
    }
    function getContacts(){
        $this->router->get("contacts",function(){
           echo self::$rest->get();

       });
   }
   function deleteContact(){
    $this->router->get("deletecontact",function(){
        return self::$rest->delete();
    });
}
function postContact(){
    $this->router->post("contacts",function(){
        return self::$rest->post();
    });
}
function createUser(){
    $this->router->post("signup",function(){
        return self::$rest->createOne();
    });
}
function putContact(){
    $this->router->put("contacts",function(){
        return self::$rest->put();
    });
}
}