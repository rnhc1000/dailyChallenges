<?php

function groupByOwners(array $files) : array
{

    var_dump($files);

    $sizeOfFiles = sizeof($files);
    var_dump($sizeOfFiles);
    $k = 0;
    $key = array();
    $v = array();

    foreach ($files as $key => $value) {
        $v[$k] = $value;
        $k++; 
    }

    

    
    var_dump($v);

    return [];
}

$files = array(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));