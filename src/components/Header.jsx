import Nav from "./Nav.jsx";

function Header() {
  return (
    <header className="contenedor__barra-principal">
      <div className="text-center mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold tracking-wide">Ducklyn</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
