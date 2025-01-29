"use server";

export async function handleForm(prevState: any, formData: FormData) {

  console.log(formData.get('password'))
  
  return {
    errors: [formData.get('password') =='12345' ? 'good' : 'Wrong password'],
  };
}