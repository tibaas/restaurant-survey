import { useNavigate } from "react-router-dom";
import { AuthProps } from "../LoginPage/LogScreen";

export function AdminPage({ setIsAuthenticated }:AuthProps) {


    const navigate = useNavigate();

    function handleLogout() {
      alert("Deslogado com sucesso")
      setIsAuthenticated(false)
      localStorage.removeItem("isAuthenticated")
      navigate("/login")
    }
    return (
        <div>
            Admin Page xdd!

            <button onClick={handleLogout}> Sair </button>
        </div>
    )
}