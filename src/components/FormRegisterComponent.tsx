import { FormEvent, useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import InputPassComponent from "./InputPassComponent";
import { FormType } from "@/types/FormType";
import { Usuario } from "@/types/Usuario";

function FormRegisterComponent({ FormType }: FormType) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Carregar usuários do localStorage ao iniciar
  useEffect(() => {
    const usuariosSalvos = JSON.parse(localStorage.getItem("Usuarios cadastrados") || "[]");
    setUsuarios(usuariosSalvos); // Corrigido para um array válido
  }, []);

  function cadastro(event: FormEvent) {
    event.preventDefault();
    
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      console.log("Preencha todos os campos corretamente!");
      return;
    }

    const existe = usuarios.some((usuario) => usuario.email === email);
    if (existe) {
      console.log("E-mail já cadastrado no localStorage");
      return;
    }

    const novoUsuario: Usuario = { nome, email, senha };
    const novaLista = [...usuarios, novoUsuario];
    
    setUsuarios(novaLista);
    localStorage.setItem("Usuarios cadastrados", JSON.stringify(novaLista)); // Salvar imediatamente no localStorage
    console.log("Cadastro realizado com sucesso!");
  }

  return (
    <form 
      onSubmit={cadastro} 
      className="flex flex-col justify-center items-center w-screen flex-1 bg-blue-950 text-white"
    >
      <div>
        <h1 className="font-bold text-xl">CADASTRO</h1>
      </div>
      <InputComponent setInput={setNome} inputName="Nome" inputType="text" inputPlaceholder="Digite seu nome aqui..." />
      <InputComponent setInput={setEmail} inputName="E-mail" inputType="email" inputPlaceholder="Digite seu E-mail aqui..." />     
      <InputPassComponent setInput={setSenha} />
      <ButtonComponent buttonName="Fazer Cadastro" />
      <div className="w-70 m-2 flex flex-col items-center">
        <div className="flex items-center justify-between w-70 text-gray-500">
          <div className="bg-gray-500 m-1 rounded-xl h-0.5 w-1/2"></div>
          x
          <div className="bg-gray-500 m-1 rounded-xl h-0.5 w-1/2"></div>
        </div> 
        <small onClick={FormType} className="cursor-pointer hover:underline">
          Já possui conta? Faça Login
        </small>
      </div>
    </form> 
  );
}

export default FormRegisterComponent;
