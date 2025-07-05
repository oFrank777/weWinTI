import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputEmail from '../pures/InputEmail';
import InputPassword from '../pures/InputPassword';
import InputCel from '../pures/InputCel';
import InputDNI from '../pures/InputDNI';
import InputCadena from '../pures/InputCadena';
import InputFechaNacimiento from '../pures/InputFechaNacimiento';
import { registerUser } from '../../auth/register';

export default function RegisterForm() {

  const navegation = useNavigate();

  const { watch, register, reset, handleSubmit, formState: { errors } } = useForm();
  const mandar = handleSubmit(async data => {
    console.log(data);
    try {
      const rest = await registerUser(data);
      //toast.success("registro exitoso");
      navegation("/login");

    } catch (error) {
      toast.error('ocurrio un erro!');
      console.log(error)
    }
    reset();
  });
  return (
    <div className='flex justify-center border-2 items-center '>

      <form onSubmit={mandar}
        className='flex flex-col gep-4  m-4 rounded-lg w-[900px] h-[auto] items-center shadow-2xl'
      >
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-2 m-4'>
              <label htmlFor="nombre">Nombres</label>
              <input type="text" placeholder='  Carlos...' id="nombre"{...register("nombre",
                {
                  required: "nombre invalido",
                  pattern: "/^[a-zA-Z]+$/",
                  minLength: {
                    value: 2,
                    message: "debe tener mas de dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "no puede tener mas de 20 caracteres",
                  }

                }

              )}
                className=' text-xl  rounded-lg  w-[400px] h-[60px]   border-b-4 border-b-indigo-900 '
              />
              {errors.nombre && <span>{errors.nombre?.message}</span>}
            </div>

            <div className='flex flex-col gap-2 m-4'>
              <label htmlFor="apellidoP">Apellidos Parteno</label>
              <input type="text" placeholder="   Fernandez..." id="apellidoP" {...register("apellidoPaterno",
                {

                  required: "apellido invalido",
                  pattern: "/^[a-zA-Z]+$/",
                  minLength: {
                    value: 2,
                    message: "debe tener mas de dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "no puede tener mas de 20 caracteres",
                  }



                })}
                className=' text-xl  rounded-lg  w-[400px] h-[60px]   border-b-4 border-b-indigo-900 '
              />
              {errors.apellidoPaterno && <span>{errors.apellidoPaterno.message}</span>}

            </div>
            <div className='flex flex-col gap-2 m-4'>
              <label htmlFor="apellidoM">Apellidos Materno</label>
              <input type="text" id="apellidoM" placeholder='  Divala..' {...register("apellidoMaterno",
                {

                  required: "apellido invalido",
                  pattern: "/^[a-zA-Z]+$/",
                  minLength: {
                    value: 2,
                    message: "debe tener mas de dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "no puede tener mas de 20 caracteres",
                  }



                })}
                className=' text-xl  rounded-lg  w-[400px] h-[60px]   border-b-4 border-b-indigo-900 '
              />
              {errors.apellidoMaterno && <span>{errors.apellidoMaterno.message}</span>}




            </div>

          </div>
          <div className='flex flex-col'>
            <div>

            </div>
            <InputCel
              label={"Ingrese numero de contacto:"}
              type={"number"}
              id={"numeroCel"}
              name={"celular"}
              register={register}
              errors={errors.numeroCel}


            />

            <InputCadena
              id={"direccion"}
              label={"Direccion"}
              type={"text"}
              placeholder={" Av. Las frecias ...."}
              name={"direccion"}
              register={register}
              errors={errors.direccion}


            />
            <InputDNI
              label={"Ingrese su DNI: "}
              type={"number"}
              id={"dni"}
              name={"dni"}
              register={register}
              errors={errors.dni}
            />

          </div>

        </div>


        <div className='flex'>
          

            <InputFechaNacimiento
              label={"Fecha de Nacieminto"}
              id={"nacimiento"}
              name={"fechaNacimiento"}
              errors={errors.nacimientoNacimiento}
              register={register}
              type={"date"}

            />



        </div>









        <InputEmail
          label={"Email"}
          type={"email"}
          id={"email"}
          errors={errors.email}
          register={register}
          name={"email"}
        />
        <InputPassword
          label={"Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"password"}
          register={register}
          errors={errors.password}

        />
        <div className='flex flex-col'>
          <label htmlFor="confirmPassword">Confirmar Password</label>
          <input type="password" id="confirmPassword" placeholder='password...'{...register("confirmPassword", {

            required: true,
            minLength: {
              value: 6,
              message: "minimo 6 caracteres",
            },
            validate: (data) => {
              if (data === watch("password")) {
                return true;
              } else {
                return "las contraseñas no coinciden";
              }
            }
          })} className='rounded-lg  w-[400px] h-[60px] text-xl caret-blue-700  m-2   border-b-4 border-b-indigo-900' />
          {
            errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>
          }


        </div>




        <div className='bg-stone-100 my-8'>
          <button type="submit"
            className='bg-slate-800 rounded-lg p-4 hover:bg-slate-600 w-[50rem] text-white'
          >
            Registrarse

          </button>
        </div>

      </form>



    </div>
  )
}