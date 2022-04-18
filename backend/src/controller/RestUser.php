<?php
    namespace app\controller;

use app\core\JWTHandler;
use app\core\Response;
use app\models\DB;

    class RestUser extends REST{
        public Response $response;
        function __construct(){
            $this->response= new Response();
            $this->con=new DB(LOCALHOST,USERNAME,PASS,DBNAME);
        }
        function get(){
            $id=$_GET['id'];
            $result= $this->con->query(GET."contacts WHERE fk_user='$id'");
            $result= $result->fetch_all(MYSQLI_ASSOC);
            ob_start();
 
            echo json_encode($result);
            return ob_get_clean();
        }
        function getOne(){

        }
        function createOne(){
            $body= json_decode(file_get_contents('php://input'));
            if(!empty($body->username) && !empty($body->password)){
                $username=$body->name;
                $pass=$body->password;
  
               $this->con->query("INSERT INTO users(username,password) VALUES('$username','$pass')");
            }else{
                $this->response->setStatusCode(500);
                echo json_encode([
                    "status"=>500,
                    "message"=>"access denied"
                ]);
            }
        }
        function post(){
            $body= json_decode(file_get_contents('php://input'));
            if(!empty($body->name) && !empty($body->phone)){
                $name=$body->name;
                $phone=$body->phone;
                $email=$body->email;
                $adress=$body->adress;
                $id = $body->id;
                var_dump("PHP");
               $this->con->query("INSERT INTO contacts(name,phone,email,adress,fk_user) VALUES('$name','$phone','$email','$adress','$id')");
            }else{
                $this->response->setStatusCode(500);
                echo json_encode([
                    "status"=>500,
                    "message"=>"access denied"
                ]);
            }

           }
        function delete(){
            $id =$_GET['id'];
            $this->con->query("DELETE FROM contacts where contactid =".$id);
        }
        function put(){
            $body= json_decode(file_get_contents('php://input'));
            $name=$body->name;
            $phone=$body->phone;
            $email=$body->email;
            $adress=$body->adress;
            $id =$_GET['id'];
            $this->con->query("UPDATE contacts SET name='$name',phone='$phone',email='$email',adress='$adress' WHERE contactid='$id'");
    
        }
        function login(){
            $body= json_decode(file_get_contents('php://input'));
            if(!empty($body->username) && !empty($body->password)){
                $name=$body->username;
                $password=$body->password;
                $result = $this->con->query("select * from users WHERE username='$name' and password='$password'");
                if($result->num_rows>0){
                    $jwtHandler= new JWTHandler();
                    $result = $result->fetch_all(MYSQLI_ASSOC);
                    $data= [
                        "id"=>$result[0]["user_id"],
                        "username"=>$result[0]["username"],
                        "doj"=>$result[0]['dateofjoin']
                    ];
                    $jwt=$jwtHandler->jwtEncodeData("localhost",$data);
                    echo json_encode([
                        "status"=>200,
                        "message"=> "logged in successfuly",
                        "jwt"=>$jwt,
                        "id"=>$data['id'],
                        "exp"=>$jwtHandler->getExpire()
                    ]);
                }else{
                    echo json_encode([
                        "status"=>500,
                        "message"=> "internal error"
                    ]);
                }
            }else{
                $this->response->setStatusCode(500);
                echo json_encode([
                    "status"=>500,
                    "message"=>"access denied"
                ]);
            }
        }
    }