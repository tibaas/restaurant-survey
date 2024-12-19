import { SetStateAction, useState } from "react";
import { FormButton, LabelContainer, NextButton, QuestionContainer, TextAreaContainer} from "./styles";
import { ArrowCircleRight } from 'phosphor-react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../firebaseConfig";


const questions = [
    {
        id: 1,
        title: 'Quanto tempo demorou para ser atendido(a)?',
        alternatives: ["Rápido", "Mais ou menos 5 minutos", "Demorou um pouco", "Demorou bastante"],
    },
    {
        id: 2,
        title: "Foi bem atendido(a)? Qual sua opinião sobre o nosso atendimento?",
        alternatives: ["Sim fui muito bem atendido.", "Achei o atendimento ok.", "Não fui bem atendido.", "Recebi informação errada sobre o produto."],
    },
    {
        id: 3,
        title: "Qual sua opinião sobre a organização do ambiente?",
        alternatives: ["Organizado e limpo, gostei", "Normal", "Não muito", "Cadeiras ou mesas sujas"],
    },
    {
        id: 4,
        title: "O que você achou do valor que lhe foi cobrado?",
        alternatives: ["Menos do que esperava", "Mais ou menos o que esperava ", "Achei o valor bem justo", "Mais alto do que esperava"],
    },
    {
        id: 5,
        title: "Indicaria a loja para algum amigo ou parente?",
        alternatives: ["Sim", "Não"],
    },

    
]

interface QuestionProps {
    title: string;
    alternatives: string[];
    onChange: (selectedOption: string) => void
    
}

type InputEvent = React.ChangeEvent<HTMLInputElement>

function Question({ title, alternatives, onChange }: QuestionProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>()
    const handleChange = (e: InputEvent) => {
        const value = e.target.value;
        setSelectedOption(value);
        onChange(value);
      };

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
    const [responses, setResponses] = useState<Record<number, string>>({});
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    const questionsPerPage = 3
    const totalPages = Math.ceil(questions.length / questionsPerPage)
    const db = getFirestore(firebaseApp)
    const pesquisaCollectionRef = collection(db, "pesquisa")

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((state) => state + 1)
        }
    }

    const handleTextArea = (e: { target: { value: SetStateAction<string> }}) => {
        setTextAreaValue(e.target.value)
        
    }

    const handleOptionChange = (questionId: number, selectedOption: string) => {
        setResponses((prevState) => ({
          ...prevState,
          [questionId]: selectedOption,
        }));
      };

      const sendData = async () => {
        const payload = {
            tempoAtendimento: responses[1], 
            opiniao: responses[2],          
            organizacao: responses[3],      
            valorCobrado: responses[4],     
            indicacao: responses[5],    
          
          sugestao: textAreaValue,
          data: new Date().toLocaleDateString(),
        };
    
        try {
          await addDoc(pesquisaCollectionRef, payload);
          alert("Dados enviados com sucesso!");
          setResponses({});
          setTextAreaValue("");
          setCurrentPage(0);
        } catch (error) {
          console.error("Erro ao enviar os dados: ", error);
          alert("Erro ao enviar os dados!");
        }
      };

    const startIndex = currentPage * questionsPerPage
    const endIndex = startIndex + questionsPerPage
    const currentQuestions = questions.slice(startIndex, endIndex)

    return (
        <>
            <form>
                {currentQuestions.map((question) => (
                    <Question
                    key={question.id}
                    title={question.title}
                    alternatives={question.alternatives}
                    onChange={(selectedOption: string) =>
                      handleOptionChange(question.id, selectedOption)
                    }
                  />
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
                                maxLength={200} 
                                rows={7} 
                                cols={32} 
                                value={textAreaValue} 
                                onChange={handleTextArea} />
                            </TextAreaContainer>
                            <FormButton onClick={sendData} type="button"><span>FINALIZAR</span></FormButton>
                        </>
                    )}                  
                </div>
            </form>
        </>   
    )
}



