
import { GlobalContainer, GlobalContent, ToLoginPageButton } from "./styles";
import { QuestionComponent } from "./QuestionComponent/QuestionComponent";
import { ArrowCircleUpRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function GlobalComponent() {

    const navigate = useNavigate()

    function HandleClick() {
        navigate("/login")
    }
    return (
        <>              
                {/* <ImageContainer>
                    <img src={Wave} alt="" />                
                </ImageContainer>             */}
            <GlobalContainer>


                <GlobalContent>
                    <ToLoginPageButton onClick={() => HandleClick()}> <ArrowCircleUpRight size={32} />  </ToLoginPageButton>
                        <QuestionComponent />  
                </GlobalContent>
            </GlobalContainer>     
        </>
        
    )
}













