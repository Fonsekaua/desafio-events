import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
type Props = {
    setInput: React.Dispatch<React.SetStateAction<string>>
}
function InputPassComponent ({setInput}:Props) {
    const [eye,setEye] = useState(false)
    
    return (
        <label className="flex flex-col p-1" htmlFor="Senha">
        Senha
        <div className="flex mb-1 p-4 bg-sky-900 justify-between items-center rounded-lg w-70">
          <input
            className="outline-none mr-1"
            type={eye?"text":"password"}
            placeholder="Digite sua senha aqui..."
            onChange={(e) => setInput(e.target.value)}
          />
          {
            eye ? (
                <FaEye onClick={()=> setEye(!eye)} size={30} color="gray"/>
            ) : (
                <FaEyeSlash onClick={()=> setEye(!eye)} size={30} color="gray"/>
            )
          }
        </div>
      </label>
    )
}

export default InputPassComponent 