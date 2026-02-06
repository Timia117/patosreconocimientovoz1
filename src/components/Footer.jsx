
function Footer() {
  return (
    <footer className="contenedor__barra-principal">
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center px-4">
        
        <section aria-labelledby="footer-tema-1" className="hidden sm:block">
          <h3 id="footer-tema-1" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section aria-labelledby="footer-tema-2" className="hidden sm:block">
          <h3 id="footer-tema-2" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
        </section>

        <section aria-labelledby="footer-tema-3">
          <h3 id="footer-tema-3" className="font-bold text-lg mb-2">Tema</h3>
          <p>Página</p>
          <p>Página</p>
          <p>Página</p>
          
        </section>
      </section>
    </footer>
  );
}

export default Footer;
