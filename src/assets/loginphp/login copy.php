<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <title>Iniciar sesión</title> -->
        <?php require("db.php"); ?>
        <?php session_start();?>
    </head>
    <body>
        <?php
            if(!isset($_SESSION['name'])){ // Usuario no iniciado
                if(isset($_POST["nombre"]) && $_POST["pwd"] != null){  // Usuario iniciado despues de form

                    $nombre = $_POST["nombre"];
                    $pwd = $_POST["pwd"];
                    try{
                        $conex = new conexion();
                        $base = $conex->getConector();
                        $consulta="SELECT nombre, pwd FROM usuarios WHERE nombre=?";
                        $stmt = $base->prepare($consulta);
                        $stmt -> execute(array($nombre));
                        while($rs=$stmt->fetch(PDO::FETCH_ASSOC)){
                            if(password_verify($pwd, $rs['pwd'])){
                                $_SESSION['name']  = $nombre;   
                            }
                            else error("Usuario o contraseña incorrecto");
                        }
                        $stmt->closeCursor();
                        $conex=null;

                    }
                    catch(Exception $e){
                        echo $e->GetMessage();
                    }
                }
            
                else{  // Form inicio de sesión

                }
            }
            
            else{ // Ususario ya iniciado hacer cosas

            }
            function error($mensaje){
                echo "<script> alert('Error: ".$mensaje."!!'); window.location.href = 'localhost/login'; </script>";
                exit;    
            }
        ?>

    </body>
</html>