<?php

declare(strict_types=1);

namespace app\classes;

final class User
{

    public $nome;

    public function user(string $nome):string {
        return $this->$nome;
    }
}
