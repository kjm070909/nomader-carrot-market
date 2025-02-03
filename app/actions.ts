"use server"
import {z} from"zod"
import validator from "validator"
import { redirect } from "next/navigation"

const phoneschema = z.string().trim().refine((phone) => validator.isMobilePhone(phone,"ko-KR"),"wrong phone number")

const tokenSchema = z.coerce.number().min(100000).max(999999)

export async function smsLogIn(prevState: any, formData: FormData) {
  const token = formData.get("token")
  const phone = formData.get("phone")
  if (!prevState.token) {
    const result = phoneschema.safeParse(phone)
    if (!result.success){
        return {
            token:false,
            error:result.error.flatten(),
        }
    }else {
        return{
            token:true
        }
    }
    
  }else{
    const result = tokenSchema.safeParse(token)
    if(!result.success) {
        return {
            token:true,
            error:result.error.flatten()
        }
    }else{
        redirect("https://naver.com")
    }
  }
}