<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class TransportPolicy
{
        public function before(User $user, string $ability): bool|null

    {

        if ($user->isTransport()) {

            return true;

        }



        return null;

    }
}


