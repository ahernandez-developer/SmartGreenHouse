<?php
$tel  = $_POST['number'];
$password  = $_POST['password'];

if($tel == "123456" && $password == "123456"){
    header("Location: ./app.php");
    exit();
}
else{
    header("Location: ./badCredentials.php");
    exit();
}

?>