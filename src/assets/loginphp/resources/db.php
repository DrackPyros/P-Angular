<?php
    class conexion{
        
         public $bbdd;
         public $ruta;
         public $dbname;
         public $usr;
         public $pwd;
        
        function __construct() {

            $string = file_get_contents("./resources/config.json");
            $con = json_decode($string, true);

            $this->bbdd = $con['bbdd'];
            $this->ruta = $con['ruta'];
            $this->dbname = $con['dbname'];
            $this->usr = $con['usr'];
            $this->pwd = $con['pwd'];
        
            $this->conex = new PDO("$this->bbdd:host=$this->ruta;dbname=$this->dbname","$this->usr",$this->pwd);
            $this->conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        function getConector(){
            return $this->conex;
        }
        function desconectar(){
            return $this->conex=null;
        }
    }
?>

