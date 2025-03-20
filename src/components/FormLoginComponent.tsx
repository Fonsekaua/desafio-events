import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import InputPassComponent from "./InputPassComponent";
import { FormType } from "@/types/FormType";
import { useState, useEffect, FormEvent } from "react";
import { Usuario } from "@/types/Usuario";
type loginType = {
  loginType: () => void
}
function FormLoginComponent( {loginType, FormType }:loginType & FormType) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("Usuarios cadastrados")
    const usuariosSalvos = JSON.parse( storage|| "[]");
    setUsuarios(usuariosSalvos);
  }, []);

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const usuarioEncontrado = usuarios.find((user) => user.email === email && user.senha === senha);

    if (usuarioEncontrado) {
      const data:Usuario = {
        nome: usuarioEncontrado.nome,
        email: email,
        senha: senha
      }
      console.log("Login bem-sucedido!");
      localStorage.setItem('Usuario Logado', JSON.stringify(data) )
      loginType()
    } else {
      console.log("E-mail ou senha incorretos!");
    }
  }

  return (
    <form 
      onSubmit={login} 
      className="flex flex-col justify-center items-center w-screen flex-1 bg-blue-950 text-white"
    >
      <div>
        <h1 className="font-bold text-xl">LOGIN</h1>
      </div>
      <InputComponent 
        setInput={setEmail}
        inputName="E-mail"
        inputType="email"
        inputPlaceholder="Digite seu E-mail aqui..."
      /> 
      <InputPassComponent setInput={setSenha} />
      <ButtonComponent buttonName="Fazer Login" />
      
      <div className="w-70 m-2 flex flex-col items-center">
        <div className="flex items-center justify-between w-70 text-gray-500">
          <div className="bg-gray-500 m-1 rounded-xl h-0.5 w-1/2"></div>
          x
          <div className="bg-gray-500 m-1 rounded-xl h-0.5 w-1/2"></div>
        </div> 
        <small onClick={FormType} className="cursor-pointer hover:underline">
          Não possui conta? Fazer Cadastro
        </small>
      </div>
    </form> 
  );
}

export default FormLoginComponent;
