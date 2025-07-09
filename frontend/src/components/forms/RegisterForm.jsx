import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../auth/register';
import { toast } from 'react-toastify';

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    watch,
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerUser(data);
      toast.success("¡Registro exitoso!");
      reset();
      navigate('/login');
    } catch (error) {
      const msg = error?.response?.data?.message || '¡Error al registrar usuario!';
      toast.error(msg);
      console.error(error);
    }
  });

  const inputClass =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors";

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-white  px-4">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Crea tu cuenta</h2>

        {/* Grid con dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombres */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nombres</label>
            <input
              type="text"
              placeholder="Carlos"
              {...register("nombre", {
                required: "Nombre requerido",
                minLength: { value: 2, message: "Mínimo 2 caracteres" },
                maxLength: { value: 30, message: "Máximo 30 caracteres" }
              })}
              className={inputClass}
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
          </div>

          {/* Apellido Paterno */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Apellido Paterno</label>
            <input
              type="text"
              placeholder="Fernández"
              {...register("apellidoPaterno", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.apellidoPaterno && <span className="text-red-500 text-sm">{errors.apellidoPaterno.message}</span>}
          </div>

          {/* Apellido Materno */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Apellido Materno</label>
            <input
              type="text"
              placeholder="Divala"
              {...register("apellidoMaterno", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.apellidoMaterno && <span className="text-red-500 text-sm">{errors.apellidoMaterno.message}</span>}
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Teléfono</label>
            <input
              type="text"
              placeholder="967854563"
              {...register("telefono", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Dirección</label>
            <input
              type="text"
              placeholder="Av. Las Flores 123"
              {...register("direccion", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.direccion && <span className="text-red-500 text-sm">{errors.direccion.message}</span>}
          </div>

          {/* DNI */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">DNI</label>
            <input
              type="number"
              placeholder="Número de DNI"
              {...register("dni", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.dni && <span className="text-red-500 text-sm">{errors.dni.message}</span>}
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Fecha de Nacimiento</label>
            <input
              type="date"
              {...register("fechaNacimiento", {
                required: "Campo requerido",
              })}
              className={inputClass}
            />
            {errors.fechaNacimiento && <span className="text-red-500 text-sm">{errors.fechaNacimiento.message}</span>}
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Correo requerido",
              })}
              className={inputClass}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              {...register("password", {
                required: "Contraseña requerida",
                minLength: { value: 6, message: "Mínimo 6 caracteres" }
              })}
              className={inputClass}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="********"
              {...register("confirmPassword", {
                required: "Confirma tu contraseña",
                validate: value =>
                  value === watch("password") || "Las contraseñas no coinciden"
              })}
              className={inputClass}
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          </div>
        </div>

        {/* Botón de envío */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
