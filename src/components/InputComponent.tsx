import { useState } from "react";

type Props = {  
  
  setInput: React.Dispatch<React.SetStateAction<string>>;  
  inputName: string;
  inputType: string;
  inputPlaceholder: string;
};

function InputComponent({setInput, inputName, inputType, inputPlaceholder }: Props) {
 
  return (
    <label className="flex flex-col p-1" htmlFor={inputName}>
      {inputName}
      <div className="flex mb-1 p-4 bg-sky-900 rounded-lg w-70">
        <input
          className="outline-none mr-1"
          type={inputType}
          placeholder={inputPlaceholder}
          onChange={(e) => setInput(e.target.value) }
        />
      </div>
    </label>
  );
}

export default InputComponent;
