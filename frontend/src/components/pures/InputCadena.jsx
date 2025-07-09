import React from 'react'

export default function InputCadena({required,label,placeholder,type,errors,register,id,name}) {
  return (

    <div   className='flex flex-col gap-2 m-4'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} name={name} {...register(name,
      {
        required:{required},
        
        minLength:{
            value:2,
            message:"debe tener mas de 2 caracteres",
        },
        maxLength:{
            value:60,
            message:"no puede tener mas de 20 caracteres"
        }


      })}
      className=' text-xl caret-blue-700 rounded-lg  w-[400px] h-[60px]  border-b-4 border-b-indigo-900  '
      />
      
      {
         errors && <span>{errors?.message}</span>
      }
     
      
    </div>
  )
}