import React from 'react'

export default function InputFechaNacimiento({ label, errors,type, id, name, register }) {
    return (
        <div className='flex flex-col gap-2 m-4'>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id}     {...register(name,
                {
                    required: true,
                    validate: (data) => {
                        const dataPer = new Date(data);
                        const currentYear = new Date();
                        if (currentYear.getFullYear() - dataPer.getFullYear() >= 18) {
                            return true;

                        } else {

                            return "debe ser mayor de 18 años"
                        }


                    }
                })} 
                
                className='text-xl caret-blue-700 rounded-lg  w-[400px] h-[60px]'
                />
            {
                errors && <span className='text-red-600'> {errors?.message}</span>
            }


        </div>


    )
}