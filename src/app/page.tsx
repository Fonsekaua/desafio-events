"use client";

import FormLoginComponent from "@/components/FormLoginComponent";
import FormRegisterComponent from "@/components/FormRegisterComponent";
import RegisterComponent from "@/components/RegisterComponent";
import { Usuario } from "@/types/Usuario";
import { use, useEffect, useState } from "react";
import { FaUser, FaUserSlash } from "react-icons/fa";

export default function App() {
  const [login,setLogin] = useState(false)
  const [form,setForm] = useState('login')
  const [user,setUser] = useState<Usuario>()
  useEffect(()=>{
    const usuarioLogado:Usuario = JSON.parse(localStorage.getItem("Usuario Logado") || "[]");
    setUser(usuarioLogado)
  },[])
  console.log(user?user.nome:"sem usuario")
  function loginType ( ) {
      return (
        setLogin(true)
      )
  }
  function formType () {
    return(
      form == 'login'?setForm('register'):setForm("login")
    )
}
  return (
    <div className="w-screen h-screen flex flex-col ">
    <header className="bg-sky-950  border-b-1 border-blue-300 flex w-screen items-center justify-between p-5">
      <h1>
        Seja Bem Vindo !!
      </h1>
      {
          user &&
            <FaUser title={"Você esta logado !! "} size={30} color="gray" className="cursor-pointer" />
      }
      {
          !user &&
            <FaUserSlash title={"Você esta deslogado"} size={30} color="gray" className="cursor-pointer"/>
      }   
    

    </header>
    {
       login == false && 
        <>
        {
        form == "login" &&
        <FormLoginComponent loginType={loginType} FormType={formType}/>
      }
      {
        form == "register" && 
        <FormRegisterComponent FormType={formType} />
      }
        </>
      
    }
    {
      login &&
      <RegisterComponent />
    }
    
    </div>
  );
}
