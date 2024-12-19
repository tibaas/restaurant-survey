import { useNavigate } from "react-router-dom";

export function AdminPage({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {


    const navigate = useNavigate();

    function handleLogout() {
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