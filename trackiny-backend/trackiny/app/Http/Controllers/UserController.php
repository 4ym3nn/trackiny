<?php

namespace App\Http\Controllers;

use  App\Enums;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;
use app\models\Transport;
use app\models\Company;

Enum UserType : string
{
    case COMPANY='company';
    case TRANSPORT='transport';
}
class UserController extends Controller
{
    public function transport():HasOne
    {
        return $this->hasOne(Transport::class);
    }
    public function company():HasOne
    {
        return $this->hasOne(Company::class);
    }
    public function isTransport(){
        return $this->role === 'transport';
    }
     public function isCompany(){
        return $this->role === 'company';
    }
   function login() {
        $incomingFields=request()->validate([
            'email'=>['required','email'],
            'password'=>['required']
        ]);
        if (auth()->attempt($incomingFields)) {
            session->regenerate();
        }
         else {
            return back()->withErrors(['email'=>'Invalid Credentials'])->onlyInput('email');
    }
     }
    function register() {
        $incomingFields=request()->validate([
            'name'=>['required','min:3','max:20',Rule::Unique('users','username')],
            'email'=>['required','email',Rule::Unique('users','email')],
            'password'=>['required'],
            'type'=>['required',Rule::enum(UserType::class)]
        ]);
        $incomingFields['password']=bcrypt($incomingFields['password']);
       $user=  User::create($incomingFields);
       auth()->login($user);

    }
    function logout() {
        $incomingFields=request()->validate([
            'username'=>['required','min:3','max:20'],
            'email'=>['required','email'],
            'password'=>['required']
        ]);
    }



}
