"use server";
import {z} from "zod"

function checkemail(email:string){
  return(
    email.includes("@zod.com")
    
  )
}

const checkpassword = new RegExp(
  '/[1-9]/'
)

const formschema = z.object({
  email:z.string().refine(checkemail,'false email'),
  username:z.string().min(5,'5글자 이상이어야합니다'),
  password:z.string().regex(/[1-9]/, {
    message: "비밀번호에는 1~9 사이의 숫자가 최소 하나 포함되어야 합니다.",
  }).min(10,'비밀번호는 10글자 이상이어야 합니다')
})

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    username:formData.get('name'),
    password:formData.get('password'),

  }
  const result = formschema.safeParse(data)
  if (!result.success) {
    return result.error.flatten()
  } else {
    console.log('good')
  }

}