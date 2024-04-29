<?php

namespace App\Http\Controllers;

use App\Mail\OfferEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ApiController extends Controller
{
    public function sendMail(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required',
                'phone' => 'required',
                'email' => 'required',
                'message' => '',
            ]);


            Mail::to(env('MAIL_FROM_ADDRESS'))->send(new OfferEmail($validatedData));


        } catch (\Illuminate\Validation\ValidationException $e){

            return response()->json(['errors' => $e->errors()], 422);

        }catch (\Exception $e) {

            return response()->json(['error' => 'E-mail küldése sikertelen.'], 500);
        }

        return response()->json(['success' => 'E-mail sikeresen elküldve!']);
    }
}
