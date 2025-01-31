"use client"

import { useFormState } from "react-dom"
import { createAccount } from "./actions"

export default function Home() {
  const [state,action] = useFormState(createAccount,null)

  return(
    <div className="m-auto mt-6 h-[100vh] w-[100vh] text-center justify-center ">
      <h1 className="text-[24px] font-semibold ">Login</h1>
      <form className="flex flex-col gap-3 p-[30px]" action={action}>

          <input type="email" name="email" placeholder="email" className=" rounded-xl p-1 border-2 text-black border-black  font-semibold"/>
          
          <div>{state?.fieldErrors.email?.map((error) => <span>{error}</span>)}</div> 
        <input type="name" name="name" placeholder="name" className=" rounded-xl p-1 border-2 border-black text-black  font-semibold"/>
        <div>{state?.fieldErrors.username?.map((error) => <span>{error}</span>)}</div>
        <input type="password" name="password" placeholder="password" className=" rounded-xl p-1 border-2 border-black text-black  font-semibold"/>
        <div>{state?.fieldErrors.password?.map((error) => <li>{error}</li>)}</div>

        <button className="bg-gray-700 rounded-xl p-2">LOGIN</button>
        <div>{state === undefined ? <div className="p-2  bg-green-400 rounded-xl border-2 border-black">good job</div> : ''}</div>
        {/* <div>{state?.errors.map((error: string,key: any) => <span>{error =='good' ? <div className="bg-green-500 text-white rounded-xl p-2">Welcome Home!</div> : ''}</span>)}</div> */}
      </form>

    </div>
  )
}