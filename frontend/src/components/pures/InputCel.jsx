import React from 'react'

export default function InputCel({label,type,id,name,register,errors}) {
  return (
    <div  className='flex flex-col gap-2 m-4'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id}  placeholder=" 967854563"name={name}{...register(name,{

            required:true,
            minLength:{
                value:9,
                message:"debe tener 9 números",

            },
            pattern:{
                value:"/^\d+$/",
                message:"ingrese solo numeros",
            },
        })}
        className=' text-xl  rounded-lg  w-[400px] h-[60px]   border-b-4 border-b-indigo-900 '
        />
        {
            errors && <span>{errors?.message}</span>
        }



    </div>
  )
}