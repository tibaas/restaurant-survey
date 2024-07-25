import { SetStateAction, useState } from "react";
import { FormButton, LabelContainer, NextButton, QuestionContainer, TextAreaContainer} from "./styles";
import { ArrowCircleRight } from 'phosphor-react'

const questions = [
    {
        id: 1,
        title: 'Quanto tempo demorou para ser atendido(a)?',
        alternatives: ["Menos de 5 minutos", "10 minutos", "20 minutos", "Demorou bastante"],
    },
    {
        id: 2,
        title: "Foi bem atendido(a)? Qual sua opinião sobre o nosso atendimento?",
        alternatives: ["Sim fui muito bem atendido.", "Achei o atendimento ok.", "Não fui bem atendido.", "Recebi informação errada sobre o produto."],
    },
    {
        id: 3,
        title: "Qual sua opinião sobre a organização do ambiente?",
        alternatives: ["Bom", "Bem organizado, gostei!", "Não muito", "Normal"],
    },
    {
        id: 4,
        title: "O que você achou do valor que lhe foi cobrado?",
        alternatives: ["Menos do que esperava", "Mais ou menos o que esperava ", "Achei o valor bem justo", "Bem mais alto do que esperava"],
    },
    {
        id: 5,
        title: "Indicaria a loja para algum amigo ou parente?",
        alternatives: ["Sim", "Não"],
    },
    {
        id: 6,
        title: 'Quanto tempo demorou para ser atendido(a)?',
        alternatives: ["Menos de 5 minutos", "10 minutos", "20 minutos", "Demorou bastante"],
    },
    {
        id: 7,
        title: "Foi bem atendido(a)? Qual sua opinião sobre o nosso atendimento?",
        alternatives: ["Sim fui muito bem atendido.", "Achei o atendimento ok.", "Não fui bem atendido.", "Recebi informação errada sobre o produto."],
    },
    {
        id: 8,
        title: "Qual sua opinião sobre a organização do ambiente?",
        alternatives: ["Bom", "Bem organizado, gostei!", "Não muito", "Normal"],
    },
    // {
    //     id: 9,
    //     title: 'Quanto tempo demorou para ser atendido(a)?',
    //     alternatives: ["Menos de 5 minutos", "10 minutos", "15 minutos", "25 minutos", "Demorou bastante"],
    // }
]

interface QuestionProps {
    title: string;
    alternatives: string[];
    
}



type InputEvent = React.ChangeEvent<HTMLInputElement>


function Question({ title, alternatives }: QuestionProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>()


    const handleChange = (e: InputEvent) => {
        setSelectedOption(e.target.value)      
    }

    // useEffect(() => {console.log(selectedOption)},[selectedOption])

    return (
      <QuestionContainer>
        <p>{title}</p>        
          {alternatives.map((alternative, index) => (
            <div key={index}>
                 <LabelContainer>
                    <label>
                        <input 
                            type="radio" 
                            value={alternative}
                            checked={selectedOption === alternative}
                            onChange={handleChange}
                        />
                        <span>{alternative}</span>
                    </label>
                 </LabelContainer>
            </div>
          ))} 
      </QuestionContainer>
    );
}

export function QuestionComponent() {
    const [currentPage, setCurrentPage] = useState(0)
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    const questionsPerPage = 3
    const totalPages = Math.ceil(questions.length / questionsPerPage)


    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((state) => state + 1)
        }
    }

    const handleTextArea = (e: { target: { value: SetStateAction<string> }}) => {
        setTextAreaValue(e.target.value)
        
    }

    

    const startIndex = currentPage * questionsPerPage
    const endIndex = startIndex + questionsPerPage
    const currentQuestions = questions.slice(startIndex, endIndex)


    return (
        <>
            <form>
                {currentQuestions.map((question) => (
                    <Question key={question.id} title={question.title} alternatives={question.alternatives} />
                ))}

                <div>
                    {currentPage < totalPages - 1 ? (
                        <NextButton 
                            type="button" 
                            onClick={handleNextPage}><span>Avançar</span><ArrowCircleRight size={30} /> 
                        </NextButton>                              
                    ) : (
                        <>
                            <TextAreaContainer>
                                <p>Deixe-nos uma sugestão</p>
                                <textarea 
                                rows={7} 
                                cols={32} 
                                value={textAreaValue} 
                                onChange={handleTextArea} />
                            </TextAreaContainer>
                            <FormButton type="submit"><span>FINALIZAR</span></FormButton>
                        </>
                    )}                  
                </div>
            </form>
        </>   
    )
}



