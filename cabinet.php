<?php
//var_dump($_COOKIE);
if (!isset($_COOKIE['email']) or trim($_COOKIE['email']) == '') {
    header("Location: index.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>User cabinet</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
    <link rel="stylesheet" href="css/style.css" media="screen,projection" />


    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="user-cabinet-header">User cabinet</h1>
            </div>
            <div class="col l12 center-align">
                <button id="logout" class="btn waves-effect waves-light">
                    <i class="material-icons right">keyboard_tab</i>
                    Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col l4">
                <form>
                    <div class="row">
                        <div class="input-field col s6">

                            <input type="text" name="name" id="signup-name" class="validate">

                            <label class="active" for="signup-name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="text" name="pass" id="signup-pass">

                            <label class="active" for="signup-pass">Password</label>
                        </div>

                        <div class="input-field col s12">
                            <input type="text" name="birthday" id="signup-birthday" class="datepicker">
                            <label class="active" for="signup-birthday">Birthday</label>
                        </div>
                        <div class="input-field col s6">
                            <p>
                                <label>
                                    <input class="with-gap sex" name="sex" value="male" type="radio">
                                    <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap sex" name="sex" value="female" type="radio">
                                    <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input class="with-gap sex" name="sex" value="other" type="radio">
                                    <span>Other</span>
                                </label>
                            </p>
                        </div>

                        <div class="input-field col s12">
                            <buttun type="submit" id="signup-submit" class="btn waves-effect waves-light">Update<i class="material-icons right">refresh</i></buttun>
                        </div>


                    </div>
            </div>

            <!-- <div>name: <input type="text" name="name" id="signup-name" class="validate"></div>
                    <div>password: <input type="text" name="pass" id="signup-pass"></div>
                    <div>birthday: <input type="text" name="birthday" id="signup-birthday"></div> -->

            <!-- <div>sex:
                <div> <input type="radio" value="male" name="sex" class="sex">male</div>
                <div><input type="radio" value="female" name="sex" class="sex">female</div>
                <div><input type="radio" value="other" name="sex" class="sex">other</div>
            </div>

            <div></div> -->

            </form>
        </div>
    </div>
    </div>

    <script src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>

</body>

</html>