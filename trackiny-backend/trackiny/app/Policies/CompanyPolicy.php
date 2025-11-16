<?php

namespace App\Policies;

use App\Models\Company;
use App\Models\User;
use Illuminate\Auth\Access\Response;
class CompanyPolicy
{
        public function before(User $user, string $ability): bool|null

    {

        if ($user->isCompany()) {

            return true;

        }



        return null;

    }
}


