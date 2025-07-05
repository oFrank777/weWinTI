import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import  {useNavigation} from "react-router-dom"
import { Login } from '../../auth/login';

import {AuthContext} from "../../contex/ContexAuth"

export default function LoginForm() {
    const navigate =useNavigation();
    
    const {login } =useContext(AuthContext)
    const { reset, register, handleSubmit, setValue, formState: { errors } } = useForm();
    const mando = handleSubmit( async data=> {
       
        reset();
        try{
          const res= await Login(data);
          console.log("res",res);
          
          login(res.data.toke,res.data.role,res.data.email);
          navigate("/servicios");
        }catch(error){
            console.log("fallo ligin",error)
        }
      
    });
    return (
        <div className='border-2  flex justify-center items-center'>
            <form onSubmit={mando}
                className=' text-xl m-2 font-sans shadow-2xl w-[500px] h-[800px] m-10 p-10 flex flex-col gap-4 backdrop-sepia-0 bg-white/30    rounded-lg'
            >
                <div className='border-2  flex justify-center items-center '>
                    <img className=' border-2 border-red-900' src="/assets/img/uss.png" alt="asdsd" />

                </div>
                <div className='mt-20 flex flex-col'>
                    <label htmlFor='email' className='m-2'>Email</label>
                    <input type="text" id='email' placeholder='exameple@gmail.com' {...register("email",
                        {
                            required: true,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: " correo ingresado invalido."
                            },

                        })}
                        className=' text-xl caret-blue-700 rounded-lg h-[60px] m-2 border-4 border-b-indigo-500 '
                    />
                    {
                        errors.email && <span className='text-red-600'> {errors.email?.message}</span>
                    }

                </div>

                <div className='mt-10 flex flex-col'>
                <label htmlFor='password' className='m-1'>Password</label>
                <input type="password" id='password' placeholder='password' {...register("password",
                    {
                        required: true,
                        minLength: {
                            value: 2,
                            message: " debe tener minimo 6 caracteres."


                        }


                    })}
                    className=' text-xl caret-blue-800 rounded-lg h-[60px] m-2  border-4 border-b-indigo-500 '
                />

                {

                    errors.password && <span className='text-red-600'> {errors.password?.message}</span>
                }


                </div>


              


                <div className=' mt-10 flex intems-center justify-center'>

                    <button type="submit"
                        className='text-white hover:bg-sky-700 text-center rounded-lg  w-[200px] h-[50px]  m-3 bg-blue-500'
                    >

                        Iniciar Sesión

                    </button>


                </div>





            </form>



        </div>
    )
}