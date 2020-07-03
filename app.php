<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.dataTables.min.css">
    <link rel="stylesheet" href="./app.css">
    <title>SmartGreenHouse</title>
</head>

<body>
    <nav class="navbar navbar-light   sticky-top justify-content-between" style="background-color:#A4C2A5">
        <img src="./assets/logo.png" height="35px" alt="logo">

        <a href="/" class="btn btn-dark my-2 my-sm-0" type="submit">Salir</a>

    </nav>
    <div id="app" class="container text-center">

        <div class="row justify-content-center">
            <div class="col-6">

                <div class="row justify-content-between">
                    <div>
                        <h2 class="pt-5 text-danger">{{currentTempInside}}°</h2>
                        <span>Temperatura actual interior</span>
                    </div>
                    <div>
                        <h2 class="pt-5 text-danger">{{currentTempOutside}}°</h2>
                        <span>Temperatura actual exterior</span>
                    </div>

                </div>
            </div>
        </div>
        <br>

        <hr>
        <div class="row justify-content-between">
            <div class="col-md-6 ">
                <canvas id="day"></canvas>
            </div>
            <div class="col-md-6">
                <canvas id="week"></canvas>
            </div>
        </div>
        <hr>
        <h2 class="pt-5">Historial de temperaturas</h2>
        <img v-if="history.length ==0" height="75px" src="https://www.uscib.org/uscib-content/uploads/2014/12/loading.gif" alt="">
        <table v-else id="history" class="table table-striped mt-5 ">
            <thead class="text-white" style="background-color: #2e3532;">

                <th>
                    Temperatura interior
                </th>
                <th>
                    Temperatura exterior
                </th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr v-for="(record,index) in history" :key="index">

                    <td>
                        {{record.insideTemp}}°
                    </td>
                    <td>
                        {{record.outsideTemp ? record.outsideTemp+'°' : "No disponible"}}
                    </td>
                    <td>
                        {{record.created}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- scripts -->
    <script src="https://www.chartjs.org/dist/2.9.3/Chart.min.js"></script>
    <script src="https://www.chartjs.org/samples/latest/utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.min.js"></script>
    <script src="./day.js"></script>
    <script src="./week.js"></script>
    <script src="./main.js"></script>
</body>

</html>