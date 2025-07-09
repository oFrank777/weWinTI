import React from 'react'
import { useForm } from "react-hook-form"
import InputEmail from '../pures/InputEmail';
import InputFechaNacimiento from '../pures/InputFechaNacimiento';
import InputCadena from '../pures/InputCadena';
import InputCel from '../pures/InputCel';
import InputDNI from '../pures/InputDNI';
import InputCargo from '../pures/InputCargo';
import InputMonto from '../pures/InputMonto';
export default function RegistroEmpleados() {
  const { register, setValue, formState: { errors }, handleSubmit, reset } = useForm();
  const mandar = (data) => {
    console.log(data);
    reset()
  }
  return (
    <div className='flex justify-center'>

      <form onSubmit={handleSubmit(mandar)} className='justify-center flex flex-col  m-1 h-[auto] w-[1000px] bg-stone-200 text-lg font-serif ' >

        <div className='flex  space-x-20'>
          <InputCadena

            required={true}
            type={"text"}
            name={"nombres"}
            id={"nombres"}
            label={"Nombres"}
            errors={errors.nombres}
            register={register}
            

          />

          <InputCadena

            required={true}
            type={"text"}
            name={"apellidos"}
            id={"apellidos"}
            label={"Apellidos"}
            errors={errors.apellidos}
            register={register}


          />

        </div>

        <div className='flex  space-x-20' >
          <InputDNI
            label={"Ingrese su DNI: "}
            type={"number"}
            id={"dni"}
            name={"dni"}
            register={register}
            errors={errors.dni}
          />

          <InputFechaNacimiento
            label={"Fecha de Nacieminto"}
            id={"nacimiento"}
            name={"nacimiento"}
            errors={errors.nacimiento}
            register={register}
            type={"date"}

          />


        </div>

        <div className='flex  space-x-20 '>
          <InputCel
            label={"Ingrese numero de contacto:"}
            type={"number"}
            id={"numeroCel"}
            name={"numeroCel"}
            register={register}
            errors={errors.numeroCel}


          />


        </div>





        <div className='flex  space-x-40 '>
          <InputEmail
            label={"Ingrese correo"}
            type={"email"}
            id={"email"}
            name={"email"}
            errors={errors.email}
            register={register}
          />

          <InputCargo
            value={"colab"}
            label={"Cargo"}
            register={register}
            id={"cargo"}
            name={"cargo"}
          />


        </div>
        <div className=' flex space-x-20'>
          <InputCadena

            required={true}
            type={"text"}
            name={"direccion"}
            id={"direccion"}
            label={"Direccion:"}
            errors={errors.direccion}
            register={register}


          />
          <InputMonto
            type={"number"}
            label={"Sueldo"}
            register={register}
            id={"sueldo"}
            name={"sueldo"}
            placeholder={"40000"}
            required={true}
            readOnly={false}
          />

        </div>










        <div className='flex  w-full justify-center m-4  items-center '>

          <button type="submit"

            className='w-full  bg-rose-500 pt-4 pb-4 text-white text-xm rounded-lg hover:bg-rose-700'
          >

            Guardar

          </button>
        </div>

      </form>


    </div>
  )
}