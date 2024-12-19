import { GlobalLoginPageContainer, LoginContainer, InputsContainer, LogoContainer } from "./styles";
import LoginPage from '../../assets/green-login-login.svg'
import { Lock, UserCircle } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LogScreen({setIsAuthenticated}: {setIsAuthenticated: (value: boolean) => void}) {

    const [userName, setUserName] = useState("")
    const [password, setUserPassword] = useState("")
    const navigate = useNavigate()

    function handleLoginSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (userName === "admin" && password === "password") {
            setIsAuthenticated(true)
            navigate("/admin")
          } else {
            alert("Credenciais inválidas!")
          }
    }

    return (
        <>
            <GlobalLoginPageContainer>
                <LogoContainer>
                    
                </LogoContainer>
                <img src={LoginPage} alt="" /> 
                <LoginContainer>
                    <h1>Login</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <InputsContainer>
                            <label>
                            <span>Usuário</span>
                            <div>

                                <UserCircle size={23} />
                            </div>
                                <input 
                                type="text" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}  
                                />
                                
                            </label>
                            <label>
                            <span>Senha</span>
                                <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setUserPassword(e.target.value)}
                                />
                            <div>                                
                                <Lock size={23} />
                            </div>
                            </label>
                            <button type="submit">
                                Conectar
                            </button>
                        
                        </InputsContainer>
                    </form>    

                </LoginContainer>         
            </GlobalLoginPageContainer>      
        </>

    )
}