
import { GlobalContainer, GlobalContent } from "./styles";
import { QuestionComponent } from "./QuestionComponent/QuestionComponent";

export function GlobalComponent() {
    return (
        <>              
                {/* <ImageContainer>
                    <img src={Wave} alt="" />                
                </ImageContainer>             */}
            <GlobalContainer>
                <GlobalContent>
                        <QuestionComponent />  
                </GlobalContent>
            </GlobalContainer>     
        </>
        
    )
}













