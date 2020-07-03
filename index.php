<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <title>Login</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


</head>

<body class="text-center">
    <form class="container  h-100" action="./validate.php" method="POST">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-sm-12 col-md-4">
                <img src="./assets/logo.png" class="pb-4" alt="logo">
                <label for="inputEmail" class="sr-only">No telefono</label>
                <input type="text" id="inputEmail" name="number" class="mb-4 form-control" placeholder="No telefono" required autofocus>
                <label for="inputPassword" class="sr-only">Contraseña</label>
                <input type="password" id="inputPassword" name="password" class="mb-4 form-control" placeholder="Contraseña" required>
                <div class="checkbox mb-3">
                    <label class="float-right pb-1">
                        <input type="checkbox" value="remember-me"> Recordar credenciales
                    </label>
                </div>
                <button class="btn btn-lg btn-success btn-block" type="submit">Entrar</button>
                <a class="float-right text-under" href="tel:+526563073034"><u>Soporte</u> </a>
                <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
            </div>

        </div>
    </form>
</body>

</html>