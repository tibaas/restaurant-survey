import { useNavigate } from "react-router-dom";
import { AuthProps } from "../LoginPage/LogScreen";
import { HeaderContainer, PageContainer } from "./styles";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../firebaseConfig";
import { Timestamp } from "firebase/firestore"

interface DataProps {
    id:string
    data: string;
    tempoAtendimento: string;
    opiniao: string;
    organizacao: string;
    valorCobrado: string;
    indicacao: string;
    sugestao: string;
}

export function AdminPage({ setIsAuthenticated }:AuthProps) {

    const [databaseFile, setDataBaseFile] = useState<DataProps[]>([])
    const db = getFirestore(firebaseApp)
    const pesquisaCollectionRef = collection(db, "pesquisa")


    const navigate = useNavigate();

    function handleLogout() {
      alert("Deslogado com sucesso")
      setIsAuthenticated(false)
      localStorage.removeItem("isAuthenticated")
      navigate("/login")
    }

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(pesquisaCollectionRef);
          setDataBaseFile(
            data.docs.map((doc) => {
              const docData = doc.data();
              return {
                id: doc.id,
                data: docData.data instanceof Timestamp ? docData.data.toDate().toLocaleDateString() : docData.data,
                tempoAtendimento: docData.tempoAtendimento,
                opiniao: docData.opiniao,
                organizacao: docData.organizacao,
                valorCobrado: docData.valorCobrado,
                indicacao: docData.indicacao,
                sugestao:docData.sugestao ,
              };
            })
          );
        };
      
        getUsers();
      }, [pesquisaCollectionRef]);


      async function deleteRow(id: string) {
        const rowDoc = doc(db, "pesquisa", id)
        await deleteDoc(rowDoc)
      }

    return (
        <>
        <PageContainer>


            <HeaderContainer>
                <header> <h2>Tabela de Feedback</h2></header>
                <button onClick={handleLogout}> Sair </button> 
            </HeaderContainer>

            <section>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Data</th>
                            <th>Tempo Atendimento</th>
                            <th>Opinião sobre Atendimento</th>
                            <th>Organização</th>
                            <th>Valor Cobrado</th>
                            <th>Indicação</th>
                            <th>Sugestão Pessoal</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                databaseFile.map((item) => {
                                    return(
                                        <tr key={item.id}>
                                        <td>{item.data}</td>
                                        <td>{item.tempoAtendimento}</td>
                                        <td>{item.opiniao}</td>
                                        <td>{item.organizacao}</td>
                                        <td>{item.valorCobrado}</td>
                                        <td>{item.indicacao}</td>
                                        <td>{item.sugestao}
                                            <button onClick={() => deleteRow(item.id)}> X </button>     
                                        </td>
                                    </tr>
                                    )
                                })
                            }                       
                        </tbody>
                    </table>
                </div>
            </section>

        </PageContainer>

        </>

    )
}