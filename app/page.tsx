"use client";


import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const startvalue = {
  token:false,
  error:undefined
}

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogIn, startvalue);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        
        {state.token ?        <input
        className="text-black"
          name="token"
          type="number"
          placeholder="Verification code"
          required
          min={100000}
          max={999999}
        /> : <input className="text-black" name="phone" type="number" placeholder="Phone number" required /> }

        <button className="bg-orange-500 p-2 rounded-xl">{!state.token ? "phone number" : "code please"}</button>
      </form>
    </div>
  );
}