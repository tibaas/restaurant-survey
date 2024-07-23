
import { GlobalContainer, GlobalContent, ImageContainer } from "./styles";
import Wave from '../../assets/bgimage.svg'
import { QuestionComponent } from "./QuestionComponent/QuestionComponent";

export function GlobalComponent() {
    return (
        <>
                
                <ImageContainer>
                    <img src={Wave} alt="" />                
                </ImageContainer>            


            <GlobalContainer>
                <GlobalContent>
                        <QuestionComponent />  
                </GlobalContent>
            </GlobalContainer>

        
        </>
        
    )
}




















 {/* <form>
                        <div>
                            <QuestionComponent />                                    
                        </div>

                        <div>
                            <p>Qual sua nota para a limpeza do ambiente da loja?</p>
                            <input type="radio" /> <label>0</label>
                            <input type="radio" /> <label>1</label>
                            <input type="radio" /> <label>2</label>
                            <input type="radio" /> <label>3</label>
                            <input type="radio" /> <label>4</label>
                            <input type="radio" /> <label>5</label>
                            <input type="radio" /> <label>6</label>
                            <input type="radio" /> <label>7</label>
                            <input type="radio" /> <label>8</label>
                            <input type="radio" /> <label>9</label>
                            <input type="radio" /> <label>10</label>

                        </div>

                        <div>
                            <p>Foi bem atendido(a)? Qual sua opinião sobre o nosso atendimento?</p>
                            <input type="radio" /> <label>Sim, fui muito bem atendido(a).</label>
                            <input type="radio" /> <label>Achei o atendimento OK.</label>
                            <input type="radio" /> <label>Não fui bem atendido.</label>
                            <input type="radio" /> <label>Recebi informação errada sobre o produto.</label>
                        </div>

                        <div>
                            <p>Qual sua opinião sobre a organização do ambiente?</p>
                            <input type="radio" /> <label>Bom.</label>
                            <input type="radio" /> <label>Bem organizado, gostei!</label>
                            <input type="radio" /> <label>Não muito.</label>
                            <input type="radio" /> <label>Normal.</label>
                        </div>

                        <div>
                            <p>Qual sua opinião em relação ao valor dos nossos produtos? </p>
                            <input type="radio" /> <label> Um pouco abaixo do valor que imaginei.</label>
                            <input type="radio" /> <label>Bem o valor que eu esperava.</label>
                            <input type="radio" /> <label>Um pouco acima do valor que imaginei.</label>
                            <input type="radio" /> <label>Achei bem caro.</label>

                        </div>

                        <div>
                            <p>Deixe sua sugestão!</p>
                            <textarea
                            placeholder="Digite aqui sua opinião..." 
                            rows={10} 
                            cols={60} 
                            maxLength={250} 
                            >

                            </textarea>
                        </div>
                    </form> */}