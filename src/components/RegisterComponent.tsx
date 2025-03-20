import { Usuario } from "@/types/Usuario";
import { useEffect, useState } from "react";
import ThComponent from "./ThComponent";
import TdComponent from "./TdComponent";
import InputComponent from "./InputComponent";

function RegisterComponent() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [user,setUser] = useState<Usuario>()
    useEffect(() => {
        const usuarioLogado:Usuario = JSON.parse(localStorage.getItem('Usuario Logado')||'[]')
        setUser(usuarioLogado)
    },[])
    useEffect(() => {
        const registerTable = JSON.parse(localStorage.getItem("Usuarios cadastrados") || "[]");
        setUsuarios(registerTable);
    }, []);

    return (
        <table className="flex flex-col items-center">
       
        <thead>
        <tr className="flex m-5 gap-1  justify-between">
                    <ThComponent text="ID" />
                    <ThComponent text="Nome"/>
                    <ThComponent text="Email"/>
                    <ThComponent text="Senha"/>
                    <ThComponent text="Function"/>
                </tr>
        </thead>
  
       
        <tbody>
        {
                
                usuarios.map((usuario, index) => (
                    
                    <tr className="flex gap-1 justify-between" key={index}>
                        <TdComponent text={index} />
                        <TdComponent text={usuario.nome} />
                        <TdComponent text={usuario.email == user?.email?usuario.email: "*".repeat(usuario.email.length)} />
                        <TdComponent text={usuario.senha == user?.senha?usuario.senha: "*".repeat(usuario.senha.length)} />
                        <td  className="bg-gray-800 mb-1 w-52 cursor-pointer text-blue-200 text-center p-5"> 
                            Editar
                        </td>
                    </tr>
                ))}
        </tbody>
         
        </table>
    );
}

export default RegisterComponent;
