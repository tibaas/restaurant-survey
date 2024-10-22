import { GlobalLoginPageContainer, LoginContainer, InputsContainer, LogoContainer } from "./styles";
import LoginPage from '../../assets/green-login-login.svg'
import BgLogo from '../../assets/restaurantelogo.svg'
import { Lock, UserCircle } from "phosphor-react";
export function LogScreen() {
    return (
        <>
            <GlobalLoginPageContainer>
                <LogoContainer>
                    {/* <h1>Bem vindo</h1> */}
                    <img src={BgLogo} alt="" />
                </LogoContainer>
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
        </>

    )
}