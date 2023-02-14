<?php
session_start();
session_destroy();
unset($_COOKIE['usuario']);
unset($_COOKIE['email']);
setcookie('usuario', '');
setcookie('email', '');
header('Location: login.php');
