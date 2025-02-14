import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";


async function getUser() {
  const session = await getSession()
  if (session.id){
    const user = await db.user.findUnique({
      where:{
        id:session.id
      },

    })
  if (user) {
    return user
  }
  }
  
  notFound()
}




export default async function Home() {
  const user = await getUser()
  const logout = async () =>{
    "use server"
    const session = await getSession()
    await session.destroy()
    redirect('/login')
  }
  return(
    <div>
      <h1>{user.username}</h1>
      <form action={logout}>
        <button>LOG OUT</button>
      </form>
    </div>
  )
}