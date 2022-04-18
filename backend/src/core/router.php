<?php
 namespace app\core;
class Router {
    private $dev="/contacts/mvc2/public/";
    public Request $request;
    private Response $response;
    public  $routes=[];
    public function __construct(){
        $this->request=new Request();
        $this->response = new Response();
    }
    public function get($path,$callback){
        $this->routes['GET'][$this->dev.$path]=$callback;
    }
    public function post($path,$callback){
        $this->routes['POST'][$this->dev.$path]=$callback;
    }

    public function put($path,$callback){
        $this->routes['PUT'][$this->dev.$path]=$callback;
    }
    public function getRouteMap($method): array
    {
        return $this->routeMap[$method] ?? [];
    }

    public function resolve(){
        $path= $this->request->getPath();
        $method = $this->request->getMethod();
        $callback= $this->routes[$method][$path] ?? false;
        if($callback === false) 
    {
        $this->response->setStatusCode(404);
        return "404 Not Found";
    }
        if(is_string($callback))
            return $this->renderView($callback);
        return call_user_func($callback);
    }
    function renderView($view){
        $layout= $this->layoutContent();
        $view = $this->renderOnlyView($view);
        return str_replace("{{change}}",$view,$layout);
    }
    function layoutContent(){
        ob_start();
        include_once App::$ROOT_DIR."/views/layouts/main.php";
        return ob_get_clean();
    }
    function renderOnlyView($view){
        ob_start();
        include_once App::$ROOT_DIR."/views/".$view."/".$view.".php";
        return ob_get_clean();

    }
}
?>