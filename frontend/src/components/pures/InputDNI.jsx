import React from 'react'

export default function InputDNI({label,type,id,name,register,errors}) {
  return (
    <div  className='flex flex-col m-4 gap-2'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id}  placeholder='  45963214' name={name}{...register(name,{

            required:true,
            minLength:{
                value:8,
                message:"debe tener 8 números",

            },
            pattern:{
                value:"/^\d+$/",
                message:"ingrese solo numeros",
            },
        })}
         className='rounded-lg  w-[400px] h-[60px] text-xl   border-b-4 border-b-indigo-900 '
        />
        {
            errors && <span>{errors?.message}</span>
        }



    </div>
  )
}