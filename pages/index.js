export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      <header className="w-full border-b p-6 flex justify-center">
        <img src="/logo.png" alt="Logo Hernán Del Castillo" className="h-16 object-contain" />
      </header>

      <section className="flex flex-col items-center text-center py-16 px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Estudio Jurídico Hernán Del Castillo</h1>
        <p className="text-lg mb-6">Asesoría y defensa legal en Derecho Penal, Procesal Penal, Derecho Administrativo y Contrataciones con el Estado.</p>
        <a href="#contacto" className="bg-black text-white px-4 py-2 rounded-lg">Agenda una consulta</a>
      </section>

      <section id="servicios" className="grid gap-6 md:grid-cols-2 max-w-4xl px-4 py-12 w-full">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Derecho Penal</h2>
          <p>Defensa en procesos penales, denuncias y asesoría integral en materia penal.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Procesal Penal</h2>
          <p>Patrocinio en procesos penales, estrategias procesales y acompañamiento en juicios.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Derecho Administrativo</h2>
          <p>Asesoría y defensa en procedimientos administrativos y recursos impugnativos.</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Contrataciones Públicas</h2>
          <p>Consultoría y defensa en procesos de contratación con el Estado (OSCE).</p>
        </div>
      </section>

      <section id="sobre-mi" className="max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p>Soy Hernán Del Castillo, abogado con grado en Derecho y formación en Derecho Penal, Procesal Penal y Derecho Administrativo. Actualmente curso diplomaturas en Derecho Administrativo y Contrataciones Públicas. Mi misión es brindar un servicio legal ético, eficiente y orientado a resultados.</p>
      </section>

      <section id="contacto" className="bg-black text-white w-full py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="mb-2">Email: abogadohernandelcastillo@gmail.com</p>
        <p className="mb-4">WhatsApp: +51 999 999 999</p>
        <a href="mailto:abogadohernandelcastillo@gmail.com" className="bg-white text-black px-4 py-2 rounded-lg">Escríbeme</a>
      </section>

      <footer className="w-full border-t p-4 text-center text-sm">
        © {new Date().getFullYear()} Hernán Del Castillo - Estudio Jurídico. Todos los derechos reservados.
      </footer>
    </main>
  )
}
