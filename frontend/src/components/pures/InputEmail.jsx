import React from 'react'

const regex=" /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
export default function InputEmail({label,type,id,errors,register,name}) {
    //const{ register,formState:{errors}} =useForm();
  return (
    <div className='flex flex-col gap-2 m-4'>
        <label htmlFor='email' >{label}</label>
                    <input type={type} id={id} placeholder='example@gmail.com' name={name} {...register(name,
                        {
                            required: true,
                            pattern: {regex},
                                

                        })}
                        className=' text-xl rounded-lg  w-[400px] h-[60px] text-xl   m-2   border-b-4 border-b-indigo-900'
                    />
                    {
                        errors && <span className='text-red-600'> {errors?.message}</span>
                    }

    </div>
  )
}