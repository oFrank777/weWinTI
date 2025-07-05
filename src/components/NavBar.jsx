 import {Link, Outlet} from "react-router-dom"
import { useAuth } from '../contex/ContexAuth'
export default function NavBar() {

  const {authState,logout} =useAuth();
  const {role} =authState;
  return (
    <div className="text-white bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between bg-slate-950	">
      <Link to="/" className='flex items-center text-xl text-bold'> <img src="assets/icons/icons8-alpes-64.png" alt="ico" className='m-2 w-[3rem]' />We win</Link>
    
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="nosotros">Nosotros</Link>
        <Link to="contacto">Contacto</Link>
        <Link to="clientes">Clientes</Link>
        <Link to="empleados">Empleados</Link>
        {role ==="admin" && (
          
          <Link to= "administrar">Administrar</Link>  
        )
            
        }
        {
          role=="empleado" &&(
            <Link to= "administrar">Administrar</Link>  
          )
        }
       
        <Link to="servicios">Servicios </Link>
         <Link to="paquetes">Paquetes </Link>
         {
             !role && (
              <>
              <Link to="login">Login</Link>
               <Link to="registrarse">Registrarse</Link>

              
              </>
             )

         }
         {
          role && (
            <button onClick={logout} className='text-white hover:bg-sky-700 text-center rounded-lg w-[200px] h-[50px] m-3 bg-blue-500'>
              Logout
            </button>
          )
         }
        
      </nav>

     

   
      
      
      
    </div>
  )

}