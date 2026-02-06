import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { userLogged, login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Llama a la función de login del contexto
    navigate("/administration"); // Redirige al admin tras login
  };

  if (userLogged) {
    return (
      <section className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Ya estás logueado</h2>
        <p>Puedes acceder al panel de administración.</p>
      </section>
    );
  }

  return (
    <>
      <section className=" w-full max-w-md aspect-square mx-auto mt-20 p-10 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center ">
        <h3>
            <p className="contenedor__titulo">Inicia sesión</p>
        </h3>
        <button
          onClick={handleLogin}
          className="btn mt-6"
        >
          Login
        </button>
      </section>
    </>
  );
}
export default Login;
