"use client";

import FormLoginComponent from "@/components/FormLoginComponent";
import FormRegisterComponent from "@/components/FormRegisterComponent";
import { useState } from "react";
import { FaUser, FaUserSlash } from "react-icons/fa";


export default function App() {
  const [form,setForm] = useState('login')
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
      <FaUserSlash title="Deslogado" className="cursor-pointer" size={30} color="white" />
    </header>
    {
      form == "login" &&
      <FormLoginComponent FormType={formType}/>
    }
    {
      form == "register" && 
      <FormRegisterComponent FormType={formType} />
    }
    
    </div>
  );
}
