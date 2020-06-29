<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="app.css">
    <title>SmartGreenHouse</title>
</head>

<body>
    <div class="container text-center">
        <h1>Smart Green House</h1>
        <div class="row justify-content-center">
            <div>
                <h2 class="pt-5 text-danger">35°</h2>
                <span>Temperatura actual</span>
            </div>

        </div>
        <div class="row justify-content-between">
            <div class="col-md-6 ">
                <canvas id="day"></canvas>
            </div>
            <div class="col-md-6">
                <canvas id="week"></canvas>
            </div>
        </div>
        <h2 class="pt-5">Historial de temperaturas</h2>
        <table class="table table-striped mt-5">
            <thead>
                <th>ID</th>
                <th>
                    Temperatura
                </th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        15°
                    </td>
                    <td>
                        25-Junio-2020
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- scripts -->
    <script src="https://www.chartjs.org/dist/2.9.3/Chart.min.js"></script>
    <script src="https://www.chartjs.org/samples/latest/utils.js"></script>

    <script src="day.js"></script>
    <script src="week.js"></script>
    <script src="main.js"></script>
</body>

</html>