import { GlobalLoginPageContainer, LoginContainer, InputsContainer } from "./styles";
import LoginPage from '../../assets/login-page-logo.svg'
import { Lock, UserCircle } from "phosphor-react";
export function LogScreen() {
    return (
        <GlobalLoginPageContainer>
            <img src={LoginPage} alt="" /> 
            <LoginContainer>
                <h1>Login</h1>
                <InputsContainer>
                    <label>
                    <span>Usuário</span>
                    <div>

                        <UserCircle size={23} />
                    </div>
                        <input   type="text" />
                        
                    </label>

                    <label>
                    <span>Senha</span>
                        <input type="password" />
                    <div>
                        
                        <Lock size={23} />
                    </div>
                    </label>

                    <button type="submit">
                        Conectar
                    </button>

                    
                </InputsContainer>
            </LoginContainer>         
        </GlobalLoginPageContainer>
    )
}