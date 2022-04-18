<?php
    namespace app\models;

use mysqli;

    class DB {
        private  string $username;
        private string $host;
        private string $password;
        private string $dbname;
        private  $mydb; 

        public function __construct($host,$username,$pass,$dbname)
        {
            $this->username=$username;
            $this->host=$host;
            $this->password=$pass;
            $this->dbname=$dbname;
                 $this->mydb=mysqli_connect($this->host,$this->username,$this->password,$this->dbname);

        }
        function getDBInstance(){
            return $this->mydb;
        }
        function query($query){
            try{
                $stmt =$this->mydb->query($query);
                return $stmt;

            }catch(\Exception $e){
            }

        }
    }