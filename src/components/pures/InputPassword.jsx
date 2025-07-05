import React from 'react'

export default function InputPassword({label,type,name,id,placeholder,register,errors}) {
    return (
        <div className='flex flex-col gap-2 m-4'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} {...register(name,
                {
                    required: true,
                    minLength: {
                        value: 6,
                        message: " debe tener minimo 6 caracteres."


                    }


                })}
                className=' text-xl caret-blue-800 rounded-lg  w-[400px] h-[60px] text-xl caret-blue-700  m-2    border-b-4 border-b-indigo-900 '
            />

            {

                errors && <span className='text-red-600'> {errors.message}</span>
            }

        </div>
    )
}