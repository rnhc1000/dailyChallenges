<?php
session_start();
session_destroy();

header('Location: sessao.1.php');