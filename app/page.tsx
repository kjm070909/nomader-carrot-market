"use client"

import { useFormState } from "react-dom"
import { handleForm } from "./actions"

export default function Home() {
  const [state,action] = useFormState(handleForm,null)
  return(
    <div className="m-auto mt-6 h-[100vh] w-[100vh] text-center justify-center ">
      <h1 className="text-[24px] font-semibold ">Login</h1>
      <form className="flex flex-col gap-3 p-[30px]" action={action}>

          <input type="email" name="email" placeholder="email" className=" rounded-xl p-1 border-2 text-black border-black  font-semibold"/>
        <input type="name" name="name" placeholder="name" className=" rounded-xl p-1 border-2 border-black text-black  font-semibold"/>
        <input type="password" name="password" placeholder="password" className=" rounded-xl p-1 border-2 border-black text-black  font-semibold"/>
        <div>{state?.errors.map((error,key) => <span>{error =='good' ? "" : <span key={key} className="text-red-900">{error}</span>}</span>)}</div>

        <button className="bg-gray-700 rounded-xl p-2">LOGIN</button>
        <div>{state?.errors.map((error,key) => <span>{error =='good' ? <div className="bg-green-500 text-white rounded-xl p-2">Welcome Home!</div> : ''}</span>)}</div>
      </form>

    </div>
  )
}