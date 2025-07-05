
export default function Footer() {
  return (
    <div className="text-muted-foreground py-8  bg-stone-300 mt-[2rem]">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
        
          <span className="text-lg font-semibold">Acme Travel</span>
        </div>
        
        <p className="text-sm text-bold">&copy; 2024 Acme Travel. Todos los derechos reservados.</p>
      </div>

    </div>
  )
}